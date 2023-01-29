import request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from '../app.module';
import { INestApplication } from '@nestjs/common';

describe('Taks', () => {
  let app: INestApplication;
  const objtaks = {
    title: 'new taks init',
  };
  const objtaksMocks = {
    id: 1,
    title: 'new taks init',
    authorId: 1,
  };

  const objUpdate = {
    id: 1,
    title: 'update sucess',
    authorId: 1,
  };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/taks create`, () => {
    return request(app.getHttpServer())
      .post('/tasks')
      .send({
        title: 'new taks init',
        authorId: 1,
      })
      .expect(201)
      .expect(objtaksMocks);
  });

  it(`/read taks`, () => {
    return request(app.getHttpServer())
      .post('/tasks/read')
      .send({
        authorId: 1,
      })
      .expect(200)
      .expect([objtaks]);
  });

  it(`/update taks`, () => {
    return request(app.getHttpServer())
      .put('/tasks/update')
      .send({
        id: 1,
        title: 'update sucess',
      })
      .expect(200)
      .expect(objUpdate);
  });

  it(`/delete taks`, () => {
    return request(app.getHttpServer())
      .delete('/tasks/delete')
      .send({
        id: 1,
      })
      .expect(204);
  });

  afterEach(async () => {
    await app.close();
  });
});
