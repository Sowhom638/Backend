import React from "react";
import useFetch from "../../useFetch";

const Book = () => {
  const { data, loading, error } = useFetch(
    `http://localhost:3000/books`
  );
  console.log(data);

  return data ? (
    <div>
        <ul>
      {data && data.book.map(book=>(
        <li key={book._id}>{book.title}</li>
      ))}
      </ul>
    </div>
  ) : (
    <div>{loading && <p>loading...</p>}</div>
  );
};

export default Book;
