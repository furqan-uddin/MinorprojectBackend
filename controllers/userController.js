// controllers/userController.js
export const getUserProfile = async (req, res) => {
    try {
      res.json(req.user); // `req.user` is attached by auth middleware
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  };
  