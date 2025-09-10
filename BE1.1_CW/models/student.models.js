const mongoose = require("mongoose");

const StudetSchema = new mongoose.Schema({
    studentRegistrationNumber: String,
    studentId: String,
    studentName: String,
    fatherGurdianName: String,
    class: String,
    emergencyContact: Number,
    studentProfileImageUrl: String
})
const Student = mongoose.model("Student", StudetSchema);
module.exports = Student;