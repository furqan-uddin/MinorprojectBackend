// controllers/adminStatsController.js
import User from '../models/User.js';
import Result from '../models/Result.js';
import Question from '../models/Question.js';

export const getAdminStats = async (req, res) => {
  try {
    const [userCount, questionCount, resultCount] = await Promise.all([
      User.countDocuments(),
      Question.countDocuments(),
      Result.countDocuments(),
    ]);

    // Category-wise breakdown
    const categoryBreakdown = await Result.aggregate([
      {
        $group: {
          _id: "$category",
          count: { $sum: 1 }
        }
      },
      {
        $project: {
          category: "$_id",
          count: 1,
          _id: 0
        }
      },
      { $sort: { count: -1 } }
    ]);

    // Monthly quiz submissions
    const monthlyStats = await Result.aggregate([
      {
        $group: {
          _id: {
            year: { $year: "$timestamp" },
            month: { $month: "$timestamp" }
          },
          count: { $sum: 1 }
        }
      },
      {
        $sort: {
          "_id.year": 1,
          "_id.month": 1
        }
      }
    ]);

    // Top users by total score
    const topUsers = await Result.aggregate([
      {
        $group: {
          _id: "$user",
          totalScore: { $sum: "$score" }
        }
      },
      {
        $sort: { totalScore: -1 }
      },
      { $limit: 5 },
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "_id",
          as: "userDetails"
        }
      },
      {
        $unwind: "$userDetails"
      },
      {
        $project: {
          name: "$userDetails.name",
          email: "$userDetails.email",
          totalScore: 1
        }
      }
    ]);

    res.json({
      userCount,
      questionCount,
      resultCount,
      categoryBreakdown,
      monthlyStats,
      topUsers
    });
  } catch (err) {
    console.error("Stats error:", err);
    res.status(500).json({ message: "Failed to fetch stats" });
  }
};
