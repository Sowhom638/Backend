import React from "react";
import useFetch from "../../useFetch";

const HotelTitle = ({ name }) => {
  const { data, loading, error } = useFetch(
    `http://localhost:3000/hotels/${name}`
  );
  console.log(data);

  return data ? (
    <div>
      <h2>{data.hotel.name}</h2>
      <p><b>Location:</b> {data.hotel.location}</p>
      <p><b>Rating:</b> {data.hotel.rating}</p>
      <p><b>Price Range:</b> {data.hotel.priceRange}</p>
    </div>
  ) : (
    <div>{loading && <p>loading...</p>}</div>
  );
};

export default HotelTitle;
