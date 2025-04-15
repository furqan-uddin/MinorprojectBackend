import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import {
  submitResult,
  getLeaderboard,
  getUserResults,
} from '../controllers/resultController.js';

const router = express.Router();

router.post('/', protect, submitResult);         // Submit result
router.get('/leaderboard', getLeaderboard);      // Public leaderboard
router.get('/my-results', protect, getUserResults); // Private user results

export default router;
