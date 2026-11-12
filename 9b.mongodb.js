
db.students.insertMany([
  { name: "Ravi", age: 20, marks: 85 },
  { name: "Sita", age: 21, marks: 92 },
  { name: "Arjun", age: 19, marks: 78 }
]);

db.students.find();
db.students.find().limit(2);
db.students.find().sort({ marks: -1 });
db.students.createIndex({ name: 1 });

db.students.aggregate([
  {
    $group: {
      _id: null,
      averageMarks: { $avg: "$marks" }
    }
  }
]);
