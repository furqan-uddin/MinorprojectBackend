import express from 'express';
import {
  createQuiz,
  getAllQuizzes,
  getQuizByCategory,
  submitQuiz,
} from '../controllers/quizController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public Routes
router.get('/', getAllQuizzes);
router.get('/:category', getQuizByCategory);

// Protected Routes
router.post('/', protect, createQuiz);
router.post('/:quizId/submit', protect, submitQuiz);

export default router;
    