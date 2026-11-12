# Internal Exam Programs

This folder contains the requested ExpressJS, ReactJS, and MongoDB exam examples. Each source file is named after its question number.

## Requirements

- Node.js 18 or later
- MongoDB Shell (`mongosh`) for the `.mongodb.js` files
- A React project created with Vite for the `.jsx` examples

## ExpressJS: questions 1 and 2

Install the required packages once from this folder:

```bash
npm init -y
npm install express ejs
```

Run one program at a time with, for example:

```bash
node 1a.js
node 1b.js
node 2a1.js
node 2b.js
```

Open the URL printed in the terminal. `1b.js` exposes `GET /products`, `POST /products`, and `DELETE /products/:id`. Use a REST client for POST and DELETE. `2a1.js` and `2a2.ejs` belong together: the JavaScript file renders the EJS template.

## ReactJS: questions 5 to 8a

Create a Vite React project, then copy one selected `.jsx` file into its `src/App.jsx` and start the development server:

```bash
npm create vite@latest react-exam -- --template react
cd react-exam
npm install
npm run dev
```

For question 6b, also copy `6b.css` into `src/`; the component already imports it. `6b.scss` is the Sass version of the same styling. To use Sass instead, install `sass`, change the import in `6b.jsx` to `./6b.scss`, and copy that file to `src/`.

## MongoDB: questions 8b, 9a, and 9b

Start MongoDB, open the shell, and load a file:

```bash
mongosh
load("8b.mongodb.js")
```

Replace the filename for questions 9a or 9b. The scripts use current methods such as `insertOne`, `updateOne`, and `deleteOne`; comments preserve the older `insert`, `update`, and `remove` forms requested in the syllabus. In `9a.mongodb.js`, the destructive drop commands are commented out—uncomment only when demonstrating them.
