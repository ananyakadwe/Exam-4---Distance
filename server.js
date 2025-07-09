// server.js
const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // You can change this port if needed

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define the API endpoint for distance calculation
app.get('/calculate-distance', (req, res) => {
    // Extract x, y, z from query parameters
    const x = parseFloat(req.query.x);
    const y = parseFloat(req.query.y);
    const z = parseFloat(req.query.z);

    // Validate inputs
    if (isNaN(x) || isNaN(y) || isNaN(z)) {
        return res.status(400).json({ error: 'Invalid input. Please provide numeric values for x, y, and z.' });
    }

    // Calculate the distance using the formula: d = sqrt(x^2 + y^2 + z^2)
    const distance = Math.sqrt(x * x + y * y + z * z);

    // Send the calculated distance back as a JSON response
    res.json({ distance: distance });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`Open your browser and navigate to http://localhost:${port}`);
});

// Basic route to serve the index.html file (though express.static handles it for '/')
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

