const Sequelize, { DataTypes } = require('sequelize');

const { sequelize } = require('../database/database.js');

const User = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  email: {
    type: Sequelize.STRING,
  },
  password: {
    type: DataTypes.STRING(64),
  },
});

export default User;
