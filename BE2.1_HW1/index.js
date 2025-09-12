const { initializeDatabase } = require("./db/db.connect");
const Restaurant = require("./models/restaurant.models");

initializeDatabase();

const newRestaurant = {
  name: "Yo China",
  cuisine: ["Chinese", "Italian"],
  location: "MG Road, Bangalore",
  rating: 3.9,
  reviews: [],
  website: "https://yo-example.com",
  phoneNumber: "+1288997392",
  openHours: "Tue-Sun: 10:00 AM - 11:00 PM",
  priceRange: "$$$ (31-60)",
  reservationsNeeded: true,
  isDeliveryAvailable: false,
  menuUrl: "https://yo-example.com/menu",
  photos: [
    "https://example.com/yo-photo1.jpg",
    "https://example.com/yo-photo2.jpg",
    "https://example.com/yo-photo3.jpg",
  ],
};

// Creating new restaurant data.
async function createRestaurant(newRestaurant) {
  try {
    const restaurant = new Restaurant(newRestaurant);
    const saveRestaurant = await restaurant.save();
    console.log("New Restaurant data:", saveRestaurant);
  } catch (error) {
    throw error;
  }
}

// createRestaurant(newRestaurant);

// Consoling all Restaurants
async function allRestaurants() {
  try {
    const all = await Restaurant.find();
    console.log(all);
  } catch (error) {
    throw error;
  }
}
// allRestaurants();

// 4. Create a function to read a restaurant by its name ("New Restaurant"). Console the restaurant details. Use proper function and variable names.
async function restaurantsByName(restaurantName) {
  try {
    const all = await Restaurant.findOne({name: restaurantName});
    console.log(all);
  } catch (error) {
    throw error;
  }
}
// restaurantsByName("New Restaurant");

// 5. Create a function to read all restaurants which offers reservations. Console the restaurant details.
async function reservationRestaurants() {
  try {
    const all = await Restaurant.find({reservationsNeeded: true});
    console.log(all);
  } catch (error) {
    throw error;
  }
}
// reservationRestaurants();

// 6. Create a function to read all restaurants which offers delivery. Console the restaurant details.
async function offersDeliveryRestaurants() {
  try {
    const all = await Restaurant.find({isDeliveryAvailable: true});
    console.log(all);
  } catch (error) {
    throw error;
  }
}
// offersDeliveryRestaurants();

// 7. Create a function to read a restaurant by phone number (+1288997392). Console the restaurant details.
async function restaurantsByPhoneNumber(phone) {
  try {
    const all = await Restaurant.findOne({phoneNumber: phone});
    console.log(all);
  } catch (error) {
    throw error;
  }
}
// restaurantsByPhoneNumber(1288997392);
// 8. Create a function to read all restaurants by cuisine ("Italian"). Console all the restaurants with Italian cuisine.
async function italianCuisineRestaurant() {
  try {
    const all = await Restaurant.find({cuisine: "Italian"});
    console.log(all);
  } catch (error) {
    throw error;
  }
}
// italianCuisineRestaurant();

// 1. Create a function that accepts a restaurant ID and an object with updated data, and updates the restaurant with the provided ID. Take the _id of the restaurant which has the name Yo China and update its rating from 3.9 to 4.1. Console the updated restaurant.
async function updateRating(objectId, updation) {
  try {
    const all = await Restaurant.findByIdAndUpdate(objectId, updation, { new: true });
    console.log(all);
  } catch (error) {
    console.log("Error while update rating", error);
  
  }
}
// updateRating('68c39d327fc29f1572701438', {rating: 4.1});

// 2. Create a function that accepts a restaurant name and an object with updated data, and updates the restaurant. Take the restaurant which has the name "Somi" and update its name from "Somi" to "Som Sarovar". Console the updated restaurant.
async function findByName(restName, updation) {
  try {
    const all = await Restaurant.findOneAndUpdate({name: restName}, updation, { new: true });
    console.log(all);
  } catch (error) {
    console.log("Error while update name", error);
  
  }
}
// findByName("Somi", {name: "Som Sarovar"})

// Create a function that accepts a restaurant's phone number and an object with updated data, and updates the restaurant. Take the restaurant which has the phone number "+1288997392" and update isDeliveryAvailable option to true. Console the updated restaurant.
async function findByPhoneNumber(phnNum, updation) {
  try {
    const all = await Restaurant.findOneAndUpdate({phoneNumber: phnNum}, updation, { new: true });
    console.log(all);
  } catch (error) {
    console.log("Error while update delivery status", error);
  
  }
}
findByPhoneNumber(1288997392, {isDeliveryAvailable: true})