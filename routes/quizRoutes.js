import express from 'express';
import { createQuiz, getAllQuizzes } from '../controllers/quizController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, createQuiz);
router.get('/', getAllQuizzes);

export default router;
