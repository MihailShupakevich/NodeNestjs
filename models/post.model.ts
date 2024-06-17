import {
  Model,
  Column,
  Table,
  DataType,
  CreatedAt,
  UpdatedAt,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from './user.model';
import PostTag from './tags-post.model';

@Table({ tableName: 'Posts' })
export default class Post extends Model<Post> {
  @Column({ allowNull: false })
  text: string;

  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  // @HasMany(() => PostTag, 'postId')
  // postTags: PostTag[];

  // @HasMany(() => Tag, () => Tag, 'postId', 'tagId')
  // tags: Tag[];

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt?: Date;

  @BelongsTo(() => User)
  User: User;

  @BelongsTo(() => PostTag)
  postTag: PostTag;
}
