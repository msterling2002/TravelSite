// app.js
const express = require('express');
const path = require('path');
const app = express();

// Set the port for the server to listen on
const port = process.env.PORT || 3000;

// Serve static files from 'public' folder (e.g., CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Routes for your website
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

// Example route for destinations page
app.get('/destinations', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'destinations.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
