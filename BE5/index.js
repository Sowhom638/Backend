const {initializeDatabase} = require("./db/db.connect.js");
const Post = require("./models/post.model");
const User = require("./models/user.model");

initializeDatabase();
const useData = {
  name: "John",
  email: "john@gmail.com"
};
const addUser = async () => {
  try {
    const newUser = new User(useData);
    await newUser.save();
    console.log("User added successfully");
    
  } catch (error) {
    console.log("Error: ", error);
  }
}
// addUser();

const postdata = {
  title: "Greeting",
  content: "Have a good day!",
  author: "68cd65900a6805c50e229c24"
}
const addPost = async () => {
  try {
    const newPost = new Post(postdata);
    await newPost.save();
    console.log("Post added successfully");
    
  } catch (error) {
    console.log("Error: ", error);
  }
}
// addPost();

const getAllPost = async () => {
  try {
    const allPost = await Post.find().populate("author");
    console.log("All posts: ", allPost);
  } catch (error) {
    console.log("Error: ", error);
  }
}
getAllPost();