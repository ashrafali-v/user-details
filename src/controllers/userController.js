const User = require('../models/userModel');

const getUserDetails = async (req, res) => {
  try {
    const user = await User.find();
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user details', error });
  }
};

module.exports = { getUserDetails };
