// routes/resultRoutes.js
import express from 'express';
import { submitQuizResult, getLeaderboard } from '../controllers/resultController.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, submitQuizResult);
router.get('/leaderboard', getLeaderboard); // can be public

export default router;
