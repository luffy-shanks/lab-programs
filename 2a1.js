const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname));

app.get("/", (request, response) => {
  response.render("2a2", {
    title: "Student Details",
    student: { name: "Anu", course: "MERN Stack", semester: 5 }
  });
});

app.listen(port, () => console.log(`Open http://localhost:${port}`));
