import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { request } from "express";
import { UsersService } from "./data/users/users.service";
import { AuthService } from "./auth/auth.service";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, UsersService, AuthService, JwtService, ConfigService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('DevOps', () => {
    it('should return "{}', () => {
      request.user = { "username": "Jhon Triana" };
      request.body = { "to": "Pepito Perez" };
      expect(appController.DevOps(request));
    });
  });
});
