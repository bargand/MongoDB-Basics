use("CrudDB")

db.createCollection("courses")
db.courses.insertOne({
    name: "Debargha nandi",
    price: 0,
    Assignments: 34,
    projects: 45
})

// Create
db.courses.insertMany([
    {
        "name": "Debargha Nandi",
        "price": 0,
        "Assignments": 34,
        "projects": 45
    },
    {
        "name": "Arjun Mehta",
        "price": 0,
        "Assignments": 28,
        "projects": 32
    },
    {
        "name": "Sneha Roy",
        "price": 0,
        "Assignments": 40,
        "projects": 48
    },
    {
        "name": "Rahul Sharma",
        "price": 0,
        "Assignments": 30,
        "projects": 36
    },
    {
        "name": "Priya Verma",
        "price": 0,
        "Assignments": 25,
        "projects": 30
    },
    {
        "name": "Aditya Rao",
        "price": 0,
        "Assignments": 20,
        "projects": 25
    },
    {
        "name": "Kavya Iyer",
        "price": 0,
        "Assignments": 36,
        "projects": 42
    },
    {
        "name": "Rohan Das",
        "price": 0,
        "Assignments": 38,
        "projects": 50
    },
    {
        "name": "Ishita Gupta",
        "price": 0,
        "Assignments": 32,
        "projects": 40
    },
    {
        "name": "Aryan Patel",
        "price": 0,
        "Assignments": 18,
        "projects": 22
    }
]
)


//read

let a = db.courses.find({projects: 45})

console.log(a)
console.log(a.count())
console.log(a.toArray())

let b = db.courses.findOne({projects: 40})
console.log(b)

let c = db.courses.findOneAndDelete({name: "Ishita Gupta"})
console.log(c)

// Update
let e = db.courses.updateOne({price: 0}, {$set: {price: 1203}})
console.log(e)

let f = db.courses.updateMany({projects: 45}, {$set: {price: 400000000}})
console.log(f)


// Delete
let d = db.courses.deleteMany({name: "Priya Verma"})
console.log(d)


let g = db.courses.find({projects: 45})
console.log(g)