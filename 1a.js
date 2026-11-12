const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to ExpressJS');
});

// Route parameter
app.get('/user/:id', (req, res) => {
    res.send('User ID: ' + req.params.id);
});

// Query parameter
app.get('/search', (req, res) => {
    res.send('Search name: ' + req.query.name);
});

// URL building
app.get('/build', (req, res) => {
    const url = new URL('/user/101', 'http://localhost:3000');
    res.send('Built URL: ' + url.href);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
