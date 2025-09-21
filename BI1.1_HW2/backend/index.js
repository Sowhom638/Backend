const express =  require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

const { initializeDatabase } = require("./db/db.connect");
const Hotel = require("./models/hotel.models");

initializeDatabase();

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

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
  ishotelAvailable: true,
  photos: [
    "https://example.com/hotel2-photo1.jpg",
    "https://example.com/hotel2-photo2.jpg",
  ],
};
async function createHotel(newHotel) {
  try {
    const hotel = new Hotel(newHotel);
    const saveHotel = await hotel.save();
    return saveHotel;
  } catch (error) {
    throw error;
  }
}
app.post("/hotels", async (req, res) => {
    try {
        const saveHotel = await createHotel(req.body)
        res.status(201).json({ message: "Hotel added successfully.", hotel: saveHotel })
    } catch (error) {
        res.status(500).json({ error: "Failed to add hotel" })
    }
})


// 3. Create a function to read all hotels from the database. Console all the hotels. Use proper function and variable names.
async function allHotels() {
  try {
    const all = await Hotel.find();
   return all;
  } catch (error) {
    throw error;
  }
}
// allHotels();
app.get("/hotels",async (req, res)=>{
  try {
    const hotel = await allHotels();
  if(hotel.length != 0){
    res.status(200).json({ message: "hotel data founded successfully.", hotel});
  }else{
res.status(404).json({ error: "hotel not Found." });
  }
  } catch (error) {
    res.status(400).json({ error: "Error while finding hotel" });
  }
})


// 4. Create a function to read a hotel by its name ("Lake View"). Console the hotel details of Lake View hotel. Use proper function and variable names.
async function hotelByName(hotelName) {
  try {
    const byName = await Hotel.findOne({name: hotelName});
    return byName;
  } catch (error) {
    throw error;
  }
}
// hotelByName("Lake View");
app.get("/hotels/:hotelName",async (req, res)=>{
  try {
    const hotel = await hotelByName(req.params.hotelName);
  if(hotel.length != 0){
    res.status(200).json({ message: "hotel data founded successfully.", hotel});
  }else{
res.status(404).json({ error: "hotel not Found." });
  }
  } catch (error) {
    res.status(400).json({ error: "Error while finding hotel" });
  }
})

async function hotelByCategory(hotelCategory) {
  try {
    const all = await Hotel.find({category: hotelCategory});
   return all; 
  } catch (error) {
    throw error;
  }
}
app.get("/hotels/category/:hotelCategory",async (req, res)=>{
  try {
    const hotel = await hotelByCategory(req.params.hotelCategory);
  if(hotel.length != 0){
    res.status(200).json({ message: "hotel data founded successfully.", hotel});
  }else{
res.status(404).json({ error: "hotel not Found." });
  }
  } catch (error) {
    res.status(400).json({ error: "Error while finding hotel" });
  }
})

// 9. Create a function to read all hotels with rating. Console the hotels.
async function ratingOfHotel(hotelRating) {
  try {
    const all = await Hotel.find({rating: Number(hotelRating)});
   return all; 
  } catch (error) {
    throw error;
  }
}
// ratingeOfHotel();

app.get("/hotels/rating/:hotelRating",async (req, res)=>{
  try {
    const hotel = await ratingOfHotel(req.params.hotelRating);
  if(hotel.length != 0){
    res.status(200).json({ message: "hotel data founded successfully.", hotel});
  }else{
res.status(404).json({ error: "hotel not Found." });
  }
  } catch (error) {
    res.status(400).json({ error: "Error while finding hotel" });
  }
})

// 10. Create a function to read a hotel by phone number. Console the hotel data.
async function phoneNumberOfHotel(phnNum) {
  try {
    const byPhone = await Hotel.findOne({phoneNumber: phnNum});
    return byPhone;
  } catch (error) {
    throw error;
  }
}
// phoneNumberOfHotel(1299655890);
app.get("/hotels/directory/:phoneNumber",async (req, res)=>{
  try {
    const hotel = await phoneNumberOfHotel(req.params.phoneNumber);
  if(hotel.length != 0){
    res.status(200).json({ message: "hotel data founded successfully.", hotel});
  }else{
res.status(404).json({ error: "hotel not Found." });
  }
  } catch (error) {
    res.status(400).json({ error: "Error while finding hotel" });
  }
})

async function updateHotel(hotelId, dataToUpdate) {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(hotelId, dataToUpdate, {
            new: true,
        });
        return updatedHotel;
    } catch (error) {
        console.log("Error in updating hotel rating", error);
    }
}
app.post("/hotels/:hotelId", async (req, res) => {
    try {
        const updatedHotel = await updateHotel(req.params.hotelId, req.body);
        if (updatedHotel) {
            res.status(200).json({ message: "Hotel updated successfully.", updatedHotel });
        } else {
            res.status(404).json({ error: "Hotel not found." });
        }
    } catch (error) {
        res.status(500).json({ error: "failed to update hotel." });
    }
});


async function deleteHotel(hotelId) {
    try {
        const deletedHotel = await Hotel.findByIdAndDelete(hotelId);
        return deletedHotel;
    } catch (error) {
        console.log(error);
    }
}
app.delete("/hotels/:hotelId", async (req, res) => {
    try {
        const deletedHotel = await deleteHotel(req.params.hotelId);
        if (deletedHotel) {
            res.status(200).json({ message: "Hotel deleted successfully." });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to delete hotel." });
    }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
  console.log(`Server is running in port ${PORT}`);
  
})