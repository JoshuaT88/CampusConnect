import { DataTypes, Model } from 'sequelize';
import sequelize from '../utils/db';

class Department extends Model {
  public DeptID!: number;
  public TenantID!: number;
  public DeptName!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Department.init(
  {
    DeptID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    TenantID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    DeptName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Department',
    tableName: 'Departments',
    timestamps: true,
  }
);

export default Department;