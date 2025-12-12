import { useState } from "react";
import useFetch from "../useFetch"

const Hotel = () => {
    const [successMessage, setSuccessMessage] = useState('')
    const { data, loading, error } = useFetch('https://bi-1-3-hw-2-be.vercel.app/hotels')
    console.log(data);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading books</p>;

    const handleDelete = async (hotelId) => {
        try {
            const response = await fetch(`https://bi-1-3-hw-2-be.vercel.app/hotels/${hotelId}`, {
                method: 'DELETE'
            })

            if(!response.ok){
                throw error
            }

            const data = await response.json()
            if(data){
                console.log('Deleted Data: ', data)
                setSuccessMessage('Hotel Id deleted Successfully')
                // window.location.reload()
            }
        } catch (error) {
            throw error
        }
    }
    
    return (
        <>
            <h3>All Hotels</h3>
            <ul style={{ marginLeft: "10px" }}>
                {data?.map(hotel => (
                    <li key={hotel._id}>
                        {hotel.name} <button onClick={() => handleDelete(hotel._id)}>Delete</button>
                    </li>
                ))}
            </ul>  
            <p>{successMessage}</p>
        </>
    )
}

export default Hotel 