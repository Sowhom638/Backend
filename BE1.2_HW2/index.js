const { initializeDatabase } = require("./db/db.connect.js");
const fs = require("fs");
const Book = require("./models/book.models.js");

const jsonData = fs.readFileSync("book.json", "utf-8");
const bookData = JSON.parse(jsonData);

async function seedData() {
  await initializeDatabase();
  for (const book of bookData) {
    try {
      const newData = new Book({
        title: book.title,
        author: book.author,
        publishedYear: book.publishedYear,
        genre: book.genre,
        language: book.language,
        country: book.country,
        rating: book.rating,
        summary: book.summary,
        coverImageUrl: book.coverImageUrl,
      });
      await newData.save();
    } catch (error) {
      console.log("Error while seeding data in database", error);
    }
  }
}
seedData();