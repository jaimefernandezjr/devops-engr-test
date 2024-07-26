const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

// Default route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the REST API Service! Use /posts to fetch data.');
});

app.get('/posts', async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://0.0.0.0:${port}`);
});
