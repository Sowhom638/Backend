const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

const movies = [

  { id: 1, title: 'Inception', director: 'Christopher Nolan', year: 2010 },

  { id: 2, title: 'The Godfather', director: 'Francis Ford Coppola', year: 1972 }

];

app.get("/", (req, res) => {
  res.send("Hello, Express server.");
});

const items = [

  { id: 1, itemName: 'Spoon', color: 'Silver', quantity: 8},

 { id: 2, itemName: 'Fork', color: 'Silver', quantity: 8 }

];

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

// app.post("/users");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
