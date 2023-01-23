import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/model/PrismaService';
import { User } from '../interfaces/users.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async create(data: User) {
    const createusers = await this.prisma.user.create({
      data,
    });
    return createusers;
  }

  async findUser(data: User) {
    const verifyUser = await this.prisma.user.findFirst({
      where: { username: data.username },
    });
    if (verifyUser) throw new Error('Usuario já cadastrado');
    return true;
  }
}
