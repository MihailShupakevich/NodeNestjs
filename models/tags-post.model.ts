import { Model, Column, Table, DataType, HasMany } from 'sequelize-typescript';
import Post from './post.model';
import Tag from './tags.model';

// @Table({ tableName: 'TagsPosts' })
// export default class TagsPosts extends Model<TagsPosts> {
//   @Column({
//     type: DataType.INTEGER,
//     unique: true,
//     autoIncrement: true,
//     primaryKey: true,
//   })
//   id: number;

//   @Column({
//     type: DataType.INTEGER,
//   })
//   idPost: number;

//   @Column({
//     type: DataType.INTEGER,
//   })
//   idTag: number;

//   @CreatedAt
//   createdAt: Date;

//   @UpdatedAt
//   updatedAt?: Date;
// }

@Table({ tableName: 'PostTags' })
export default class PostTag extends Model<PostTag> {
  @Column({
    type: DataType.INTEGER,
    references: {
      model: Post,
      key: 'id',
    },
  })
  postId: number;

  @Column({
    type: DataType.INTEGER,
    references: {
      model: Tag,
      key: 'id',
    },
  })
  tagId: number;

  // @BelongsTo(() => Tag)
  // tag: Tag;

  // @BelongsTo(() => Tag)
  // post: Post;

  @HasMany(() => Tag)
  Tag: Tag[];

  @HasMany(() => Post)
  Post: Tag[];
}
