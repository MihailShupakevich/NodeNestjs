import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findUsers() {
    // return this.userService.findTasks();
    return console.log('Все пользователи');
  }

  // @Post()
  // createTask() {
  //   return this.userService.create();
  // }
}
