//TEMPLATE


// server/index.js
const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const beatRoutes = require('./routes/beatRoutes');
const authRoutes = require('./routes/authRoutes'); 

dotenv.config();  // Load environment variables

const app = express();

app.use(express.json());  // Parse JSON requests

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/beats', beatRoutes);
app.use('/api/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
