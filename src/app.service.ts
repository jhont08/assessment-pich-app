import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AppService {
  DevOps(req: Request): {} {
    return { message: 'Hello ' + req.body['to'] + ' your message will be send by ' + req.user['username']};
  }
}
