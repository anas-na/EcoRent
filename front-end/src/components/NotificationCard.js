import { db } from "../services/Firebase";
import { UserContext } from "../providers/UserProvider";
import { useContext } from "react";
import { useHistory } from "react-router-dom"
import { apiURL } from "../util/apiURL";

// const Msg = ({ closeToast, toastProps }) => {
//     console.log("toast request", toastProps.request)
//     return <div>
//     {toastProps.request.message}
//     <button onClick={() => history.push("/myprofile", {request: toastProps.request})}>You Got Notified!</button>
//     {/* <button onClick={closeToast}>Close</button> */}
//   </div>
// };


const NotificationCard = ({ message }) => {
  // const user = useContext(UserContext)
  // const API = apiURL()
  // what is message?
  console.log("Message:", message.data().message);

  
  // console.log(test);

  // accept logic is happening here
  // if accepted, update item in database to set owner_id to requestee
  // remove card

  // const handleClick =  async () => {
  //         // fire update request to database
  //         // let res = await axios.put(`${API}/items/`)
  //         // update item in database to set owner_id to requestee
  //         await db
  //         .collection("bookings")
  //         .doc(user.uid)
  //         .collection("messages")
  //         .delete()
  //         .then(() => {
  //             console.log("Document successfully deleted!")
  //         })
  //         .catch((error) => {
  //             console.error("Error removing documents: ", error)
  //         })
  //         window.location.reload()
  // }
  let history = useHistory();

  const handleNotification = () => {
      history.push({
          pathname:"/myprofile",
          state: {request: message.data()}})
  };

  return (
    <div>
      <button onClick={handleNotification}>Notification!</button>
    </div>
  );
};

export default NotificationCard;
