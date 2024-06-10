import {
  Model,
  Table,
  Column,
  UpdatedAt,
  CreatedAt,
  DataType,
} from 'sequelize-typescript';

@Table({ tableName: 'News' })
export default class News extends Model<News> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @UpdatedAt
  updatedAt: Date;

  @CreatedAt
  createdAt: Date;
}
