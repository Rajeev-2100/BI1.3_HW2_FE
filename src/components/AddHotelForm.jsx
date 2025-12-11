import { useState } from "react";

const hotelCatergory = [
  'Budget', 'Mid-Range', 'Luxury', 'Boutique', 'Resort','Other'
];

const priceRange = ['$$ (11-30)', '$$$ (31-60)', '$$$$ (61+)', 'Other'];

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
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://bi-1-3-hw-2-be.vercel.app/hotels", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
         throw "Failed to add hotel";
      }

      const data = await response.json();
      console.log("Hotel Added:", data);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>Add New Hotel</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input name="name" value={formData.name} onChange={handleChange} />
        </div><br />

        <div>
          <label>Category:</label><br />
          <select name="category" value={formData.category} onChange={handleChange}>
            <option value="">Select Category</option>
            {hotelCatergory.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div><br />

        <div>
          <label>Location:</label><br />
          <input name="location" value={formData.location} onChange={handleChange} />
        </div><br /><br />

        <div>
          <label>Rating:</label><br />
          <input type="number" name="rating" value={formData.rating} onChange={handleChange} />
        </div><br /><br />

        <div>
          <label>Website:</label><br />
          <input name="website" value={formData.website} onChange={handleChange} />
        </div><br /><br />

        <div>
          <label>Phone Number:</label><br />
          <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        </div><br /><br />

        <div>
          <label>Check-in Time:</label><br />
          <input name="checkInTime" value={formData.checkInTime} onChange={handleChange} />
        </div><br /><br />

        <div>
          <label>Check-out Time:</label><br />
          <input name="checkOutTime" value={formData.checkOutTime} onChange={handleChange} />
        </div><br /><br />

        <div>
          <label>Amenities:</label><br />
          <input name="amenities" value={formData.amenities} onChange={handleChange} />
        </div><br /><br />

        <div>
          <label>Price Range:</label><br />
          <select name="priceRange" value={formData.priceRange} onChange={handleChange}>
            <option value="">Select Price Range</option>
            {priceRange.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div><br /><br />

        <label>
          <input type="checkbox" name="reservationsNeeded" checked={formData.reservationsNeeded} onChange={handleChange} />
          Reservations Needed
        </label> <br /><br />

        <label>
          <input type="checkbox" name="isParkingAvailable" checked={formData.isParkingAvailable} onChange={handleChange} />
          Parking Available
        </label> <br /><br />

        <label>
          <input type="checkbox" name="isWifiAvailable" checked={formData.isWifiAvailable} onChange={handleChange} />
          Wifi Available
        </label> <br /><br />

        <label>
          <input type="checkbox" name="isPoolAvailable" checked={formData.isPoolAvailable} onChange={handleChange} />
          Pool Available
        </label> <br /><br />

        <label>
          <input type="checkbox" name="isSpaAvailable" checked={formData.isSpaAvailable} onChange={handleChange} />
          Spa Available
        </label> <br /><br />

        <label>
          <input type="checkbox" name="isRestaurantAvailable" checked={formData.isRestaurantAvailable} onChange={handleChange} />
          Restaurant Available
        </label> <br /><br />

        <div>
          <label>Photos (URL):</label><br />
          <input name="photos" value={formData.photos} onChange={handleChange} />
        </div> <br /><br />

        <button type="submit">Add Hotel</button>
      </form>
    </>
  ); br
};

export default AddHotelForm;
