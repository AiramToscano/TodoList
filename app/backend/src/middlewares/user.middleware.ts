import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class UsersMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { password, username } = req.body;
    const verificaEspaco = /\s/g.test(username);
    if (!password || !username) {
      return res.status(400).json({ message: 'username or password required' });
    }
    if (password.length <= 3 || username <= 3) {
      return res.status(400).json({ message: 'username or password shorts' });
    }
    if (verificaEspaco) {
      return res.status(400).json({ message: 'space not allowed' });
    }
    next();
  }
}
