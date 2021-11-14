import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { FamilyMembersService } from 'src/family-members/family-members.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService, 
        private jwtService: JwtService,
    ) {}

    async validateUser(username: string, password: string): Promise<any> {
        console.log('user', username, 'password', password);
    
        // user = "error" if not found by username
        // user from service is the one from db
        const user = await this.usersService.findOneByUsername(username);

        // this will only return id & email
        if(user && user.password === password){
            const { password, username, ...rest } = user;
                const familyMember = await this.usersService.findFamilyMemberByUserId(user.id);
                console.log('FAMILYMEMBER', familyMember);
            // console.log(rest);
            // return { rest, familyMember.id};
            return [ rest, familyMember.id];
        }
        console.log('USER GEFAILED', user);
        return null;
    }

    async login(user: any) {
        const payload = { name: user.username, sub: user.id };
        console.log('payload', user);
        console.log('USER:', user);

            const familyMember = await this.usersService.findFamilyMemberByUserId(user.id);
            console.log('FAMILYMEMBER in LOGIN', familyMember);

        return {
            token: this.jwtService.sign(payload),
            user: user,
            familyMemberId: familyMember.id
        };
    }
}
