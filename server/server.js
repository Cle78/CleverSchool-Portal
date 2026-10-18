const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Import Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// AI Assistant Endpoint Mock
app.post('/api/ai/query', (req, res) => {
  const { prompt } = req.body;
  let response = "I am your Clever School Portal Assistant. How can I help you manage your studies or administration today?";
  if (prompt.toLowerCase().includes('fees')) {
    response = "School fees for the current term can be paid via the Admin Finance Portal.";
  } else if (prompt.toLowerCase().includes('exam')) {
    response = "Check the calendar tab for upcoming mid-term and final examination dates.";
  }
  res.json({ reply: response });
});

// Database Connection & Server Startup
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/clever-school-portal';

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB successfully.');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error('Database connection error:', err));
