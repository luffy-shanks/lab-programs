const express = require("express");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  response.send(`
    <h1>Registration Form</h1>
    <form method="POST" action="/register">
      <label>Name: <input name="name" required></label><br><br>
      <label>Email: <input type="email" name="email" required></label><br><br>
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post("/register", (request, response) => {
  const { name, email } = request.body;
  response.send(`<h1>Form submitted</h1><p>Name: ${name}</p><p>Email: ${email}</p>`);
});

app.listen(port, () => console.log(`Open http://localhost:${port}`));
