import {
  Model,
  Table,
  Column,
  UpdatedAt,
  CreatedAt,
  DataType,
} from 'sequelize-typescript';

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
}
