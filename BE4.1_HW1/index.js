const express =  require("express");
const app = express();
require("dotenv").config();

app.use(express.json());
const { initializeDatabase } = require("./db/db.connect");
const Restaurant = require("./models/restaurant.models");

initializeDatabase();

// const newRestaurant = {
//   name: "Yo China",
//   cuisine: ["Chinese", "Italian"],
//   location: "MG Road, Bangalore",
//   rating: 3.9,
//   reviews: [],
//   website: "https://yo-example.com",
//   phoneNumber: "+1288997392",
//   openHours: "Tue-Sun: 10:00 AM - 11:00 PM",
//   priceRange: "$$$ (31-60)",
//   reservationsNeeded: true,
//   isDeliveryAvailable: false,
//   menuUrl: "https://yo-example.com/menu",
//   photos: [
//     "https://example.com/yo-photo1.jpg",
//     "https://example.com/yo-photo2.jpg",
//     "https://example.com/yo-photo3.jpg",
//   ],
// };

// Creating new restaurant data.
async function createRestaurant(newRestaurant) {
  try {
    const restaurant = new Restaurant(newRestaurant);
    const saveRestaurant = await restaurant.save();
    return saveRestaurant;
  } catch (error) {
    throw error;
  }
}
app.post("/restaurants", async (req, res) => {
    try {
        const saveRestaurant = await createRestaurant(req.body)
        res.status(201).json({ message: "Restaurant added successfully.", restaurant: saveRestaurant })
    } catch (error) {
        res.status(500).json({ error: "Failed to add restaurant" })
    }
})

// createRestaurant(newRestaurant);

// Consoling all Restaurants
async function allRestaurants() {
  try {
    const all = await Restaurant.find();
    return all;
  } catch (error) {
    throw error;
  }
}
// allRestaurants();
app.get("/restaurants",async (req, res)=>{
  try {
    const restaurant = await allRestaurants();
  if(restaurant.length != 0){
    res.status(200).json({ message: "restaurant data founded successfully.", restaurant});
  }else{
res.status(404).json({ error: "restaurant not Found." });
  }
  } catch (error) {
    res.status(400).json({ error: "Error while finding restaurant" });
  }
})

// 4. Create a function to read a restaurant by its name. Console the restaurant details. Use proper function and variable names.
async function restaurantsByName(restaurantName) {
  try {
    const all = await Restaurant.findOne({name: restaurantName});
    return all;
  } catch (error) {
    throw error;
  }
}
// restaurantsByName("New Restaurant");
app.get("/restaurants/:restaurantName",async (req, res)=>{
  try {
    const restaurant = await restaurantsByName(req.params.restaurantName);
  if(restaurant.length != 0){
    res.status(200).json({ message: "restaurant data founded successfully.", restaurant});
  }else{
res.status(404).json({ error: "restaurant not Found." });
  }
  } catch (error) {
    res.status(400).json({ error: "Error while finding restaurant" });
  }
})


// 7. Create a function to read a restaurant by phone number. Console the restaurant details.
async function restaurantsByPhoneNumber(phone) {
  try {
    const all = await Restaurant.findOne({phoneNumber: phone});
    return all;
  } catch (error) {
    throw error;
  }
}
// restaurantsByPhoneNumber(1288997392);
app.get("/restaurants/directory/:phoneNumber",async (req, res)=>{
  try {
    const restaurant = await restaurantsByPhoneNumber(req.params.phoneNumber);
  if(restaurant.length != 0){
    res.status(200).json({ message: "restaurant data founded successfully.", restaurant});
  }else{
res.status(404).json({ error: "restaurant not Found." });
  }
  } catch (error) {
    res.status(400).json({ error: "Error while finding restaurant" });
  }
})

// 8. Create a function to read all restaurants by cuisine . Console all the restaurants.
async function restaurantBycuisine(cuisineName) {
  try {
    const all = await Restaurant.find({cuisine: cuisineName});
    return all;
  } catch (error) {
    throw error;
  }
}
app.get("/restaurants/cuisine/:cuisineName",async (req, res)=>{
  try {
    const restaurant = await restaurantBycuisine(req.params.cuisineName);
  if(restaurant.length != 0){
    res.status(200).json({ message: "restaurant data founded successfully.", restaurant});
  }else{
res.status(404).json({ error: "restaurant not Found." });
  }
  } catch (error) {
    res.status(400).json({ error: "Error while finding restaurant" });
  }
})

async function restaurantByLocation(restloc) {
  try {
    const all = await Restaurant.find({location: restloc});
    return all;
  } catch (error) {
    throw error;
  }
}
app.get("/restaurants/location/:restaurantLocation",async (req, res)=>{
  try {
    const restaurant = await restaurantByLocation(req.params.restaurantLocation);
  if(restaurant.length != 0){
    res.status(200).json({ message: "restaurant data founded successfully.", restaurant});
  }else{
res.status(404).json({ error: "restaurant not Found." });
  }
  } catch (error) {
    res.status(400).json({ error: "Error while finding restaurant" });
  }
})

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
  console.log(`Server is running in port ${PORT}`);
  
})