// controllers/quizController.js
import Quiz from '../models/Quiz.js';
import Question from '../models/Question.js';

// GET all quiz categories (without questions)
export const getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find().select('title categoryId');
    res.status(200).json(quizzes);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch quizzes' });
  }
};

// GET quiz with questions by categoryId
export const getQuizByCategoryId = async (req, res) => {
  const { categoryId } = req.params;
  try {
    const quiz = await Quiz.findOne({ categoryId }).populate('questions');
    if (!quiz) return res.status(404).json({ message: 'Quiz not found' });

    res.status(200).json(quiz);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch quiz' });
  }
};
