const mongoose = require("mongoose");

const IDcardSchema = new mongoose.Schema({
  idNumber: Number,
  dob: String,
  mail: String,
  telNo: Number,
  address: String,
  imageUrl: String
});

const IDcard = mongoose.model("IDcard", IDcardSchema);

module.exports = IDcard;