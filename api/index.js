import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js';
import dotenv from 'dotenv';

dotenv.config();

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

app.listen(4000, () => {
    console.log('Server is running on port 4000');
    });

// Creating a route

app.use('/api/user', userRoutes);