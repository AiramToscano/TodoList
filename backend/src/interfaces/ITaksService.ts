import { Task, TaskId } from '../interfaces/tasks.dto';

export interface ItaksServices {
  create(data: Task): Promise<any>;
  readAll(id: string): Promise<any>;
  upadateTaks(authorid: TaskId): Promise<any>;
  deleteTaks(id: number): Promise<any>;
}

export const IServiceTaks = Symbol('ItaksServices');
