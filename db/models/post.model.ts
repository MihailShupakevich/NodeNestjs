import {
  Model,
  Column,
  Table,
  DataType,
  BelongsToMany,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from '../../src/user/user.model';
import Tag from './tags.model';
import TagsPost from './tags-post.model';
import { IsOptional } from 'class-validator';

@Table({ tableName: 'Posts', timestamps: true })
export default class Post extends Model<Post> {
  @Column({ allowNull: false })
  title: string;

  @Column({
    type: DataType.TEXT(),
    allowNull: false,
  })
  text: string;

  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @IsOptional()
  imagepath: any;

  @BelongsTo(() => User)
  user: User;

  @BelongsToMany(() => Tag, () => TagsPost)
  tags: Tag;
  /*Декоратор @BelongsToManyв Sequelize принимает три параметра:
Целевая модель: это модель, с которой связана текущая модель.
Объект параметров: этот объект может содержать несколько свойств для настройки отношений.
Сквозная модель: это модель, которая представляет соединительную таблицу в отношениях «многие ко многим».*/
}
//1 аргумент с какой ,
