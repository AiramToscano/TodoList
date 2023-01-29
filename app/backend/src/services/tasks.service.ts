import { Injectable } from '@nestjs/common';
import { PrismaService } from '../model/PrismaService';
import { Task, TaskId } from '../interfaces/tasks.dto';

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

  async upadateTaks(data: TaskId) {
    const createtaks = await this.prisma.post.update({
      where: {
        id: data.id,
      },
      data: {
        title: data.title,
      },
    });
    return createtaks;
  }

  async deleteTaks(id: TaskId) {
    const createtaks = await this.prisma.post.delete({
      where: id,
    });
    return createtaks;
  }
}
