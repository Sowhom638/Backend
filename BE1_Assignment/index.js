const { initializeDatabase } = require("./db/db.connect.js");
const fs = require("fs");
const Car = require("./models/car.models.js");

const jsonData = fs.readFileSync("car.json", "utf-8");
const carData = JSON.parse(jsonData);

async function seedData() {
  await initializeDatabase();
  for (const car of carData) {
    try {
      const newData = new Car({
        brand: car.brand,
        model: car.model,
        year: car.year,
        bodyStyle: car.bodyStyle,
        fuelType: car.fuelType,
        transmission: car.transmission,
        engine: car.engine,
        mileage: car.mileage,
        color: car.color,
        price: car.price,
        condition: car.condition,
        description: car.description,
        photos: car.photos,
        inMarket: car.inMarket,
      });
      await newData.save();
    } catch (error) {
      console.log("Error while seeding data in database", error);
    }
  }
}
seedData();