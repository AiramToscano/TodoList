import {
  Body,
  Controller,
  Delete,
  HttpException,
  HttpStatus,
  Inject,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { Task, TaskId } from '../interfaces/tasks.dto';
import { IServiceTaks, ItaksServices } from '../interfaces/ITaksService';

@Controller('tasks')
export class TasksController {
  constructor(@Inject(IServiceTaks) private tasksService: ItaksServices) {}

  @Post('/')
  async createTaks(@Body() data: Task, @Res() res: Response): Promise<object> {
    try {
      const newTask = await this.tasksService.create(data);
      return res.status(201).json(newTask);
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

  @Post('/read')
  async getTaks(@Body() id: string, @Res() res: Response): Promise<object> {
    try {
      const allTask = await this.tasksService.readAll(id);
      return res.status(200).json(allTask);
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

  @Put('/update')
  async updateTaks(
    @Body() data: TaskId,
    @Res() res: Response,
  ): Promise<object> {
    try {
      const updateTask = await this.tasksService.upadateTaks(data);
      return res.status(200).json(updateTask);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: error.message,
        },
        HttpStatus.FORBIDDEN
        {
          cause: error,
        },
      );
    }
  }

  @Delete('/delete')
  async deleteTaks(@Body() id: number, @Res() res: Response): Promise<object> {
    try {
      const updateTask = await this.tasksService.deleteTaks(id);
      return res.status(204).json(updateTask);
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
