import {
  Model,
  Table,
  Column,
  DataType,
  BelongsToMany,
} from 'sequelize-typescript';
import Post from './post.model';
import TagsPost from './tags-post.model';
@Table({ tableName: 'Tags', timestamps: true })
export default class Tag extends Model<Tag> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    unique: true,
  })
  name: string;

  @BelongsToMany(() => Post, () => TagsPost)
  posts: Post;
}
