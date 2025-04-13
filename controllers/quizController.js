import Quiz from '../models/Quiz.js';
import Question from '../models/Question.js';
import Result from '../models/Result.js';

// @desc    Create a new quiz
// @route   POST /api/quizzes
export const createQuiz = async (req, res) => {
  try {
    const { title, category, questions } = req.body;

    const newQuiz = new Quiz({ title, category });
    await newQuiz.save();

    // Save each question and associate it with the quiz
    const questionDocs = await Question.insertMany(
      questions.map((q) => ({ ...q, quiz: newQuiz._id }))
    );

    // Add question IDs to quiz
    newQuiz.questions = questionDocs.map((q) => q._id);
    await newQuiz.save();

    res.status(201).json({ message: 'Quiz created successfully', quiz: newQuiz });
  } catch (error) {
    console.error('Create Quiz Error:', error);
    res.status(500).json({ error: 'Failed to create quiz' });
  }
};

// @desc    Get all quizzes
// @route   GET /api/quizzes
export const getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find().select('title category');
    res.json(quizzes);
  } catch (error) {
    console.error('Get All Quizzes Error:', error);
    res.status(500).json({ error: 'Failed to fetch quizzes' });
  }
};

// @desc    Get quiz by category (with questions)
// @route   GET /api/quizzes/:category
export const getQuizByCategory = async (req, res) => {
  try {
    const category = req.params.category;

    const quiz = await Quiz.findOne({ category }).populate('questions');
    if (!quiz) {
      return res.status(404).json({ error: 'Quiz not found' });
    }

    res.json(quiz);
  } catch (error) {
    console.error('Get Quiz By Category Error:', error);
    res.status(500).json({ error: 'Failed to fetch quiz' });
  }
};

// @desc    Submit quiz answers
// @route   POST /api/quizzes/:quizId/submit
export const submitQuiz = async (req, res) => {
  try {
    const { answers, userId } = req.body;
    const quizId = req.params.quizId;

    const quiz = await Quiz.findById(quizId).populate('questions');

    let score = 0;
    quiz.questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        score++;
      }
    });

    // Save the result
    const result = new Result({
      user: userId,
      quiz: quizId,
      score,
      total: quiz.questions.length,
    });

    await result.save();

    res.json({ message: 'Quiz submitted', score, total: quiz.questions.length });
  } catch (error) {
    console.error('Submit Quiz Error:', error);
    res.status(500).json({ error: 'Failed to submit quiz' });
  }
};
