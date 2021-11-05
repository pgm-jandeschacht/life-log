import { Controller, Get, Post, UseGuards, Request, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
// import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService,private readonly appService: AppService) {}
//   constructor(private readonly appService: AppService) {}
  
  @Get('seed')
  seedUsers(): void {
      // this.appService.seedFamilyMembers();
    }
    
    // POST /login
    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Request() req): any {
        console.log('Hello Dylan');
        // going to return the details of that user
        return this.authService.login(req.user);
        // return req.user;
        // return req.user;
    }

    // it goes to the guard, triggers 'jwt-strategy.ts', so it FAILS & gives 401
    // if there is a JWT, it goes to the guard, triggers 'jwt-strategy.ts', so it SUCCEEDS & gives 200
    @UseGuards(JwtAuthGuard)
    @Get('protected')
    getHello(@Request() req): string {
        return req.user;
    }


    @Get('seed/:table/:amount')
    seed(@Request() req, @Param('table') table: string, @Param('amount') amount: number): any {
        // return this.usersService.seedUsers(amount);
        this.appService.seedDatabase();
        // return amount;
        
    }
    
    // GET /protected
    // @Get('protected')
    // getHello(): string {
    //   return this.appService.getHello();
    // }
}
