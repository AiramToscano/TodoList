import { Task, TaskId } from './tasks.dto';

export interface ItaksServices {
  create(data: Task): Promise<any>;
  readAll(id: string): Promise<any>;
  upadateTaks(id: number, title: string): Promise<any>;
  deleteTaks(id: number): Promise<any>;
}

export const IServiceTaks = Symbol('ItaksServices');
