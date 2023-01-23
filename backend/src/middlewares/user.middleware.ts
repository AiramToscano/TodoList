import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class UsersMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { password, username } = req.body;
    if (!password || !username) {
      return res.status(400).json({ message: 'username or password required' });
    }
    if (password.length < 3 || username < 3) {
      return res.status(400).json({ message: 'username or password shorts' });
    }
    next();
  }

  User(req: Request, res: Response, next: NextFunction) {
    const { password, username } = req.body;
    if (!password || !username) {
      return res.status(400).json({ message: 'username or password required' });
    }
    if (password.length < 3 || username < 3) {
      return res.status(400).json({ message: 'username or password shorts' });
    }
    next();
  }
}
