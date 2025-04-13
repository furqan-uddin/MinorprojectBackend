import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'
import resultRoutes from './routes/resultRoutes.js'
import { errorHandler } from './middleware/errorHandler.js';
import quizRoutes from "./routes/quizRoutes.js"
// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON request bodies

app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes);
app.use('/api/results', resultRoutes);
app.use('/api/quizzes', quizRoutes);
app.use('/api/users', userRoutes);



// Routes (placeholder for now)
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use(errorHandler);
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
