// models/index.js
const sequelize = require('../config/database');
const User = require('./User'); // Import User model

// Only export the models and sequelize instance, without syncing
module.exports = {
  User,
  sequelize,
};