const express = require("express");

const app = express();
const port = 3000;

// Basic route
app.get("/", (request, response) => {
  response.send("Welcome to the ExpressJS routing example.");
});

// Route parameter: http://localhost:3000/users/101
app.get("/users/:id", (request, response) => {
  response.json({ message: "Route parameter received", userId: request.params.id });
});

// Query parameters: http://localhost:3000/search?name=Anu&course=MERN
app.get("/search", (request, response) => {
  response.json({ message: "Query parameters received", query: request.query });
});

// URL building example: http://localhost:3000/profile?name=Anu
app.get("/profile", (request, response) => {
  const name = request.query.name || "Student";
  const userUrl = `${request.protocol}://${request.get("host")}/users/101`;
  response.send(`Hello, ${name}. Generated user URL: ${userUrl}`);
});

app.listen(port, () => console.log(`Open http://localhost:${port}`));
