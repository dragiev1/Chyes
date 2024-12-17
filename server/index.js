const express = require('express')
const app = express()

const PORT = 3000;


// Middleware to parse JSON requests.
app.use(express.json());


// Basic route.
app.get('/', (req, res) => {
    res.send('Hello from the server!');
});

// Start the server.
app.listen(PORT, () => {
    console.log(`Server runnning at http://localhost:${PORT}`);
})