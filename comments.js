// Create web server
// 1. Create a web server
// 2. Create a route to handle GET requests to /comments
// 3. Create a route to handle POST requests to /comments
// 4. Create a route to handle DELETE requests to /comments/:id
// 5. Create a route to handle PUT requests to /comments/:id

// 1. Create a web server
const express = require('express');
const app = express();

// 2. Create a route to handle GET requests to /comments
app.get('/comments', (req, res) => {
  res.send('GET /comments');
});

// 3. Create a route to handle POST requests to /comments
app.post('/comments', (req, res) => {
  res.send('POST /comments');
});

// 4. Create a route to handle DELETE requests to /comments/:id
app.delete('/comments/:id', (req, res) => {
  res.send('DELETE /comments/:id');
});

// 5. Create a route to handle PUT requests to /comments/:id
app.put('/comments/:id', (req, res) => {
  res.send('PUT /comments/:id');
});

// Start the web server on port 3000
app.listen(3000, () => {
  console.log('Server is listening on port 3000. Ready to accept requests!');
});