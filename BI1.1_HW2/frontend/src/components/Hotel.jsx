import React, {useState} from "react";
import useFetch from "../../useFetch";

const Hotel = () => {
    const [successMessage, setSuccessMessage] = useState("");
  const { data, loading, error } = useFetch(
    `http://localhost:3000/hotels`
  );
  const handleDelete = async (hotelId) => {
    try {
      const response = await fetch(`http://localhost:3000/hotels/${hotelId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        const data = await response.json();
        if (data) {
          setSuccessMessage("Hotel deleted successfully");

          window.location.reload();
        }
      } else {
        throw "Failed to delete hotel";
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return data ? (
    <div>
      <h2>All Hotels</h2>
        <ul>
      {data && data.hotel.map(Hotel=>(
        <li key={Hotel._id}>
          {Hotel.name} <button onClick={() => handleDelete(Hotel._id)}>Delete</button>
        </li>
      ))}
      </ul>
      {successMessage != "" && <p>{successMessage}</p>}
    </div>
  ) : (
    <div>{loading && <p>loading...</p>}</div>
  );
};

export default Hotel;
