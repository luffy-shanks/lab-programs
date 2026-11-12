// Run in mongosh after selecting the database.
use collegeDB;

db.students.insertMany([
  { name: "Anu", course: "MERN", marks: 85 },
  { name: "Bala", course: "MERN", marks: 92 },
  { name: "Chitra", course: "MEAN", marks: 78 }
]);

// Find documents.
db.students.find({ course: "MERN" });

// Limit results and sort by marks in descending order.
db.students.find().sort({ marks: -1 }).limit(2);

// Create an index on course.
db.students.createIndex({ course: 1 });

// Aggregate: average marks for each course.
db.students.aggregate([
  { $group: { _id: "$course", averageMarks: { $avg: "$marks" }, totalStudents: { $sum: 1 } } },
  { $sort: { averageMarks: -1 } }
]);
