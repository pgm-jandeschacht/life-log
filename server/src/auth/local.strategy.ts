import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        // pass in object, client id, client secret, ...
        // local stragety doesn't require much
        // WHen you use other strategy
        super();
    }

    async validate(username: string, password: string): Promise<any> {
        console.log('VALIDATE STRATEGY');

        // is now array with user & familyMemberId
        const user = await this.authService.validateUser(username, password);
        console.log('userARRAY?',user);
        
        if (!user) {
            // in stead of using "done" from passport-local
            console.log('NO USER');
            throw new UnauthorizedException();
        }
        console.log('RETURN USER....');
        console.log('USERLOCAL', user);
        return user;
    }


}