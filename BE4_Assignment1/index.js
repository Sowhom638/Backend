const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());

const { initializeDatabase } = require("./db/db.connect");
const Book = require("./models/book.models")

initializeDatabase();


async function createBook(newBook) {
  try {
    const book = new Book(newBook)
    const savedBook = await book.save()
    return savedBook;
  } catch (error) {
    throw error
  }
}
app.post("/books", async (req, res) => {
    try {
        const savedBook = await createBook(req.body)
        res.status(201).json({ message: "Book added successfully.", book: savedBook })
    } catch (error) {
        res.status(500).json({ error })
    }
})

async function readBookByTitle(BookTitle){
  try {
    const book = await Book.findOne({title: BookTitle});
    return book;
    
  } catch (error) {
    throw error;
  }
}
// readBookByTitle("Lagaan");
app.get("/books/:title",async (req, res)=>{
  try {
    const book = await readBookByTitle(req.params.title);
  if(book.length != 0){
    res.status(200).json({ message: "Book data founded successfully.",book});
  }else{
res.status(404).json({ error: "Book not Found." });
  }
  } catch (error) {
    res.status(400).json({ error});
  }
})

async function readAllBooks(){
  try {
    const book = await Book.find();
    return book;
    
  } catch (error) {
    throw error;
  }
}
// readAllBooks();
app.get("/books",async (req, res)=>{
  try {
    const book = await readAllBooks();
  if(book.length != 0){
    res.status(200).json({ message: "Book data founded successfully.",book});
  }else{
res.status(404).json({ error: "Book not Found." });
  }
  } catch (error) {
    res.status(400).json({ error });
  }
})

async function readBooksByAuthor(AuthorName){
  try {
    const book = await Book.find({author: AuthorName});
    return book;
    
  } catch (error) {
    throw error;
  }
}
app.get("/books/authors/:author",async (req, res)=>{
  try {
    const book = await readBooksByAuthor(req.params.author);
  if(book.length != 0){
    res.status(200).json({ message: "Book data founded successfully.", book});
  }else{
res.status(404).json({ error: "Book not Found." });
  }
  } catch (error) {
    res.status(400).json({ error });
  }
})

async function readBooksByGenre(){
  try {
    const book = await Book.find({genre: 'Business'});
    return book;
    
  } catch (error) {
    throw error;
  }
}
app.get("/books/genres/business",async (req, res)=>{
  try {
    const book = await readBooksByGenre();
  if(book.length != 0){
    res.status(200).json({ message: "Book data founded successfully.", book});
  }else{
res.status(404).json({ error: "Book not Found." });
  }
  } catch (error) {
    res.status(400).json({ error });
  }
})
async function readBooksByReleaseyear(){
  try {
    const book = await Book.find({publishedYear: 2012});
    return book;
    
  } catch (error) {
    throw error;
  }
}
app.get("/books/publishedYear/2012",async (req, res)=>{
  try {
    const book = await readBooksByReleaseyear();
  if(book.length != 0){
    res.status(200).json({ message: "Book data founded successfully.", book});
  }else{
res.status(404).json({ error: "Book not Found." });
  }
  } catch (error) {
    res.status(400).json({ error });
  }
})

async function updateBook(bookId, dataToUpdate) {
    try {
        const updatedBook = await Book.findByIdAndUpdate(bookId, dataToUpdate, {
            new: true,
        });
        return updatedBook;
    } catch (error) {
        console.log("Error in updating Book rating", error);
    }
}
app.post("/books/:bookId", async (req, res) => {
    try {
        const updatedBook = await updateBook(req.params.bookId, req.body);
        if (updatedBook) {
            res.status(200).json({ message: "Book updated successfully.", updatedBook });
        } else {
            res.status(404).json({ error: "Book doesn't exist." });
        }
    } catch (error) {
        res.status(500).json({ error: "failed to update Book" });
    }
});
async function updateBookBasedOnPublishedYear(publishedyear, dataToUpdate) {
    try {
        const updatedBook = await Book.findOneAndUpdate({publishedYear: publishedyear}, dataToUpdate, {
            new: true,
        });
        return updatedBook;
    } catch (error) {
        console.log("Error in updating Book rating", error);
    }
}
app.post("/books/:publishedyear", async (req, res) => {
    try {
        const updatedBook = await updateBookBasedOnPublishedYear(req.params.publishedyear, req.body);
        if (updatedBook) {
            res.status(200).json({ message: "Book updated successfully.", updatedBook });
        } else {
            res.status(404).json({ error: "Book doesn't exist." });
        }
    } catch (error) {
        res.status(500).json({ error: "failed to update Book" });
    }
});

async function deleteBook(BookId) {
    try {
        const deletedBook = await Book.findByIdAndDelete(BookId);
        return deletedBook;
    } catch (error) {
        console.log(error);
    }
}
app.delete("/books/:bookId", async (req, res) => {
    try {
        const deletedBook = await deleteBook(req.params.bookId);
        if (deletedBook) {
            res.status(200).json({ message: "Book deleted successfully.", deletedBook });
        }else{
          res.status(404).json({ error: "Book not found." });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to delete Book" });
    }
});


const PORT = process.env.PORT;
app.listen(PORT, ()=>{
  console.log(`server is running on port ${PORT}`);
})