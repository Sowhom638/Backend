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
    console.log(movie);
    
  } catch (error) {
    throw error;
  }
}
// readMovieByTitle("Lagaan");
async function readAllMovies(movieTitle){
  try {
    const movie = await Movie.find();
    console.log(movie);
    
  } catch (error) {
    throw error;
  }
}
// readAllMovies();
async function readMoviesByDirector(directorName){
  try {
    const movie = await Movie.find({director: directorName});
    console.log(movie);
    
  } catch (error) {
    throw error;
  }
}
// readMoviesByDirector('Kabir Khan');

// find movie by id and update it's rating

async function updateMovie(movieId, dataToUpdate) {
try {
const updatedMovie = await Movie.findByIdAndUpdate(movieId, dataToUpdate, { new: true })
console.log(updatedMovie)
} catch (error) {
console.log("Error in updating Movie rating", error)
}
}

// updateMovie("66162fdc7f2872494a4ea9b2", { releaseYear: 2002 })

// find one data and update its value

async function updateMovieDetail(movieTitle, dataToUpdate) {
try {
const updatedMovie = await Movie.findOneAndUpdate({ title: movieTitle }, dataToUpdate, { new: true })
console.log(updatedMovie)
} catch (error) {
console.log("Error in changing data:", error)
}
}

// updateMovieDetail("Kabhi Khushi Kabhie Gham", { releaseYear: 2001 })

// find a movie by id and delete from the database

async function deleteMovie(movieId) {
try {
const deleteMovie = await Movie.findByIdAndDelete(movieId)
console.log(deleteMovie);
} catch (error) {
console.log("Error in Deleting Movie", error)
}
}

// deleteMovie("68c2ff3626d4a4da3441d235")

async function deleteMovieFromDb(movieTitle) {
try {
const deletedMovie = await Movie.findOneAndDelete({ title: movieTitle })
console.log("This movie was deleted:", deletedMovie)
} catch (error) {
console.log("Error in movie deletion ", error)
}
}

// deleteMovieFromDb("3 Idiots")