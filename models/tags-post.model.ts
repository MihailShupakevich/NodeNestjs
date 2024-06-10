import {
  Model,
  Column,
  Table,
  DataType,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({ tableName: 'TagsPosts' })
export default class TagsPosts extends Model<TagsPosts> {
  @Column({ allowNull: false })
  text: string;

  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
  })
  idPost: number;

  @Column({
    type: DataType.INTEGER,
  })
  idTag: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt?: Date;
}
