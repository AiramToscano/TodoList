import { Module } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UsersController } from '../controllers/users.controller';
import { PrismaService } from '../model/PrismaService';
import { JWT } from '../utils/jwt';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, JWT],
})
export class UsersModules {}
