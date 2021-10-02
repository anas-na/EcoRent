import {useEffect, useState} from "react"
import { db } from "../services/Firebase"

// const BookingForm = () => {

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         await db
//         .collection("bookings")
//         .
//         // check to see if there's a document that exists already with this user id
//         // if it doesnt:
//         // create a document in bookings with the user id
//         // create a collection in that document called messages
//         // push data as new document to newly created collection

//         // if it does:
//         // grab bookings collection
//         // grab document by id
//         // grab that user's messages folder
//         // add new document
//     }

//     return (
//         <form>

//         </form>
//     )
// }