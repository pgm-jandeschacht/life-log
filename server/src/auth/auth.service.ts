import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) {}

    async validateUser(username: string, password: string, id: number): Promise<any> {
        console.log('user', username, 'password', password, 'id', id);
    
        const user = await this.usersService.findOneByUsername(username);
        console.log(user);

        // user from service is the one from db
        // this will only return id & email
        console.log('----');
        
        console.log('----');
        if(user && user.password === password){
            const { password, username, ...rest } = user;
            // console.log(rest);
            return rest;
        }

        return null;
    }

    async login(user: any) {
        const payload = { name: user.username, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
