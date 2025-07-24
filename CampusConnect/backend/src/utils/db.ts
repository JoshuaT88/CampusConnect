import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('campus_connect', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

export { sequelize };
export default sequelize;