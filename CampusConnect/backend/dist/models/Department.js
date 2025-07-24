import { Model } from 'sequelize';
import sequelize from '../utils/db';
class Department extends Model {
}
Department.init({
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
}, {
    sequelize,
    modelName: 'Department',
    tableName: 'Departments',
    timestamps: true,
});
export default Department;
