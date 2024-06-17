import { Model, Table, Column, DataType, HasMany } from 'sequelize-typescript';
import { IsOptional, IsEmail } from 'class-validator';
import Post from 'db/models/post.model';

@Table({ tableName: 'Users', timestamps: true })
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column
  login: string;

  @Column
  password: string;

  @IsEmail()
  @Column({
    type: DataType.INTEGER,
    unique: true,
  })
  email: string;

  @Column
  @IsOptional()
  avatarpath: any;

  @HasMany(() => Post)
  posts: Post[];
}
