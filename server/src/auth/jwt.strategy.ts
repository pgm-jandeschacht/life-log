import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UsersService } from "src/users/users.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
      private usersService: UsersService
  ) {
    super({
        // extract the token from the header
        // & do its validation
        // VALIDATION
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), 
        ignoreExpiration: false, // when expiration is expired, it won't work
        secretOrKey: 'SECRET' // store in .env file
        })
    }

    async validate(payload: any) {
        // is going to be the same as from auth.service
        // how do we want our object to lo look like
        // THIS is going to be saved in the req.user

        // Once you kNOW the user is Validated,
        // ALL THIS comes available in the req.user
        // More information about the user from the database?
        // f.e. :
        // const user = await this.userService.getById(payload.sub);
        const familyMember = await this.usersService.findFamilyMemberByUserId(payload.sub);
        console.log('FAMILYMEMBER', familyMember);
        return { 
            userId: payload.sub, 
            username: payload.username,
            familyMember: familyMember
            // add optional user
            // ...user
        };

    } 



}