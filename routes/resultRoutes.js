import express from 'express';
import { submitResult, getResultsByUser } from '../controllers/resultController.js';

const router = express.Router();

// POST: Save a new result
router.post('/', submitResult);

// GET: Fetch results by user
router.get('/:userId', getResultsByUser);

export default router;
