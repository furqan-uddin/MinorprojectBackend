// controllers/resultController.js
import Result from '../models/Result.js';
import User from '../models/User.js';


export const getAllResults = async (req, res) => {
  try {
    const results = await Result.find().populate('user', 'name email');
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch results' });
  }
};

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
    res.status(500).json({ message: 'Failed to submit result'});
  }
};
export const getUserResults = async (req, res) => {
  const results = await Result.find({ user: req.user._id }).sort({ timestamp: -1 });
  res.json(results);
};
export const getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await Result.aggregate([
      // Calculate percentage and filter out entries with total = 0
      {
        $addFields: {
          percentage: {
            $cond: [
              { $eq: ["$total", 0] },
              0,
              { $multiply: [{ $divide: ["$score", "$total"] }, 100] }
            ]
          }
        }
      },
      {
        $match: {
          total: { $gt: 0 }
        }
      },
      // Sort by user, category, and percentage descending
      {
        $sort: {
          user: 1,
          category: 1,
          percentage: -1
        }
      },
      // Group by user and category to get the highest percentage per user per category
      {
        $group: {
          _id: {
            user: "$user",
            category: "$category"
          },
          score: { $first: "$score" },
          total: { $first: "$total" },
          percentage: { $first: "$percentage" },
          userId: { $first: "$user" }
        }
      },
      // Lookup user details
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "userDetails"
        }
      },
      {
        $unwind: "$userDetails"
      },
      // Project the required fields
      {
        $project: {
          name: "$userDetails.name",
          category: "$_id.category",
          score: 1,
          total: 1,
          percentage: 1
        }
      },
      // Sort the final results by percentage descending
      {
        $sort: {
          percentage: -1
        }
      },
      // Limit to top 10 entries
      {
        $limit: 10
      }
    ]);

    res.json(leaderboard);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch leaderboard' });
  }
};
