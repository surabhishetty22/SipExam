// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define API routes
const recipesRouter = require('./routes/recipes');
app.use('/api/recipes', recipesRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
