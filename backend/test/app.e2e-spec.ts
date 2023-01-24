// import request from 'supertest';
// import { Test } from '@nestjs/testing';
// import { UsersModules } from '../src/modules/users.module';
// import { UsersService } from '../src/services/users.service';
// import { TasksModule } from '../src/modules/tasks.module';
// import { INestApplication } from '@nestjs/common';
// import { User } from '../src/interfaces/users.dto';
// import { PrismaService } from '../src/model/PrismaService';
// import { JWT } from 'src/utils/jwt';

// const obj = {
//   id: '1',
//   username: 'airamtoscano',
//   password: 'asdadasdasdasd',
// };

// describe('Cats', () => {
//   let app: INestApplication;
//   const userService = {
//     loginUser: (data: User) => {
//       return data;
//     },
//   };

//   beforeAll(async () => {
//     const moduleRef = await Test.createTestingModule({
//       imports: [UsersModules],
//     })
//       .overrideProvider(UsersService)
//       .useValue(userService)
//       .compile();

//     app = moduleRef.createNestApplication();
//     await app.init();
//   });

//   it(`/GET cats`, () => {
//     return request(app.getHttpServer()).post('/user/login').expect(403).expect({
//       token: '213123123123',
//     });
//   });

//   afterAll(async () => {
//     await app.close();
//   });
// });
