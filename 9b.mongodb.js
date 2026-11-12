db.students.insertMany([
    { rollno: 1, name: "Ravi", marks: 85 },
    { rollno: 2, name: "Sita", marks: 95 },
    { rollno: 3, name: "Arun", marks: 75 },
    { rollno: 4, name: "Priya", marks: 90 }
])

db.students.find()
db.students.find().limit(2)
db.students.find({ marks: { $gt: 80 } })

db.students.find().limit(2)


db.students.find().sort({ marks: -1 })

db.students.createIndex({ name: 1 })

db.students.aggregate([
    {
        $group: {
            _id: null,
            averageMarks: { $avg: "$marks" }
        }
    }
])

