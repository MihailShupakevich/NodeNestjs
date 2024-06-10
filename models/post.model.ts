import {
  Model,
  Column,
  Table,
  DataType,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';

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

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt?: Date;
}
