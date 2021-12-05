import { 
  Controller, 
  Get, 
  Post, 
  UseGuards, 
  Request, 
  Param 
} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly authService: AuthService,
    private readonly appService: AppService
  ) {}

@Get('hello')
getHelloTest(): string {
    return 'Hello';
}
  
  @Get('seed')
  seedUsers(): void {
    // this.appService.seedFamilyMembers();
  }
  
  // POST /login
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
      // going to return the details of that user
      // return this.authService.login(req.user);
      // return req.user;
      // return req.user;
      
      // with session
      // return {msg: 'Logged in!'};

      // with jwt
      return this.authService.login(req.user);
  }

  // it goes to the guard, triggers 'jwt-strategy.ts', so it FAILS & gives 401
  // if there is a JWT, it goes to the guard, triggers 'jwt-strategy.ts', so it SUCCEEDS & gives 200

  
  // Session cookie
  // @UseGuards(AuthenticatedGuard)

  // enkel met JWT
  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Request() req): string {
      return req.user;
  }


  @Get('seed/:amount')
  seed(@Request() req, @Param('amount') amount: number): any {
  // seed(@Request() req, @Param('table') table: string, @Param('amount') amount: number): any {
      // return this.usersService.seedUsers(amount);
      this.appService.seedDatabase(amount);
      return `Seeded ${amount} users`;
      // return amount;
  }

  @Get('help')
  getHelp() {
    this.appService.addHelpPages();
  }

  @Get('clear_database')
  emptyDatabase() {
      this.appService.emptyDatabase();
      return `database is cleared`;
  }
}
