const express = require('express');
const cors = require('cors');
// const path = require('path');
const app = express();

// Allow requests from the frontend (adjust the URL if necessary)
app.use(cors({
  origin: 'http://127.0.0.1:3000/Flight/index.html', // Frontend URL
  
}));

// Serve static files (frontend files like index.html, script.js, etc.)
// app.use(express.static(path.join(__dirname, '../frontend')));

// Your routes here
app.get('/', (req, res) => {
  res.json({ msg : "cors issue" });
});

// If the frontend makes any other requests, serve the index.html file
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'flight/script.js'));
// });

// Start the server
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
