// components/AddUserForm.js
import React, { useState } from 'react';

const AddUserForm = ({handleUserAdded}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newUser = { name, email, password };

    try {
      const response = await fetch('http://localhost:7701/api/users', { // use 'http://localhost:7701' if not in Docker
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        setMessage('User added successfully!');
        setName('');
        setEmail('');
        setPassword('');
        handleUserAdded()
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || 'Failed to add user');
      }
    } catch (error) {
      console.error('Error adding user:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add User</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddUserForm;
