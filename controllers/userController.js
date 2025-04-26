// controllers/userController.js
import User from '../models/User.js';
import Result from '../models/Result.js'

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Fetch recent quiz history
    const quizHistory = await Result.find({ user: req.user._id })
      .sort({ timestamp: -1 })
      .limit(5); // Adjust limit as needed

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      photoURL: user.photoURL,
      createdAt: user.createdAt,
      passwordChangedAt: user.passwordChangedAt,
      profileUpdatedAt: user.profileUpdatedAt,
      quizHistory,
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch user profile' });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { name, email, photoURL } = req.body;
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.name = name || user.name;
    user.email = email || user.email;

    // Update Cloudinary URL if provided
    if (photoURL) {
      user.photoURL = photoURL;
    }
    // ✅ log profile update timestamp
      user.profileUpdatedAt = new Date();

    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      photoURL: updatedUser.photoURL,
      role: updatedUser.role,
    });
  } catch (error) {
    console.error("Profile update error:", error);
    res.status(500).json({ message: 'Failed to update profile' });
  }
};
export const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.json(users);
};

