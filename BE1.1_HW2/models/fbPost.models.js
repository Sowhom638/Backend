const mongoose = require("mongoose");

const FBPostSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },
    likes: {
      type: Number,
      default: 0,
      required: true,
    },
    comments: {
      type: Number,
      default: 0,
      required: true,
    },
    shares: {
      type: Number,
      default: 0,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const FBPost = mongoose.model("FBPost", FBPostSchema);
module.exports = FBPost;