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

createRestaurant(newRestaurant);

// Consoling all Restaurants
async function allRestaurants() {
  try {
    const all = await Restaurant.find();
    console.log(all);
  } catch (error) {
    throw error;
  }
}
allRestaurants();

// 4. Create a function to read a restaurant by its name ("New Restaurant"). Console the restaurant details. Use proper function and variable names.
async function restaurantsByName(restaurantName) {
  try {
    const all = await Restaurant.findOne({name: restaurantName});
    console.log(all);
  } catch (error) {
    throw error;
  }
}
restaurantsByName("New Restaurant");

// 5. Create a function to read all restaurants which offers reservations. Console the restaurant details.
async function reservationRestaurants() {
  try {
    const all = await Restaurant.find({reservationsNeeded: true});
    console.log(all);
  } catch (error) {
    throw error;
  }
}
reservationRestaurants();

// 6. Create a function to read all restaurants which offers delivery. Console the restaurant details.
async function offersDeliveryRestaurants() {
  try {
    const all = await Restaurant.find({isDeliveryAvailable: true});
    console.log(all);
  } catch (error) {
    throw error;
  }
}
offersDeliveryRestaurants();

// 7. Create a function to read a restaurant by phone number (+1288997392). Console the restaurant details.
async function restaurantsByPhoneNumber(phone) {
  try {
    const all = await Restaurant.findOne({phoneNumber: phone});
    console.log(all);
  } catch (error) {
    throw error;
  }
}
restaurantsByPhoneNumber(1288997392);
// 8. Create a function to read all restaurants by cuisine ("Italian"). Console all the restaurants with Italian cuisine.
async function italianCuisineRestaurant() {
  try {
    const all = await Restaurant.find({cuisine: "Italian"});
    console.log(all);
  } catch (error) {
    throw error;
  }
}
italianCuisineRestaurant();