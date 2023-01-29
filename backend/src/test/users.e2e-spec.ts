import request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from '../app.module';
import { INestApplication } from '@nestjs/common';

describe('Users', () => {
  let app: INestApplication;
  const objUser = {
    id: 2,
    username: 'keitetoscano',
    password: '33aa04586d2c42fbfaec65cc4f884cc1',
  };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/user create users`, () => {
    return request(app.getHttpServer())
      .post('/user')
      .send({
        username: 'keitetoscano',
        password: 'airalobato',
      })
      .expect(201)
      .expect(objUser);
  });

  it(`/login create users`, () => {
    return request(app.getHttpServer())
      .post('/user/login')
      .send({
        username: 'airamtoscano',
        password: 'senha123',
      })
      .expect(200);
  });

  afterEach(async () => {
    await app.close();
  });
});
