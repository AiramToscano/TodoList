import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import swaggerUI from 'swagger-ui-express';
import swaggerDocs from '../swagger.json';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
  await app.listen(3001);
}
bootstrap();
