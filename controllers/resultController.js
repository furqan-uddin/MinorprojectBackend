import Result from '../models/Result.js';

// Submit a new result
export const submitResult = async (req, res) => {
  const { quizTitle, score, totalQuestions } = req.body;

  if (!quizTitle || score === undefined || totalQuestions === undefined) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  try {
    const result = new Result({
      user: req.user._id,
      quizTitle,
      score,
      totalQuestions,
    });

    await result.save();
    res.status(201).json({ message: 'Result saved', result });
  } catch (err) {
    res.status(500).json({ message: 'Failed to submit result' });
  }
};

// Get leaderboard (top scores)
export const getLeaderboard = async (req, res) => {
  try {
    const topResults = await Result.find()
      .sort({ score: -1 })
      .limit(10)
      .populate('user', 'name email');

    res.status(200).json(topResults);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch leaderboard' });
  }
};

// Get results of logged-in user
export const getUserResults = async (req, res) => {
  try {
    const userResults = await Result.find({ user: req.user._id });
    res.status(200).json(userResults);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch user results' });
  }
};
