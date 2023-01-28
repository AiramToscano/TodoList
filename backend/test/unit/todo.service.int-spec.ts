/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test } from '@nestjs/testing';
import { UsersModules } from '../../src/modules/users.module';
import { PrismaService } from '../../src/model/PrismaService';
import { UsersService } from '../../src/services/users.service';
import { IServiceUser } from '../../src/interfaces/IUsersServices';
import { UsersController } from '../../src/controllers/users.controller';
import { User } from './mocks/IUser.dto';
import { Response } from 'express';

const data = {
  username: 'airatoscano',
  password: 'lobato123',
};

const responseMock = {
  status: jest.fn((x) => 200),
} as unknown as Response;

describe('todoService', () => {
  let prisma: PrismaService;
  let userService: UsersService;
  let userController: UsersController;
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [UsersModules],
    }).compile();
    prisma = moduleRef.get(PrismaService);
    userService = moduleRef.get(IServiceUser);
    userController = moduleRef.get(UsersController);
    await prisma.$disconnect();
  });
  describe('create todoList', () => {
    it('create user Model', async () => {
      const user = await prisma.user.create({
        data,
      });
      expect(user.username).toBe('airatoscano');
    });
    it('create user Service', async () => {
      const user = await userService.create(data);
      expect(user.username).toBe('airatoscano');
    });
    // it('create user Controle', async () => {
    //   const user = await userController.createUser(
    //     {username: 'airatoscano', password: 'sdasdasd'},

    //     );
    //   expect(user.);
    // });
  });
});
