import { Model, Column, Table, ForeignKey } from 'sequelize-typescript';
import Post from './post.model';
import Tag from './tags.model';

@Table({ tableName: 'TagsPosts', timestamps: true })
export default class TagsPost extends Model<TagsPost> {
  @ForeignKey(() => Post)
  @Column
  postId: number;

  @ForeignKey(() => Tag)
  @Column
  tagId: number;
}
