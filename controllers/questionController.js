// controllers/questionController.js
import Question from '../models/Question.js';

export const getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch questions' });
  }
};

export const deleteQuestion = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) return res.status(404).json({ message: 'Question not found' });

    await question.deleteOne();
    res.json({ message: 'Question deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete question' });
  }
};

export const createQuestion = async (req, res) => {
  const { category, difficulty, question, options, answer } = req.body;
  if (!category || !difficulty || !question || !options || !answer) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const newQ = await Question.create({ category, difficulty, question, options, answer });
    res.status(201).json(newQ);
  } catch (err) {
    res.status(500).json({ message: "Failed to create question" });
  }
};

export const updateQuestion = async (req, res) => {
  const { category, difficulty, question, options, answer } = req.body;

  try {
    const existingQuestion = await Question.findById(req.params.id);
    if (!existingQuestion) {
      return res.status(404).json({ message: "Question not found" });
    }

    existingQuestion.category = category || existingQuestion.category;
    existingQuestion.difficulty = difficulty || existingQuestion.difficulty;
    existingQuestion.question = question || existingQuestion.question;
    existingQuestion.options = options || existingQuestion.options;
    existingQuestion.answer = answer || existingQuestion.answer;

    const updated = await existingQuestion.save();
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Failed to update question" });
  }
};
