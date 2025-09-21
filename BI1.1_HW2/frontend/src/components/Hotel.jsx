import React from "react";
import useFetch from "../../useFetch";

const Hotel = () => {
  const { data, loading, error } = useFetch(
    `http://localhost:3000/hotels`
  );
  console.log(data);

  return data ? (
    <div>
      <h2>All Hotels</h2>
        <ul>
      {data && data.hotel.map(Hotel=>(
        <li key={Hotel._id}>{Hotel.name}</li>
      ))}
      </ul>
    </div>
  ) : (
    <div>{loading && <p>loading...</p>}</div>
  );
};

export default Hotel;
