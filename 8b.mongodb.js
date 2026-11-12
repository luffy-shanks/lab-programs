db.students.insert({
    rollno: 1,
    name: "Ravi",
    marks: 85
});

db.students.find();

db.students.update(
    { rollno: 1 },
    { $set: { marks: 95 } }
);

db.students.remove({ rollno: 1 });
