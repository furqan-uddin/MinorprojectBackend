// models/Quiz.js
import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  categoryId: {
    type: String, // could be category name or ID
    required: true,
  },
  questions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question',
    },
  ],
}, {
  timestamps: true,
});

export default mongoose.model('Quiz', quizSchema);
