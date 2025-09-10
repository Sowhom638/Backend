const mongoose = require("mongoose");

const ShoeSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  shoeType: {
    type: String,
  },
  productInfo: {
    type: String,
  },
  color: {
    type: String,
    enum: ["Blue", "Red", "Green", "Orange", "Black"],
  },
  shoeSize: {
    type: Number,
    enum: [7, 8, 9, 10, 11],
  },
  price: {
    type: Number
  },
  immageUrl: {
    type: String,
    required: true
  }
});

const Shoe = mongoose.model('Shoe', ShoeSchema);

module.exports = Shoe;
