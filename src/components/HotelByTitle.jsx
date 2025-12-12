import useFetch from "../useFetch";

const HotelByTitle = () => {
  const { data, loading, error } = useFetch(`https://bi-1-3-hw-2-be.vercel.app/hotels`);
  const filteredByTitle = data?.filter((title) => title.name === "Lake View");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading books</p>;
  return (
    <>
      {filteredByTitle?.map((hotel) => (
        <>
          <div key={hotel._id}>
            <h2>{hotel.name}</h2>
            <p>
              <strong>Location: </strong>
              {hotel.location}
            </p>
            <p>
              <strong>Rating: </strong>
              {hotel.rating}
            </p>
            <p>
              <strong>Price Range: </strong>
              {hotel.priceRange}
            </p>
          </div>
        </>
      ))}
    </>
  );
};

export default HotelByTitle;
