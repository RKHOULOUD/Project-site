const express = require('express');
const axios = require('axios');
const app = express();

app.set('view engine', 'ejs');  // Use EJS templates

app.get('/', async (req, res) => {
    const username = req.query.username || 'octocat';  // Default username
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        const userData = response.data;
        res.render('index', { userData });
    } catch (error) {
        res.status(500).send('Error fetching GitHub data');
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

