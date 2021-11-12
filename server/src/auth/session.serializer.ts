import { Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";

@Injectable()
export class SessionSerializer extends PassportSerializer{
    // user who returns from 'local.strategy' gets inputted in this method
    // th whole object can be saved, you can specify differently
    serializeUser(user: any, done: (err: Error, user: any) => void): any {
        done(null, user);
        // done(null, { id: user.id });
    }
    
    // You can inject usersservice & 
    deserializeUser(payload: any, done: (err: Error, payload: string) => void): any {
        done(null, payload);
        // You could do this as well
        // const user = this.usersServic.findOneById(payload.id);
        // done(null, user);
    }
}