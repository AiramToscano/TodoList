import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UsersMiddleware } from './middlewares/user.middleware';
import { TasksModule } from './modules/tasks.module';
import { UsersModules } from './modules/users.module';

@Module({
  imports: [TasksModule, UsersModules],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UsersMiddleware).forRoutes('user');
  }
}
