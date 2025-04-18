// controllers/quizController.js
import Quiz from '../models/Quiz.js';
import Question from '../models/Question.js';

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Quiz.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch categories' });
  }
};

// GET /api/quizzes/:category
// GET /api/quizzes/:categoryId?difficulty=easy
export const getQuestionsByCategory = async (req, res) => {
  const { categoryId } = req.params;
  const { difficulty } = req.query;

  console.log("➡️ Received categoryId:", categoryId);
  console.log("➡️ Received difficulty:", difficulty);

  try {
    const match = { category: categoryId };
    if (difficulty) match.difficulty = difficulty;

    const questions = await Question.aggregate([
      { $match: match },
      { $sample: { size: 10 } } // randomly select 10
    ]);

    console.log("✅ Questions found:", questions.length);
    res.json(questions);
  } catch (error) {
    console.error("❌ Error fetching questions:", error.message);
    res.status(500).json({ message: "Failed to load questions" });
  }
};

export const addQuizCategory = async (req, res) => {
  try {
    const { category, description } = req.body;
    const quiz = await Quiz.create({ category, description });
    res.status(201).json(quiz);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create quiz category' });
  }
};

// Optional: add question
export const addQuestion = async (req, res) => {
  try {
    const newQ = await Question.create(req.body);
    res.status(201).json(newQ);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add question' });
  }
};
