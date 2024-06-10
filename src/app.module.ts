import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController } from './posts/posts.controller';
import { UserController } from './user/user.controller';

@Module({
  imports: [],
  controllers: [AppController, PostsController, UserController],
  providers: [AppService],
})
export class AppModule {}
