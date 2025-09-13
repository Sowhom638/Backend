const { initializeDatabase } = require("./db/db.connect.js");
const Car = require("./models/car.models.js");

initializeDatabase();

const carData = {
  brand: "Honda",
  model: "Civic",
  year: 2018,
  bodyStyle: "Coupe",
  fuelType: "Gasoline",
  transmission: "Manual",
  engine: "1.5L Turbocharged Inline-4",
  mileage: 40000,
  color: "Black",
  price: 1800000,
  condition: "Used",
  description: "Sporty Civic coupe with low mileage and manual transmission.",
  photos: [
    "https://example.com/civic-photo1.jpg",
    "https://example.com/civic-photo2.jpg",
    "https://example.com/civic-photo3.jpg"
  ]
};

async function CreateNewCar (){
  try {
    const newCar = new Car(carData);
    const saveCar = await newCar.save();
    console.log(saveCar);
    
  } catch (error) {
    console.log("Error while creating car data", error);
    
  }
}
// CreateNewCar();

// 3. Create a function to read all cars from the database. Console all the cars. Use proper function and variable names.
async function findAllCars(){
  try {
     const allCar = await Car.find();
     console.log(allCar);
     
  } catch (error) {
    console.log("Error while finding car data", error);
  }
}
// findAllCars();

// 4. Create a function to read cars by brand ("Ford"). Console the car details. Use proper function and variable names.
async function findCarsByBrand(brandName){
  try {
     const filteredCar = await Car.find({brand: brandName});
     console.log(filteredCar);
     
  } catch (error) {
    console.log("Error while finding car data", error);
  }
}
// findCarsByBrand("Ford");

// 5. Create a function to read cars by color ("Black"). Console the car details. Use proper function and variable names.
async function findCarsByColor(carColor){
  try {
     const filteredCar = await Car.find({color: carColor});
     console.log(filteredCar);
     
  } catch (error) {
    console.log("Error while finding car data", error);
  }
}
// findCarsByColor("Black");

// 6. Create a function to update the price of a car with model "Corolla". Update the price to 2300000. Console the car with updated price.
async function carPriceUpdate(carModel, updation){
  try {
     const updatedCar = await Car.findOneAndUpdate({model: carModel},updation, {new: true});
     console.log(updatedCar);
     
  } catch (error) {
    console.log("Error while updating car data", error);
  }
}
// carPriceUpdate("Corolla", {price: 2300000});

// 7. Create a function to update the condition of a car with model "Model S". Update the condition to "Used". Console the car with updated condition.
async function carConditionUpdate(carModel, updation){
  try {
     const updatedCar = await Car.findOneAndUpdate({model: carModel},updation, {new: true});
     console.log(updatedCar);
     
  } catch (error) {
    console.log("Error while updating car data", error);
  }
}
// carConditionUpdate("Model S", {condition: 'Used'});

// 8. Create a function to delete a car by ID. Take the id of the car brand Tesla from the database and delete that car record. Console the deleted car data.
async function carDeleteById(carId){
  try {
     const deletedCar = await Car.findByIdAndDelete(carId);
     console.log(deletedCar);
     
  } catch (error) {
    console.log("Error while deleting car data", error);
  }
}
// carDeleteById('68c2b784b0f8e022cc322339')

// 9. Create a function to delete a car by its body style. Delete the car data with body style "Coupe" from the database console the deleted car data.
async function carDeleteByBodyStyle(carBodyStyle){
  try {
     const deletedCar = await Car.findOneAndDelete({bodyStyle: carBodyStyle});
     console.log(deletedCar);
     
  } catch (error) {
    console.log("Error while deleting car data", error);
  }
}
carDeleteByBodyStyle("Coupe");