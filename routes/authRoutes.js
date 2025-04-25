// routes/authRoutes.js
import express from 'express';
import { loginUser, registerUser,resetPassword } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/reset-password', resetPassword); // New route
export default router;
