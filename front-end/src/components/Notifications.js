import {useEffect, useContext, useState} from "react"
import { UserContext } from "../providers/UserProvider";
import { NotificationContext } from "../providers/NotificationContext";
import { LoadNotifications } from "../services/RequestFunctions";
// components 
import NotificationCard from "./NotificationCard";

const Notifications = () => {
    const user = useContext(UserContext)
    // const { notifications } = useContext(NotificationContext)
    const [messages, setMessages] = useState([])

    // iterate through the messages and create cards for each message
    // useEffect(() => {
    //     if (user) {
    //         LoadNotifications(user)
    //         setMessages(notifications)
    //     }
    // }, [user])

    useEffect(() => {
        (async () => {
            if (user) {
                let notifications = await LoadNotifications(user)
                setMessages(notifications)
            }
        })()
    }, [user]);

    let notificationCards = messages.map((message) => {
        return <NotificationCard message={message} key={message.id}/>
    })
// console.log(messages)
    return (
        <div>
            {notificationCards}
        </div>
    )
}


export default Notifications