// routes/adminRoutes.js
import express from 'express';
import { getAllUsers, deleteUser } from '../controllers/adminController.js';
import { getAllQuestions, deleteQuestion } from '../controllers/questionController.js';
import { getAllResults } from '../controllers/resultController.js';
import {protect ,isAdmin} from '../middleware/authMiddleware.js';
import adminOnly from '../middleware/adminMiddleware.js';

const router = express.Router();

// Users
router.get('/users', protect, isAdmin, getAllUsers);
router.delete('/users/:id', protect, adminOnly, deleteUser);

// Questions
router.get('/questions', protect, adminOnly, getAllQuestions);
router.delete('/questions/:id', protect, adminOnly, deleteQuestion);

// Results
router.get('/results', protect, adminOnly, getAllResults);

export default router;
