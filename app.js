const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mongoDemo")
.then(()=> {
    console.log("successfully connected to mongo db");
})
.catch((err) => {
    console.log(err);
});

const student = new mongoose.Schema({
    name: String,
    age: Number,
    regular: Boolean
});

const Student = mongoose.model("Student", student);
const student1 = new Student({
    name: "santosh",
    age: "22",
    regular: true
})

// Student.create({
//     name: "sala",
//     age: "20",
//     regular: true
// }).then(() => {
//     console.log("student3 saved successfully");
// })
// .catch((err) => {
//     console.log("error while saving the student");
// });

// Student.find().then((students) => {
//     console.log(students);
// }).catch((err)=> {
//     console.log(err);
// });

//handling promises using .then .catch

// Student.updateOne({name: "sala"}, {$set: {regular: false}}).then((updatedStudent) => {
//     console.log(updatedStudent);
// })
// .catch((err) => {
//     console.log(err);
// });

//handling promises using async await
async function updateStudent() {
    await Student.updateOne({name: "sala"}, {$set: {regular: true}})
};
updateStudent();