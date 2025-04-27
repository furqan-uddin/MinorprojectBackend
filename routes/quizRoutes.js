// routes/quizRoutes.js
import express from 'express';
import {
  getAllCategories,
  getQuestionsByCategory,
  addQuizCategory,
  addQuestion,
} from '../controllers/quizController.js';
import {protect} from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', protect, getAllCategories);
router.get('/:categoryId', protect, getQuestionsByCategory);

router.post('/', protect, addQuizCategory);
router.post('/add-question', protect, addQuestion); // New route to add a question

export default router;

