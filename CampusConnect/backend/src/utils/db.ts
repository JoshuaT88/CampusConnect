import { Sequelize } from 'sequelize';
import { User } from '../models/User';
import { Ticket } from '../models/Ticket';
import { Department } from '../models/Department';

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql', // Change this to your database dialect (e.g., 'postgres', 'sqlite')
  models: [User, Ticket, Department],
});

export const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

export default sequelize;