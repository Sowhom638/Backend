const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  cuisine: {
    type: String,
    enum: [
      'Italian',
      'Mexican',
      'Chinese',
      'Indian',
      'American',
      'French',
      'Japanese',
      'Mediterranean',
      'Thai',
      'Vegetarian',
      'Vegan',
      'Other'
    ],
    required: true,
    default: ['Other']
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  owner: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    trim: true
  },
  website: {
    type: String,
    trim: true
  },
  openingYear: {
    type: Number,
    min: 0,
    max: new Date().getFullYear() + 1
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  specialDishes: {
    type: String,
    default: []
  },
  photoUrls: {
    type: String,
    default: []
  }
}, { timestamps: true });

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;