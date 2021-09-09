const { Sequelize } = require('sequelize');

sequelize = new Sequelize('pokemon-stars-db', 'root', 'root', {
  dialect: 'postgres',
  host: '127.0.0.1',
  port: 5432,
});

exports.testDb = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
