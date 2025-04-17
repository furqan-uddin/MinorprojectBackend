// controllers/userController.js
import User from '../models/User.js';

export const getUserProfile = async (req, res) => {
  const user = req.user;

  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    photoURL: user.photoURL,
  });
};

export const updateUserProfile = async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.photoURL = req.body.photoURL || user.photoURL;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      role: updatedUser.role,
      photoURL: updatedUser.photoURL,
    });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};
