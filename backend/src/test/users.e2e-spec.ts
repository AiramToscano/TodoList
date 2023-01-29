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

  it(`/user username or password shorts`, () => {
    return request(app.getHttpServer())
      .post('/user')
      .send({
        username: 'no',
        password: '23',
      })
      .expect(400)
      .expect({ message: 'username or password shorts' });
  });

  it(`/user space not allowed`, () => {
    return request(app.getHttpServer())
      .post('/user')
      .send({
        username: 'antonio toscano',
        password: 'airalobato',
      })
      .expect(400)
      .expect({ message: 'space not allowed' });
  });

  it(`/user username or password required `, () => {
    return request(app.getHttpServer())
      .post('/user')
      .send({
        username: 'claudio',
      })
      .expect(400)
      .expect({ message: 'username or password required' });
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
