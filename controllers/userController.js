// controllers/userController.js
export const getUserProfile = async (req, res) => {
  try {
    const user = req.user; // Added by authMiddleware
    res.status(200).json({
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch user profile" });
  }
};
