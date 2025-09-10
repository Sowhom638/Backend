const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: String,
    required: true,
    trim: true
  },
  publishedYear: {
    type: Number,
    required: true,
    min: 0, // assuming no negative years
    max: new Date().getFullYear() + 1 // prevent future years beyond next year
  },
  genre: {
    type: String,
    enum: [
      'Fiction',
      'Non-Fiction',
      'Mystery',
      'Thriller',
      'Science Fiction',
      'Fantasy',
      'Romance',
      'Historical',
      'Biography',
      'Self-help',
      'Other'
    ],
    required: true,
    default: ['Other']
  },
  language: {
    type: String,
    required: true,
    trim: true
  },
  country: {
    type: String,
    default: 'United States',
    trim: true
  },
  rating: {
    type: Number,
    min: 0,
    max: 10,
    default: 0
  },
  summary: {
    type: String,
    trim: true
  },
  coverImageUrl: {
    type: String,
    trim: true
  }
}, { timestamps: true });

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;