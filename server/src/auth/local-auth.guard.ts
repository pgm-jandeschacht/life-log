// Guards block on a specific route if necessary
import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

// You can use multiple strategies, that's why it is given as a parameter
@Injectable()
export class LocalAuthGuard extends AuthGuard("local") {
    async canActivate(context: ExecutionContext) {
        const result = (await super.canActivate(context)) as boolean;
        // console.log('result', result);
        const request = context.switchToHttp().getRequest();

        await super.logIn(request);
        return result;
    }
}
