// Run in mongosh. Select the database first.
use internalExam;

// CREATE: modern equivalent of db.students.insert(...)
db.students.insertOne({ name: "Anu", age: 20, course: "MERN", marks: 85 });

// READ: same operation requested as find()
db.students.find({ course: "MERN" });

// UPDATE: modern equivalent of db.students.update(...)
db.students.updateOne({ name: "Anu" }, { $set: { marks: 90 } });

// DELETE: modern equivalent of db.students.remove(...)
db.students.deleteOne({ name: "Anu" });

// Legacy forms, if your syllabus requires their syntax:
// db.students.insert({ name: "Anu", age: 20 });
// db.students.update({ name: "Anu" }, { $set: { marks: 90 } });
// db.students.remove({ name: "Anu" });
