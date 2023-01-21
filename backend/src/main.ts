import { NestFactory } from '@nestjs/core';
import { TasksModule } from './modules/tasks.module';

async function bootstrap() {
  const app = await NestFactory.create(TasksModule);
  await app.listen(3001);
}
bootstrap();
