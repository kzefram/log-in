import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import dotenv from 'dotenv';

dotenv.config();
// Ensuring Commit to the Repository

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO)
    .then (() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB');
    });

// Creating Sever connection

const app = express();
app.use(express.json());

app.listen(4000, () => {
    console.log('Server is running on port 4000');
    });

// Creating a route

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);