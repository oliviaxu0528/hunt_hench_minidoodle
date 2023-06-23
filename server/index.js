// Import required modules
const express = require('express');
const cors = require('cors');

// Create an instance of Express
const app = express();

// Middleware configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS
app.use(cors());

const urls = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Golden_Doodle_Standing_%28HD%29.jpg/1200px-Golden_Doodle_Standing_%28HD%29.jpg"
    , 2, 3, 4, 5]

// Define routes
app.get('/', (req, res) => {
    res.send(urls);
});

// Start the server
const port = 3001;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
