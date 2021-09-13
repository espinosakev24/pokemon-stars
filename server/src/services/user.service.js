const UserModel = require('../models').User;

module.exports.createUser = (email, password) => {
  return UserModel.create({
    email,
    password,
  });
};

module.exports.getUserByEmail = (email) => {
  return UserModel.findOne({
    where: { email },
  });
};

module.exports.getUserById = (id) => {
  return UserModel.findOne({
    where: { id },
    attributes: ['id', 'email', 'createdAt'],
  });
};
