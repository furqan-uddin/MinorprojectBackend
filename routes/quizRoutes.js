// routes/quizRoutes.js
import express from 'express';
import { getAllQuizzes, getQuizByCategoryId } from '../controllers/quizController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Protected Routes
router.get('/', protect, getAllQuizzes);
router.get('/:categoryId', protect, getQuizByCategoryId);

export default router;
