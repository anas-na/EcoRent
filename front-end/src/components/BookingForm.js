import { useContext, useState, useEffect } from "react";
import { UserContext } from "../providers/UserProvider";
import { apiURL } from "../util/apiURL";
import { db } from "../services/Firebase"
import { collection, addDoc } from "firebase/firestore"; 
import axios from "axios"

const BookingForm = ({ owner_id, item_id}) => {
    const [message, setMessage] = useState("")
    // Create a slice of state that keeps track of the date range
    const [dateRange, setDateRange] = useState(null)
    const [totalPrice, setTotalPrice] = useState(null)
    const [selectedItemDetails, setSelectedItemDetails] = useState(null)
    const user = useContext(UserContext)
    const API = apiURL()

    // Total estimate price
    // const {price} = selectedItemDetails
    // const total = daterange.length * price

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            addDoc(collection(db, "bookings"), {
                user_id: user.uid,
                item_details: selectedItemDetails,
                item_id: item_id,
                message: message,
                date_range: dateRange,
                total_price: totalPrice
            })
        } catch (error) {
            console.log(error)
        }      
    }

    useEffect(() => {
        const handleSelectedItem = async (id) => {
            let res = await axios.get(`${API}/items/${id}`)
            setSelectedItemDetails(res.data)
        }
        handleSelectedItem(item_id)
    }, [API, item_id])

    return (
        <form onSubmit={handleSubmit}>
            <h1> Rent Form </h1>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
            {/* // Date range stuff is here
            // Render Total Price */}
            <button type="submit">Submit</button>
        </form>
    )
}

export default BookingForm;