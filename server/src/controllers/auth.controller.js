const { getUserByEmail } = require('../services/user.service.js');
const { comparePasswords } = require('../utils/password.js');
const jwt = require('jsonwebtoken');

module.exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await getUserByEmail(email);
  const validPassword = await comparePasswords(
    password,
    user ? user.password : ''
  );

  if (!user || !validPassword) {
    console.error('User or password is invalid');
    return res.status(400).json({
      error: true,
      message: 'Failed to login',
    });
  }
  jwt.sign({ userId: user.id }, 'privatekey', (err, token) => {
    if (err) res.status(400).json({ error: true, message: 'Failed to login' });

    res.status(201).json({
      acess_token: token,
    });
  });
};
