const { createUser, getUserByEmail } = require('../services/user.service.js');
const { hashPassword } = require('../utils/password.js');

module.exports.createUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await getUserByEmail(email);
  if (user) {
    console.error('User already exists');
    res.status(400).json({
      error: true,
      message: 'Can\t create this user',
    });
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
