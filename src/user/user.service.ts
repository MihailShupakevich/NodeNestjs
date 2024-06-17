import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import User from './user.model.ts';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  // findUsers(): Promise<string[]> {
  //   return this.userModel.findAll();
  // }
  // create(user: User): Promise<string> {
  //   return this.userModel.create(user);
}
