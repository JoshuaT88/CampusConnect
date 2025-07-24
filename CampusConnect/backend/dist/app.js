import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import ticketRoutes from './routes/ticketRoutes';
import departmentRoutes from './routes/departmentRoutes';
import { connectDB, sequelize } from './utils/db'; // Corrected import
import logger from './utils/logger';
const app = express();
const PORT = process.env.PORT || 4000;
// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Database connection
connectDB()
    .then(() => logger.info('Database connected successfully'))
    .catch((err) => logger.error('Database connection failed', err));
// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tickets', ticketRoutes);
app.use('/api/departments', departmentRoutes);
// Sync DB
const syncDB = async () => {
    try {
        await sequelize.sync({ alter: true }); // Sync models with the database
        logger.info('Database synchronized successfully.');
    }
    catch (error) {
        logger.error('Error synchronizing the database:', error);
    }
};
syncDB();
// Start server
app.listen(PORT, () => {
    logger.info(`Server is running on http://localhost:${PORT}`);
});
