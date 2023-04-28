import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { ApiKeyAuthGuard } from './auth/guard/apikey-auth.guard';
import { JwtAuthGuard } from './auth/guard/jwt-auth.guard';
import { LocalAuthGuard } from './auth/guard/local-auth.guard';

@UseGuards(ApiKeyAuthGuard)
@Controller('/DevOps')
export class AppController {

  constructor(private readonly appService: AppService, private authService: AuthService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  DevOps(@Req() req)  {
    return this.appService.DevOps(req)
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req) {
    return this.authService.login(req.user);
  }

}
