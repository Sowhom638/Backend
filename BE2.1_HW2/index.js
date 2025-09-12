const { initializeDatabase } = require("./db/db.connect");
const Hotel = require("./models/hotel.models");

initializeDatabase();

const newHotel = {
  name: "Sunset Resort",
  category: "Resort",
  location: "12 Main Road, Anytown",
  rating: 4.0,
  reviews: [],
  website: "https://sunset-example.com",
  phoneNumber: "+1299655890",
  checkInTime: "2:00 PM",
  checkOutTime: "11:00 AM",
  amenities: [
    "Room Service",
    "Horse riding",
    "Boating",
    "Kids Play Area",
    "Bar",
  ],
  priceRange: "$$$$ (61+)",
  reservationsNeeded: true,
  isParkingAvailable: true,
  isWifiAvailable: true,
  isPoolAvailable: true,
  isSpaAvailable: true,
  isRestaurantAvailable: true,
  photos: [
    "https://example.com/hotel2-photo1.jpg",
    "https://example.com/hotel2-photo2.jpg",
  ],
};
async function createHotel(newHotel) {
  try {
    const hotel = new Hotel(newHotel);
    const saveHotel = await hotel.save();
    console.log("New Hotel data:", saveHotel);
  } catch (error) {
    throw error;
  }
}

createHotel(newHotel);

// 3. Create a function to read all hotels from the database. Console all the hotels. Use proper function and variable names.
async function allHotels() {
  try {
    const all = await Hotel.find();
    console.log(all);
  } catch (error) {
    throw error;
  }
}
allHotels();

// 4. Create a function to read a hotel by its name ("Lake View"). Console the restaurant details of Lake View hotel. Use proper function and variable names.
async function hotelByName(hotelName) {
  try {
    const byName = await Hotel.findOne({name: hotelName});
    console.log(byName);
  } catch (error) {
    throw error;
  }
}
hotelByName("Lake View");

// 5. Create a function to read all hotels which offers parking space. Console all the hotel details.
async function parkingSpaceAvailable() {
  try {
    const all = await Hotel.find({isParkingAvailable: true});
    console.log(all);
  } catch (error) {
    throw error;
  }
}
parkingSpaceAvailable();

// 6. Create a function to read all hotels which has restaurant available. Console all the hotels.
async function isRestaurant() {
  try {
    const all = await Hotel.find({isRestaurantAvailable: true});
    console.log(all);
  } catch (error) {
    throw error;
  }
}
isRestaurant();

// 7. Create a function to read all hotels by category ("Mid-Range"). Console all the mid range hotels.
async function midRangeHotel() {
  try {
    const all = await Hotel.find({category: "Mid-Range"});
    console.log(all);
  } catch (error) {
    throw error;
  }
}
midRangeHotel();

// 8. Create a function to read all hotels by price range ("$$$$ (61+)"). Console all the hotels.
async function priceRangeOfHotel() {
  try {
    const all = await Hotel.find({priceRange: "$$$$ (61+)"});
    console.log(all);
  } catch (error) {
    throw error;
  }
}
priceRangeOfHotel();

// 9. Create a function to read all hotels with 4.0 rating. Console the hotels.
async function ratingeOfHotel() {
  try {
    const all = await Hotel.find({rating: 4.0});
    console.log(all); 
  } catch (error) {
    throw error;
  }
}
ratingeOfHotel();

// 10. Create a function to read a hotel by phone number ("+1299655890"). Console the hotel data.
async function phoneNumberOfHotel(phnNum) {
  try {
    const byPhone = await Hotel.findOne({phoneNumber: phnNum});
    console.log(byPhone);
  } catch (error) {
    throw error;
  }
}
phoneNumberOfHotel(1299655890);