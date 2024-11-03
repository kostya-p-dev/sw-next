// server.js
const express = require('express');
const { sequelize } = require('./models');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

const app = express();

// Configure CORS
const allowedOrigins = ['http://localhost:7001'];
app.use(cors({
  origin: ['http://localhost:7700'], // Allow requests from both host and Docker service name
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use(express.json()); // Parse incoming JSON requests

// Use user routes
app.use('/api', userRoutes);

// Retry connection
const startServer = async () => {
  const PORT = process.env.PORT || 7701;
  let retries = 5;
  while (retries) {
    try {
      await sequelize.sync();
      console.log('Database & tables created!');
      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
      break;
    } catch (error) {
      console.error('Error syncing database:', error);
      retries -= 1;
      console.log(`Retries left: ${retries}`);
      await new Promise(res => setTimeout(res, 5000)); // Wait 5 seconds before retrying
    }
  }
};

startServer();
