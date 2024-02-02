// Import the express module
const express = require('express');
const http = require("http");

let size = http.maxHeaderSize;
console.log('Max HTTP Header size is', size);

// Create a new express application
const app = express();

// Define a route handler for GET requests to /headers
app.get('/headers', (req, res) => {
  // Send the request headers back as the response
  res.send(req.headers);
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});