// controllers/resultController.js
import Result from '../models/Result.js';
import User from '../models/User.js';

export const submitQuizResult = async (req, res) => {
  const { category, score, total, difficulty} = req.body;

  try {
    const result = await Result.create({
      user: req.user._id,
      category,
      score,
      total,
      difficulty
    });

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Failed to submit result' });
  }
};
export const getUserResults = async (req, res) => {
  const results = await Result.find({ user: req.user._id }).sort({ timestamp: -1 });
  res.json(results);
};


export const getLeaderboard = async (req, res) => {
  try {
    const topResults = await Result.find()
      .populate('user', 'name email')
      .sort({ score: -1 })
      .limit(10);

    const leaderboard = topResults.map((r) => ({
      name: r.user.name,
      category: r.category,
      score: r.score,
      total: r.total,
    }));

    res.json(leaderboard);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch leaderboard' });
  }
};
