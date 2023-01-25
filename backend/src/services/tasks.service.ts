import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/model/PrismaService';
import { Task } from '../interfaces/tasks.dto';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async create(data: Task) {
    const createtaks = await this.prisma.post.create({
      data,
    });
    return createtaks;
  }

  async readAll(authorid: Task) {
    const createtaks = await this.prisma.post.findMany({
      where: authorid,
      select: {
        id: false,
        title: true,
      },
    });
    return createtaks;
  }
}
