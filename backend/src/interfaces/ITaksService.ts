import { Task } from '../interfaces/tasks.dto';

export interface ItaksServices {
  create(data: Task): Promise<any>;
  readAll(id: string): Promise<any>;
}

export const IServiceTaks = Symbol('ItaksServices');
