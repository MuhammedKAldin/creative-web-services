const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Define a route for your API
app.get('/api', (req, res) => {
  const data = {
    message: 'Hello, this is your API!'
  };
  res.json(data);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});