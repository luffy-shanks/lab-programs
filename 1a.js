
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Home Page'));
app.get('/about', (req, res) => res.send('About Page'));

app.get('/user/:id', (req, res) => {
  res.send('User ID: ' + req.params.id);
});

app.get('/search', (req, res) => {
  res.send('Search name: ' + req.query.name);
});

app.get('/build', (req, res) => {
  const url = req.protocol + '://' + req.get('host') + '/user/10';
  res.send('Built URL: ' + url);
});

app.listen(3000, () => console.log('Server running on port 3000'));
