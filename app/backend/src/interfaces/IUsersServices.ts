import { User } from './users.dto';

export interface IusersServices {
  create(dataUser: User): Promise<any>;
  findUser(data: User): Promise<any>;
  loginUser(data: User): Promise<any>;
}

export const IServiceUser = Symbol('IusersServices');
