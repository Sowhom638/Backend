const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publishedYear: {
    type: Number,
    required: true,
  },
  genre: {
    type: [String],
  },
  language: {
    type: String,
    required: true
  },
  country: {
    type: String,
  },
  rating: {
    type: Number,
    required: true
  },
  summary: {
    type: String,
    required: true,
  },
  coverImageUrl: {
    type: String,
    required: true,
  },
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;