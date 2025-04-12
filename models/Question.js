import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true,
  },
  options: {
    type: [String], // Array of options
    required: true,
  },
  correctAnswer: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Question = mongoose.model('Question', questionSchema);
export default Question;
