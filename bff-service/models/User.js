// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Import the Sequelize instance

// Define the User model
const User = sequelize.define('User', {
  // Define fields in the User model
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Ensure email is unique
    validate: {
      isEmail: true, // Validate the email format
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  // Options
  tableName: 'users', // Set table name
  timestamps: true, // Adds createdAt and updatedAt timestamps
});

module.exports = User;
