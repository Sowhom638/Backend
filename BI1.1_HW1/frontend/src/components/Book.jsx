import React, { useState } from "react";
import useFetch from "../../useFetch";

const Book = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { data, loading, error } = useFetch(`http://localhost:3000/books`);
  // console.log(data);
  const handleDelete = async (bookId) => {
    try {
      const response = await fetch(`http://localhost:3000/books/${bookId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        const data = await response.json();
        if (data) {
          setSuccessMessage("Book deleted successfully");

          window.location.reload();
        }
      } else {
        throw "Failed to delete book";
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  return data ? (
    <div>
      <h2>All Books</h2>
      <ul>
        {data &&
          data.book.map((book) => (
            <li key={book._id}>
              {book.title}{" "}
              <button onClick={() => handleDelete(book._id)}>Delete</button>
            </li>
          ))}
      </ul>
      {successMessage != "" && <p>{successMessage}</p>}
    </div>
  ) : (
    <div>{loading && <p>loading...</p>}</div>
  );
};

export default Book;
