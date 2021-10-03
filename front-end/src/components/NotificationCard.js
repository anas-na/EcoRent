import { db } from "../services/Firebase"
import { UserContext } from "../providers/UserProvider";
import { useContext } from "react"
import { apiURL } from "../util/apiURL";

const NotificationCard = ({ message }) => {
    const user = useContext(UserContext) 
    const API = apiURL()
    // what is message?
    console.log("Message:", message)

    // accept logic is happening here
    // if accepted, update item in database to set owner_id to requestee
    // remove card

    const handleClick =  async () => {
            // fire update request to database
            // let res = await axios.put(`${API}/items/`)
            // update item in database to set owner_id to requestee
            await db
            .collection("bookings")
            .doc(user.uid)
            .collection("messages")
            .delete()
            .then(() => {
                console.log("Document successfully deleted!")
            })
            .catch((error) => {
                console.error("Error removing documents: ", error)
            })
            window.location.reload()
    }

    return (
        <div>
            HELLO WORLD
        </div>
    )
}

export default NotificationCard;