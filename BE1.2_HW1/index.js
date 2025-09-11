const { initializeDatabase } = require("./db/db.connect.js");
const fs = require("fs");
const Profile = require("./models/profile.models.js");

const jsonData = fs.readFileSync("profile.json", "utf-8");
const profileData = JSON.parse(jsonData);

async function seedData() {
  await initializeDatabase();
  for (const profile of profileData) {
    try {
      const newData = new Profile({
        fullName: profile.fullName,
        username: profile.username,
        bio: profile.bio,
        profilePicUrl: profile.profilePicUrl,
        followingCount: profile.followingCount,
        followerCount: profile.followerCount,
        companyName: profile.companyName,
        location: profile.location,
        portfolioUrl: profile.portfolioUrl,
      });
      await newData.save();
    } catch (error) {
      console.log("Error while seeding data in database", error);
    }
  }
}
seedData();