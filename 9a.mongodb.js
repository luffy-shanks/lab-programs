use college

db.createCollection("students")

db.students.insertOne({
    rollno: 1,
    name: "Ravi",
    marks: 85
})

show collections

db.students.drop()

db.dropDatabase()
