import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Post,
} from '@nestjs/common';
import { Task } from '../interfaces/tasks.dto';
import { IServiceTaks, ItaksServices } from '../interfaces/ITaksService';

@Controller('tasks')
export class TasksController {
  constructor(@Inject(IServiceTaks) private tasksService: ItaksServices) {}

  @Post()
  async createTaks(@Body() data: Task): Promise<object> {
    try {
      const newTask = await this.tasksService.create(data);
      return newTask;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Não foi possivel criar uma tarefa',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  // @Get()
  // async getTaks(@Body() data: Task): Promise<object> {
  //   try {
  //     const newTask = await this.tasksService.create(data);
  //     return newTask;
  //   } catch (error) {
  //     throw new HttpException(
  //       {
  //         status: HttpStatus.FORBIDDEN,
  //         error: 'Não foi possivel criar uma tarefa',
  //       },
  //       HttpStatus.FORBIDDEN,
  //       {
  //         cause: error,
  //       },
  //     );
  //   }
  // }
}
