const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Dashboard', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Define a schema
const DataSchema = new mongoose.Schema({
  end_year: String,
  intensity: Number,
  sector: String,
  topic: String,
  insight: String,
  url: String,
  region: String,
  start_year: String,
  impact: String,
  added: String,
  published: String,
  country: String,
  relevance: Number,
  pestle: String,
  source: String,
  title: String,
  likelihood: Number
});

// Create a model
const Data = mongoose.model('data', DataSchema);

// Create an Express application
const app = express();
app.use(cors());
// Create a route to fetch data
app.get('/data', async (req, res) => {
  const data = await Data.find(); // Fetch all data
  res.json(data);
});

// Start the server
app.listen(3000, () => console.log('Server started on port 3000'));