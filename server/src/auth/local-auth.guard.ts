// Guards block on a specific route if necessary
import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

// You can use multiple strategies, that's why it is given as a parameter
@Injectable()
export class LocalAuthGuard extends AuthGuard("local") {
    
}
