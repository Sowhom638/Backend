const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  profilePicUrl: {
    type: String,
    required: true,
  },
  followingCount: {
    type: Number,
    required: true,
  },
  followerCount: {
    type: Number,
    required: true,
  },
  companyName: {
    type: String,
  },
  location: {
    type: String,
  },
  portfolioUrl: {
    type: String,
    required: true,
  },
});

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;