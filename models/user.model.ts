import {
  Model,
  Table,
  Column,
  UpdatedAt,
  CreatedAt,
  DataType,
} from 'sequelize-typescript';

@Table({ tableName: 'Users' })
export default class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column
  login: string;

  @Column
  password : string;
  
  @UpdatedAt
  updatedAt: Date;

  @CreatedAt
  createdAt: Date;
}
