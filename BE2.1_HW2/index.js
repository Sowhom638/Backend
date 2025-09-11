const { initializeDatabase } = require("./db/db.connect");
const Hotel = require("./models/hotel.models")

initializeDatabase();

const newHotel = {
  name: "Cha Cha",
  cuisine: ["Spanish"],
  location: "123 Main Street, Anytown",
  rating: 4.0,
  reviews: [],
  website: "https://example.com",
  phoneNumber: "+1234567890",
  openHours: "Mon-Sun: 11:00 AM - 10:00 PM",
  priceRange: "$$ (11-30)",
  reservationsNeeded: true,
  isDeliveryAvailable: true,
  menuUrl: "https://example.com/menu",
  photos: ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg"],
};

async function createHotel(newHotel) {
  try {
    const hotel = new Hotel(newHotel)
    const saveHotel = await hotel.save()
    console.log("New Hotel data:", saveHotel)
  } catch (error) {
    throw error
  }
}

createHotel(newHotel)