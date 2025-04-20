// routes/adminRoutes.js
import express from 'express';
import { getAllUsers, deleteUser, updateUserDetails } from '../controllers/adminController.js';
import { getAllQuestions, deleteQuestion, createQuestion, updateQuestion
} from '../controllers/questionController.js';
import { getAllResults } from '../controllers/resultController.js';
import {protect} from '../middleware/authMiddleware.js';
import adminOnly from '../middleware/adminMiddleware.js';
import { getAdminStats } from '../controllers/adminStatsController.js';

const router = express.Router();

// Users
router.get('/users', protect, adminOnly, getAllUsers);
router.delete('/users/:id', protect, adminOnly, deleteUser);
router.put("/users/:id", protect, adminOnly, updateUserDetails);

// Questions
router.get('/questions', protect, adminOnly, getAllQuestions);
router.delete('/questions/:id', protect, adminOnly, deleteQuestion);
router.post('/questions', protect, adminOnly, createQuestion);
router.put('/questions/:id', protect, adminOnly, updateQuestion);

// Results
router.get('/results', protect, adminOnly, getAllResults);


//Stats
router.get('/stats', protect, adminOnly, getAdminStats);
export default router;
