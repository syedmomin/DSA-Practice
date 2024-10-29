// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Root route
app.get('/', (req, res) => {
    res.send(`
        <html>
          <head>
            <title>Array Operations</title>
          </head>
          <body>
            <h1>Choose an Operation</h1>
            <button onclick="alert('Binary Search button clicked')">Binary Search</button>
            <button onclick="alert('Sort Array button clicked')">Sort Array</button>
          </body>
        </html>
      `);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
