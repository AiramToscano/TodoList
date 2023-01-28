import { Module } from '@nestjs/common';
import { TasksService } from '../services/tasks.service';
import { TasksController } from '../controllers/tasks.controller';
import { PrismaService } from '../model/PrismaService';
import { IServiceTaks } from '../interfaces/ITaksService';

@Module({
  controllers: [TasksController],
  providers: [
    TasksService,
    PrismaService,
    {
      provide: IServiceTaks, // Used as a symbol
      useClass: TasksService,
    },
  ],
})
export class TasksModule {}
