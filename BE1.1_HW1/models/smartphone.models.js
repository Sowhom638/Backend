const mongoose = require('mongoose');

const smartphoneSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
    
  },
  model: {
    type: String,
    required: true,
    
  },
  releaseYear: {
    type: Number,
    required: true,
    min: 1990,
    max: new Date().getFullYear() + 1
  },
  operatingSystem: {
    type: String,
    enum: ['iOS', 'Android', 'Windows', 'Other'],
    default: 'Android'
  },
  displaySize: {
    type: String,
    
  },
  storage: {
    type: String,
    
  },
  ram: {
    type: String,
    
  },
  cameraSpecs: {
    type: String
  },
  batteryCapacity: {
    type: String,
    
  },
  connectivity: {
    type: String,
    default: []
  },
  price: {
    type: Number,
    min: 0,
    default: 0
  },
  colorsAvailable: {
    type: String,
    default: []
  },
  features: {
    type: String,
    default: []
  }
}, { timestamps: true });

const Smartphone = mongoose.model('Smartphone', smartphoneSchema);

module.exports = Smartphone;