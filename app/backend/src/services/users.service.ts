import { Injectable } from '@nestjs/common';
import { PrismaService } from '../model/PrismaService';
import md5 from 'md5';
import { User } from '../interfaces/users.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async create(dataUser: User) {
    const md5password = md5(dataUser.password);
    const data: User = {
      username: dataUser.username,
      password: md5password,
    };
    const createusers = await this.prisma.user.create({
      data,
    });
    return createusers;
  }

  async findUser(data: User) {
    const verifyUser = await this.prisma.user.findFirst({
      where: { username: data.username },
    });
    if (verifyUser) throw new Error('This user already exist');
    return true;
  }

  async loginUser(data: User) {
    const md5password = md5(data.password);
    const verifyUser = await this.prisma.user.findFirst({
      where: { username: data.username, password: md5password },
    });
    if (!verifyUser) throw new Error('This user already not exist');
    return verifyUser;
  }
}
