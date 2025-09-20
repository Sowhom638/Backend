import React from "react";
import useFetch from "../../useFetch";

const MovieTitle = ({ title }) => {
  const { data, loading, error } = useFetch(
    `http://localhost:3000/movies/${title}`
  );
  console.log(data);

  return data ? (
    <div>
      <h2>{data.movie.title}</h2>
      <p>Director: {data.movie.director}</p>
      <p>Country: {data.movie.country}</p>
      <p>Release Year: {data.movie.releaseyear}</p>
      <p>Rating: {data.movie.rating}</p>
      <p>Actors: {data.movie.actors.join(", ")}</p>
      <p>Awards: {data.movie.awards}</p>
      <p>Plot: {data.movie.plot}</p>
      <img src={data.movie.posterUrl} alt="Poster Image"/>
    </div>
  ) : (
    <div>{loading && <p>loading...</p>}</div>
  );
};

export default MovieTitle;
