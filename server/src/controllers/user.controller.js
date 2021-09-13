const {
  createUser,
  getUserByEmail,
  getUserById,
} = require('../services/user.service.js');
const { hashPassword } = require('../utils/password.js');

module.exports.createUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await getUserByEmail(email);
  if (user) {
    res.status(400).json({
      error: true,
      message: 'Can\t create this user',
    });
    throw new Error('User already exists');
  }
  const hashedPassword = await hashPassword(password);

  createUser(email, hashedPassword)
    .then((response) => {
      res.status(201).json({ user: response });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

module.exports.getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await getUserById(id);

  if (!user) {
    res.status(400).json({
      error: true,
      message: 'User not found',
    });
    throw new Error('User not found');
  }

  res.status(201).json(user);
};
