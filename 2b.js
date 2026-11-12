
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <form action="/submit" method="POST">
      Name: <input type="text" name="name"><br>
      Email: <input type="email" name="email"><br>
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post('/submit', (req, res) => {
  res.send('Name: ' + req.body.name + '<br>Email: ' + req.body.email);
});

app.listen(3000, () => console.log('Server running on port 3000'));
