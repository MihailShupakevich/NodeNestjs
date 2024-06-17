import {
  Model,
  Table,
  Column,
  UpdatedAt,
  CreatedAt,
  DataType,
  BelongsTo,
} from 'sequelize-typescript';
import PostTag from './tags-post.model';
@Table({ tableName: 'Tags' })
export default class Tag extends Model<Tag> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column
  name: string;

  @UpdatedAt
  updatedAt: Date;

  @CreatedAt
  createdAt: Date;

  @BelongsTo(() => PostTag)
  postTag: PostTag;
}
