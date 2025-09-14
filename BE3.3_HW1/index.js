const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  { id: 3, title: '1984', author: 'George Orwell', year: 1949 }
];

const todos = [
  { id: 1, title: 'Water the plants', day: 'Saturday' },
  { id: 2, title: 'Go for a walk', day: 'Sunday' }
];

app.get("/", (req, res) => {
res.send("Hello, From Express Server.");
});

app.post("/books", (req, res) => {
const newBook = req.body;

if (!newBook.title || !newBook.author || !newBook.year) {
res.status(400).json({ error: "title, author and year are required." });
} else {
books.push(newBook);
res.status(201).json({ message: "book added successfully.", book: newBook });
}
});

app.get("/books", (req, res) => {
res.send(books);
});

app.delete("/books/:id", (req, res) => {
const bookId = req.params.id;

const index = books.findIndex((book) => book.id == bookId);
if(index === -1){
  res.status(404).json({ error: "Book not Found." });
} else {
  books.splice(index,1);
  res.status(200).json({ message: "book deleted successfully."});
}
});

app.post("/books/:id", (req, res) => {
const bookId = parseInt(req.params.id); // converting the string into integer
const updatedBookData = req.body;

const bookToUpdate = books.find((book) => book.id === bookId);
if(!bookToUpdate){
  res.status(404).json({ error: "Book data doesn't exist." });
} else {
  if(!updatedBookData.title || !updatedBookData.author || !updatedBookData.year){
    res.status(400).json({ error: "title, author and year are required." });
  }else{
    Object.assign(bookToUpdate, updatedBookData); // Object.assign(destinationObject, sourceObject) --> To copy object data from source object to destination object
  res.status(200).json({ message: "Book data updated successfully.", book: bookToUpdate});
  }
}
});

app.post("/todos", (req, res) => {
const newTodo = req.body;

if (!newTodo.title || !newTodo.day) {
res.status(400).json({ error: "title and day are required." });
} else {
todos.push(newTodo);
res.status(201).json({ message: "Todo added successfully.", todo: newTodo });
}
});

app.get("/todos", (req, res) => {
res.send(todos);
});

app.delete("/todos/:id", (req, res) => {
const todoId = req.params.id;

const index = todos.findIndex((todo) => todo.id == todoId);
if(index === -1){
  res.status(404).json({ error: "Todo  doesn't exist." });
} else {
  todos.splice(index,1);
  res.status(200).json({ message: "todo deleted successfully."});
}
});

app.post("/todos/:id", (req, res) => {
const todoId = parseInt(req.params.id); // converting the string into integer
const updatedTodoData = req.body;

const todoToUpdate = todos.find((todo) => todo.id === todoId);
if(!todoToUpdate){
  res.status(404).json({ error: "Todo  doesn't exist." });
} else {
  if(!updatedTodoData.title || !updatedTodoData.day){
    res.status(400).json({ error: "title and day are required." });
  }else{
    Object.assign(todoToUpdate, updatedTodoData); // Object.assign(destinationObject, sourceObject) --> To copy object data from source object to destination object
  res.status(200).json({ message: "Todo data updated successfully.", todo: todoToUpdate});
  }
}
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});