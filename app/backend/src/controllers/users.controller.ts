import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Res,
  Post,
  Inject,
} from '@nestjs/common';
import { Response } from 'express';
import { User } from '../interfaces/users.dto';
import { JWT } from '../utils/jwt';
import { IServiceUser, IusersServices } from '../interfaces/IUsersServices';

@Controller('user')
export class UsersController {
  constructor(
    @Inject(IServiceUser) private usersService: IusersServices,
    private jwt: JWT,
  ) {}

  @Post('/')
  async createUser(@Body() data: User, @Res() res: Response): Promise<object> {
    try {
      await this.usersService.findUser(data);
      const newTask = await this.usersService.create(data);
      return res.status(HttpStatus.CREATED).json(newTask);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: error.message,
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  @Post('/login')
  async LoginTaks(@Body() data: User, @Res() res: Response) {
    try {
      const user = await this.usersService.loginUser(data);
      const createJwt = await this.jwt.createJwt(data);
      const obj = {
        user,
        createJwt,
      };
      return res.status(HttpStatus.OK).json(obj);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: error.message,
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }
}
