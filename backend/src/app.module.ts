import { Module } from '@nestjs/common';
import { ListController } from './controllers/list.controller';

@Module({
  imports: [],
  controllers: [ListController],
  providers: [],
})
export class AppModule {}
