const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());

const { initializeDatabase } = require("./db/db.connect");
const Movie = require("./models/movie.models")

initializeDatabase();

const newMovie = {
  title: "New Movie",
  releaseYear: 2023,
  genre: ["Drama"],
  director: "Aditya Roy Chopra",
  actors: ["Actor1", "Actor2"],
  language: "Hindi",
  country: "India",
  rating: 6.1,
  plot: "A young man and woman fall in love on a Australia trip.",
  awards: "IFA Filmfare Awards",
  posterUrl: "https://example.com/new-poster1.jpg",
  trailerUrl: "https://example.com/new-trailer1.mp4"
}

async function createMovie(newMovie) {
  try {
    const movie = new Movie(newMovie)
    const saveMovie = await movie.save()
    console.log("New Movie data:", saveMovie)
  } catch (error) {
    throw error
  }
}

// createMovie(newMovie)

async function readMovieByTitle(movieTitle){
  try {
    const movie = await Movie.findOne({title: movieTitle});
    return movie;
    
  } catch (error) {
    throw error;
  }
}
// readMovieByTitle("Lagaan");
app.get("/movies/:title",async (req, res)=>{
  try {
    const movie = await readMovieByTitle(req.params.title);
  if(movie != 0){
    res.status(200).json({ message: "Movie data founded successfully.", movie});
  }else{
res.status(404).json({ error: "Movie not Found." });
  }
  } catch (err) {
    res.status(400).json({ error: "Error while finding movie" });
  }
})

async function readAllMovies(){
  try {
    const movie = await Movie.find();
    return movie;
    
  } catch (error) {
    throw error;
  }
}
// readAllMovies();
app.get("/movies",async (req, res)=>{
  try {
    const movie = await readAllMovies();
  if(movie != 0){
    res.status(200).json({ message: "Movie data founded successfully.", movie});
  }else{
res.status(404).json({ error: "Movie not Found." });
  }
  } catch (err) {
    res.status(400).json({ error: "Error while finding movie" });
  }
})

async function readMoviesByDirector(directorName){
  try {
    const movie = await Movie.find({director: directorName});
    return movie;
    
  } catch (error) {
    throw error;
  }
}
// readMoviesByDirector('Kabir Khan');
app.get("/movies/directors/:director",async (req, res)=>{
  try {
    const movie = await readMoviesByDirector(req.params.director);
  if(movie != 0){
    res.status(200).json({ message: "Movie data founded successfully.", movie});
  }else{
res.status(404).json({ error: "Movie not Found." });
  }
  } catch (err) {
    res.status(400).json({ error: "Error while finding movie" });
  }
})

async function readMoviesByGenre(genrename){
  try {
    const movie = await Movie.find({genre: genrename});
    return movie;
    
  } catch (error) {
    throw error;
  }
}
app.get("/movies/genres/:genre",async (req, res)=>{
  try {
    const movie = await readMoviesByGenre(req.params.genre);
  if(movie != 0){
    res.status(200).json({ message: "Movie data founded successfully.", movie});
  }else{
res.status(404).json({ error: "Movie not Found." });
  }
  } catch (err) {
    res.status(400).json({ error: "Error while finding movie" });
  }
})


const PORT = process.env.PORT;
app.listen(PORT, ()=>{
  console.log(`server is running on port ${PORT}`);
})