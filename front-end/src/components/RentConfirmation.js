import {useEffect, useContext, useState} from "react"
import { UserContext } from "../providers/UserProvider";
import { NotificationContext } from "../providers/NotificationContext";
import { loadNotifications } from "../services/RequestFunctions";

// fetched current user from Context
const user = useContext(UserContext)
const { notifications } = useContext(NotificationContext)

// Functional component called RentConfirmation
const RentConfirmation = () => {
    // initializa an empty state container as an array to store all of your notifications 
    const [messages, setMessages] = useState([])

    // as soon as this page loads, fire a useEffect
    // if there is a current user logged in, fetch their notifications
    useEffect(() => {
        if (user) {
            loadNotifications(user)
            setMessages(notifications)
        }
    }, [user])

    // iterate through the messages and render the data cards below 
    return (
        <div>
        </div>
    )
}


export default RentConfirmation