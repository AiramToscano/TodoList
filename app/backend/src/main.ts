import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import swaggerDocs from '../swagger.json';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
  await app.listen(3001);
}
bootstrap();
