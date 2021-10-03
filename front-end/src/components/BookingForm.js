import { db } from "../services/Firebase"
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../providers/UserProvider";
import { apiURL } from "../util/apiURL";
import axios from "axios"

const BookingForm = ({ owner_id, item_id }) => {
    const user = useContext(UserContext)
    const API = apiURL()
    const [message, setMessage] = useState("")
    const [selectedItemDetails, setSelectedItemDetails] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        await db
        .collection("bookings")
        .doc(owner_id)
        .collection("messages")
        .add({
            user_id: user.uid,
            item_details: selectedItemDetails,
            item_id: item_id,
            message: message
        })
    }

    useEffect(() => {
        const handleSelectedItem = async (id) => {
            let res = axios.get(`${API}/items/${id}`)
            setSelectedItemDetails(res.data)
        }
        handleSelectedItem(item_id)
    }, [API, item_id])

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
        </form>
    )
}

export default BookingForm;