const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      
      maxlength: 100
    },
    artist: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      enum: [
        'Rock',
        'Pop',
        'Hip-Hop',
        'Jazz',
        'Classical',
        'Country',
        'Electronic',
        'R&B',
        'Reggae',
        'Indie'
      ],
      required: true,
    },
    releaseYear: {
      type: Number,
    },
    recordLabel: {
      type: String,
    },
    format: {
      type: String,
      enum: ['CD', 'Vinyl', 'Digital', 'Cassette', 'DVD', 'Blu-ray'],
      default: 'Digital',
    },
    isExplicit: {
      type: Boolean,
      default: false
    },
    isAvailableOnStreaming: {
      type: Boolean,
      default: false
    },
    isFeatured: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);


module.exports = mongoose.model('Album', albumSchema);