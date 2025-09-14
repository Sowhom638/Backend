const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

const movies = [
  { id: 1, title: 'Inception', director: 'Christopher Nolan', year: 2010 },
  { id: 2, title: 'The Godfather', director: 'Francis Ford Coppola', year: 1972 },
  { id: 3, title: 'The Shawshank Redemption', director: 'Frank Darabont', year: 1994 }
];

const items = [
  { id: 1, itemName: 'Spoon', color: 'Silver', quantity: 8},
 { id: 2, itemName: 'Fork', color: 'Silver', quantity: 8 },
 { id: 3, itemName: 'Plate', color: 'Off-White', quantity: 6 }
];

app.get("/", (req, res) => {
res.send("Hello, Express server.");
});

app.post("/movies", (req, res) => {
const newMovie = req.body;

if (!newMovie.title || !newMovie.director || !newMovie.year) {
res.status(400).json({ error: "title, director and year are required." });
} else {
movies.push(newMovie);
res.status(201).json({ message: "movie added successfully.", movie: newMovie });
}
});

app.get("/movies", (req, res) => {
res.send(movies);
});

app.delete("/movies/:id", (req, res) => {
const movieId = req.params.id;

const index = movies.findIndex((movie) => movie.id == movieId);
if(index === -1){
  res.status(404).json({ error: "Movie not Found." });
} else {
  movies.splice(index,1);
  res.status(200).json({ message: "Movie deleted successfully."});
}
});

app.post("/movies/:id", (req, res) => {
const movieId = parseInt(req.params.id); // converting the string into integer
const updatedMovieData = req.body;

const movieToUpdate = movies.find((movie) => movie.id === movieId);
if(!movieToUpdate){
  res.status(404).json({ error: "Movie not Found." });
} else {
  if(!updatedMovieData.title || !updatedMovieData.director || !updatedMovieData.year){
    res.status(400).json({ error: "title, director and year are required." });
  }else{
    Object.assign(movieToUpdate, updatedMovieData); // Object.assign(destinationObject, sourceObject) --> To copy object data from source object to destination object
  res.status(200).json({ message: "Movie data updated successfully.", movie: movieToUpdate});
  }
}
});

app.post("/items", (req, res) => {
const newItem = req.body;

if (!newItem.itemName || !newItem.color || !newItem.quantity) {
res.status(400).json({ error: "itemName, color and quantity are required." });
} else {
items.push(newItem);
res.status(201).json({ message: "item added successfully.", item: newItem });
}
});

app.get("/items", (req, res) => {
res.send(items);
});

app.delete("/items/:id", (req, res) => {
const itemId = req.params.id;

const index = items.findIndex((item) => item.id == itemId);
if(index === -1){
  res.status(404).json({ error: "Item  not found." });
} else {
  items.splice(index,1);
  res.status(200).json({ message: "Item deleted successfully."});
}
});

app.post("/items/:id", (req, res) => {
const itemId = parseInt(req.params.id); // converting the string into integer
const updatedItemData = req.body;

const itemToUpdate = items.find((item) => item.id === itemId);
if(!itemToUpdate){
  res.status(404).json({ error: "Item  not found." });
} else {
  if(!updatedItemData.itemName || !updatedItemData.color || !updatedItemData.quantity){
    res.status(400).json({ error: "itemName, color and quantity are required." });
  }else{
    Object.assign(itemToUpdate, updatedItemData); // Object.assign(destinationObject, sourceObject) --> To copy object data from source object to destination object
  res.status(200).json({ message: "Item data updated successfully.", item: itemToUpdate});
  }
}
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});