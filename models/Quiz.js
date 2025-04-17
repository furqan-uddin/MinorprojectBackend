// models/Quiz.js
import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
  category: { type: String, required: true, unique: true },
  description: String,
});

const Quiz = mongoose.model('Quiz', quizSchema);

export default Quiz;

