import { Injectable } from '@nestjs/common';
import { PrismaService } from '../model/PrismaService';
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
        id: true,
        title: true,
        authorId: true,
      },
    });
    return createtaks;
  }

  async upadateTaks(idTaks: number, titleTaks: string) {
    const createtaks = await this.prisma.post.update({
      where: {
        id: idTaks,
      },
      data: {
        title: titleTaks,
      },
    });
    return createtaks;
  }

  async deleteTaks(idPost: number) {
    const createtaks = await this.prisma.post.delete({
      where: {
        id: idPost,
      },
    });
    return createtaks;
  }
}
