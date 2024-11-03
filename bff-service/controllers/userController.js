// controllers/userController.js
const { createUser, getAllUsers, getUserByEmail } = require('../services/userService');

// Controller to handle creating a new user
const addUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Check if user with the same email already exists
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    // Create new user
    const newUser = await createUser(name, email, password);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to handle fetching all users
const fetchUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    console.log(users)
    res.status(200).json(users);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addUser, fetchUsers };
