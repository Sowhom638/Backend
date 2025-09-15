const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
    model: String,
    releaseyear: Number,
    make: String
});

const Car = mongoose.model("Car", CarSchema);

module.exports = Car;