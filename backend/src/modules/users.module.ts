import { Module } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UsersController } from '../controllers/users.controller';
import { PrismaService } from '../model/PrismaService';
import { JWT } from '../utils/jwt';
import { IServiceUser } from '../interfaces/IUsersServices';

@Module({
  controllers: [UsersController],
  providers: [
    {
      provide: IServiceUser, // Used as a symbol
      useClass: UsersService,
    },
    PrismaService,
    JWT,
  ],
})
export class UsersModules {}
