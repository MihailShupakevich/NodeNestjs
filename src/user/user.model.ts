import {
  Model,
  Table,
  Column,
  UpdatedAt,
  CreatedAt,
} from 'sequelize-typescript';

@Table({ tableName: 'Users' })
export default class User extends Model<User> {
  @Column({ allowNull: false })
  firstName: string;

  @Column({ allowNull: false })
  lastName: string;

  @UpdatedAt
  updatedAt: Date;

  @CreatedAt
  createdAt: Date;
}
