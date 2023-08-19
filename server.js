const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Define a route for your Steam Market API
app.get('/api/steam-market', (req, res) => {
  const data = {
    message: 'Hello, this is your Steam Market API!'
  };
  res.json(data);
});