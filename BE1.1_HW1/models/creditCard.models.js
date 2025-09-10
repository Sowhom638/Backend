const mongoose = require('mongoose');

const CreditCardSchema = new mongoose.Schema({
  cardNumber: {
    type: String,
    required: true,
  },
  cardHolderName: {
    type: String,
    required: true,
  },
  expiryDate: {
    type: String,
    required: true,
  },
  cvv: {
    type: String,
    required: false,
  },
  issuer: {
    type: String,
  },
});

const CreditCard = mongoose.model('CreditCard', CreditCardSchema);

module.exports = CreditCard;