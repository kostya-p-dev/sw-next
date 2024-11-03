// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.MYSQL_DB, // Database name
  process.env.MYSQL_USER, // Database user
  process.env.MYSQL_PASSWORD, // Database password
  {
    host: process.env.MYSQL_HOST, // Database host
    dialect: 'mysql',
    logging: false, // Optional: disable logging for cleaner output
  }
);

module.exports = sequelize;