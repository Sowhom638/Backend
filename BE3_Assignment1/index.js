const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

const albums = [
  { id: 1, title: 'Abbey Road', artist: 'The Beatles', year: 1969 },
  { id: 2, title: 'The Dark Side of the Moon', artist: 'Pink Floyd', year: 1973 },
  { id: 3, title: 'Thriller', artist: 'Michael Jackson', year: 1982 }
];

app.get("/", (req, res) => {
res.send("Hello, This is Express Assignment Server.");
});

app.post("/albums", (req, res) => {
const newAlbum = req.body;

if (!newAlbum.title || !newAlbum.artist || !newAlbum.year) {
res.status(400).json({ error: "title, artist and year are required." });
} else {
albums.push(newAlbum);
res.status(201).json({ message: "Album added successfully.", album: newAlbum });
}
});

app.get("/albums", (req, res) => {
res.send(albums);
});

app.delete("/albums/:id", (req, res) => {
const albumId = parseInt(req.params.id); // converting the string into integer

const index = albums.findIndex((album) => album.id === albumId);
if(index === -1){
  res.status(404).json({ error: "Album not Found." });
} else {
  albums.splice(index,1); // .splice(a, b) => delete 'b' elements starting from index 'a' of the array
  res.status(200).json({ message: "Album deleted successfully."});
}
});
app.post("/albums/:id", (req, res) => {
const albumId = parseInt(req.params.id); // converting the string into integer
const updatedAlbumData = req.body;

const albumToUpdate = albums.find((album) => album.id === albumId);
if(!albumToUpdate){
  res.status(404).json({ error: "Album not Found." });
} else {
  if(!updatedAlbumData.title || !updatedAlbumData.artist || !updatedAlbumData.year){
    res.status(400).json({ error: "title, artist and year are required." });
  }else{
    Object.assign(albumToUpdate, updatedAlbumData); // Object.assign(destinationObject, sourceObject) --> To copy object data from source object to destination object
  res.status(200).json({ message: "Album data updated successfully.", album: albumToUpdate});
  }
}
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});