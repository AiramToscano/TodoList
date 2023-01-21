import { Controller, Post } from '@nestjs/common';

@Controller('/list')
export class ListController {
  @Post()
  async newTask() {
    return 'lista criada';
  }
}
