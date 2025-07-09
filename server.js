const express = require('express');
const path = require('path');

const app = express();
const port = 3000; 

app.use(express.static(path.join(__dirname, 'public')));

app.get('/calculate-distance', (req, res) => {
    const x = parseFloat(req.query.x);
    const y = parseFloat(req.query.y);
    const z = parseFloat(req.query.z);

    if (isNaN(x) || isNaN(y) || isNaN(z)) {
        return res.status(400).json({ error: 'Invalid input. Please provide numeric values for x, y, and z.' });
    }

    const distance = Math.sqrt(x * x + y * y + z * z);

    res.json({ distance: distance });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`Open your browser and navigate to http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

