// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { addUser, fetchUsers } = require('../controllers/userController');

// Route to add a new user
router.post('/users', addUser);

// Route to fetch all users
router.get('/users', fetchUsers);

module.exports = router;
