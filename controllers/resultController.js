import Result from '../models/Result.js';

export const submitResult = async (req, res) => {
  try {
    const { user, quiz, score, totalQuestions, correctAnswers, answers } = req.body;

    const newResult = new Result({
      user,
      quiz,
      score,
      totalQuestions,
      correctAnswers,
      answers,
    });

    const savedResult = await newResult.save();
    res.status(201).json(savedResult);
  } catch (error) {
    res.status(500).json({ message: 'Error saving result', error });
  }
};

export const getResultsByUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const results = await Result.find({ user: userId })
      .populate('quiz', 'title category')
      .sort({ createdAt: -1 });

    res.json(results);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching results', error });
  }
};
