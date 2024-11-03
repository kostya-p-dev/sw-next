// services/userService.js
const { User } = require('../models');

// Function to create a new user
const createUser = async (name, email, password) => {
  try {
    const user = await User.create({ name, email, password });
    return user;
  } catch (error) {
    throw new Error('Error creating new user: ' + error.message);
  }
};

// Function to fetch all users
const getAllUsers = async () => {
  try {
    const users = await User.findAll({
      order: [['createdAt', 'DESC']], // Orders by createdAt in descending order
    });
    return users;
  } catch (error) {
    throw new Error('Error fetching users: ' + error.message);
  }
};

// Function to fetch a user by email
const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ where: { email } });
    return user;
  } catch (error) {
    throw new Error('Error fetching user by email: ' + error.message);
  }
};

module.exports = { createUser, getAllUsers, getUserByEmail };
