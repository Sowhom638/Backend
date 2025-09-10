const mongoose = require("mongoose");

const ACSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  rating: {
    type: Number,
    required: true,
  },
  views: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  isOfferAvailable: {
    type: Boolean,
    default: false,
  },
  imageUrl:{
    type: String,
    required: true,
  }
});
const AC = mongoose.model("AC", ACSchema);
module.exports = AC;