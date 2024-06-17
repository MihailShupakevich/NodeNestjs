import {
  Model,
  Table,
  Column,
  UpdatedAt,
  CreatedAt,
  DataType,
  HasMany,
} from 'sequelize-typescript';
import Post from './post.model';

@Table({ tableName: 'Users' })
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column
  login: string;

  @Column
  password: string;

  @UpdatedAt
  updatedAt: Date;

  @CreatedAt
  createdAt: Date;

  @HasMany(() => Post)
  posts: Post[];
}
