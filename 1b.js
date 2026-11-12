
const express = require('express');
const app = express();
app.use(express.json());

let students = [{ id: 1, name: 'Ravi' }, { id: 2, name: 'Sita' }];

app.post('/students', (req, res) => {
  students.push(req.body);
  res.send('Student added successfully');
});

app.get('/students', (req, res) => res.json(students));

app.delete('/students/:id', (req, res) => {
  const id = Number(req.params.id);
  students = students.filter(student => student.id !== id);
  res.send('Student deleted successfully');
});

app.listen(3000, () => console.log('Server running on port 3000'));
