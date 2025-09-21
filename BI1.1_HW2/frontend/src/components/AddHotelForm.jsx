import React, {useState} from "react";

const AddHotelForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    location: "",
    rating: "",
    website: "",
    phoneNumber: "",
    checkInTime: "",
    checkOutTime: "",
    amenities: "",
    priceRange: "",
    reservationsNeeded: false,
    isParkingAvailable: false,
    isWifiAvailable: false,
    isPoolAvailable: false,
    isSpaAvailable: false,
    isRestaurantAvailable: false,
    photos: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "rating" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/hotels", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw "Failed to add hotel";
      }

      const data = await response.json();
      console.log("Added hotel data:", data);


      console.log("Hotel added successfully!");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Add Hotel</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} required onChange={handleChange} />
        </div>

        <div>
          <label>Category:</label>
          <select name="category" required onChange={handleChange}>
            <option value="">-- Select Category --</option>
            <option value="Budget">Budget</option>
            <option value="Mid-Range">Mid-Range</option>
            <option value="Luxury">Luxury</option>
            <option value="Boutique">Boutique</option>
            <option value="Resort">Resort</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            required
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Rating (0-5):</label>
          <input
            type="number"
            name="rating"
            min="0"
            max="5"
            value={formData.rating}
            step="0.1"
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Website:</label>
          <input
            type="text"
            value={formData.website}
            name="website"
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            value={formData.phoneNumber}
            name="phoneNumber"
            required
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Check-In Time:</label>
          <input
            type="text"
            value={formData.checkInTime}
            name="checkInTime"
            required
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Check-Out Time:</label>
          <input
            type="text"
            value={formData.checkOutTime}
            name="checkOutTime"
            required
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Amenities (comma-separated):</label>
          <input
            type="text"
            value={formData.amenities}
            name="amenities"
            onChange={handleChange}
            placeholder="e.g. Pool, WiFi, Parking"
          />
        </div>

        <div>
          <label>Price Range:</label>
          <select name="priceRange" onChange={handleChange}>
            <option value="">-- Select Price Range --</option>
            <option value="$$ (11-30)">$$ (11-30)</option>
            <option value="$$$ (31-60)">$$$ (31-60)</option>
            <option value="$$$$ (61+)">$$$$ (61+)</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="reservationsNeeded"
              onChange={handleChange}
              value={formData.reservationsNeeded}
            />
            Reservations Needed
          </label>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="isParkingAvailable"
              onChange={handleChange}
              value={formData.isParkingAvailable}
            />
            Parking Available
          </label>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="isWifiAvailable"
              onChange={handleChange}
              value={formData.isWifiAvailable}
            />
            WiFi Available
          </label>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="isPoolAvailable"
              onChange={handleChange}
              value={formData.isPoolAvailable}
            />
            Pool Available
          </label>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="isSpaAvailable"
              onChange={handleChange}
              value={formData.isSpaAvailable}
            />
            Spa Available
          </label>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="isRestaurantAvailable"
              onChange={handleChange}
              value={formData.isRestaurantAvailable}
            />
            Restaurant Available
          </label>
        </div>

        <div>
          <label>Photos (comma-separated URLs):</label>
          <input
            type="text"
            name="photos"
            value={formData.photos}
            onChange={handleChange}
            placeholder="https://example.com/photo1.jpg, ..."
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddHotelForm;
