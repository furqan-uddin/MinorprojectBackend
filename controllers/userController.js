// controllers/userController.js
import User from '../models/User.js';

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch user profile' });
  }
};
export const updateProfile = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.name = name || user.name;
    user.email = email || user.email;

    if (req.file) {
      user.photoURL = `/uploads/${req.file.filename}`; // set the photo URL
    }

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

