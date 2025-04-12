import Quiz from '../models/Quiz.js';

export const createQuiz = async (req, res) => {
  try {
    const { title, category, questions } = req.body;

    const quiz = new Quiz({
      title,
      category,
      questions,
      createdBy: req.user._id  // req.user comes from authMiddleware
    });

    await quiz.save();
    res.status(201).json(quiz);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create quiz', error });
  }
};

export const getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find().populate('createdBy', 'name email');
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch quizzes', error });
  }
};
