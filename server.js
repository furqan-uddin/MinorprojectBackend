// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import path from 'path';
import authRoutes from './routes/authRoutes.js';
import quizRoutes from './routes/quizRoutes.js';
import resultRoutes from './routes/resultRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import mongoose from 'mongoose';
import { seedQuizzesIfNeeded } from './utils/seedData.js';
import adminRoutes from './routes/adminRoutes.js';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/quizzes', quizRoutes);
app.use('/api/results', resultRoutes);
app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/uploads', express.static(path.join(path.resolve(), '/uploads')));


app.use(notFound);
app.use(errorHandler);
// Default route
app.get('/', (req, res) => {
  res.send('Quizify backend is running 🚀');
});

// ✅ Correct async server start
const startServer = async () => {
  try {
    await connectDB();                // wait for DB to connect
    await seedQuizzesIfNeeded();      // now seed categories
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error('❌ Server failed to start:', err);
    process.exit(1);
  }
};

startServer();
