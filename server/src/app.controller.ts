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
  
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
      return this.authService.login(req.user);
  }

  // enkel met JWT
  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Request() req): string {
      return req.user;
  }


  @Get('seed/:amount')
  seed(@Request() req, @Param('amount') amount: number): any {
      this.appService.seedDatabase(amount);
      return `Seeded ${amount} users`;
  }

  @Get('clear_database')
  emptyDatabase() {
      this.appService.emptyDatabase();
      return `database is cleared`;
  }
}
