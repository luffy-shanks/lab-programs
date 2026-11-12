// Run in mongosh. The database is created when data is stored in it.
use collegeDB;

db.createCollection("students");
db.students.insertOne({ name: "Anu", course: "MERN" });

// Drop a collection.
// db.students.drop();

// Drop the currently selected database.
// db.dropDatabase();
