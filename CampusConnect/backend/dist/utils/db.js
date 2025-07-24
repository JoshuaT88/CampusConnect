import { Sequelize } from 'sequelize-typescript';
import { User } from '../models/User';
import { Ticket } from '../models/Ticket';
import { Department } from '../models/Department';
const sequelize = new Sequelize({
    database: process.env.DB_NAME,
    dialect: 'mssql',
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    models: [User, Ticket, Department],
});
export const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection established successfully.');
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
export default sequelize;
