
db.students.insert({ id: 1, name: "Ravi", age: 20 });
db.students.find();
db.students.find({ name: "Ravi" });

db.students.update(
   { name: "Ravi" },
   { $set: { age: 21 } }
);

db.students.remove({ name: "Ravi" });
