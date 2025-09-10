const mongoose = require('mongoose');

const CameraSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  originalPrice: {
    type: Number,
    default: null
  },
  discount: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
    required: true
  },
  effectivePixels: {
    type: String,
    required: true
  },
  sensorType: {
    type: String,
    required: true
  },
  videoRecording: {
    type: String,
    required: true
  },
  wifiAvailable: {
    type: Boolean,
    default: false
  },
  hasBluetooth: {
    type: Boolean,
    default: false
  },
  warrantyYears: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    default: 0
  },
  reviewsCount: {
    type: Number,
    default: 0
  },
  imageUrl: {
    type: String,
    required: true
  }
});

const Camera = mongoose.model('Camera', CameraSchema);

module.exports = Camera;