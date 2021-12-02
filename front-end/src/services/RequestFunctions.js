import { useContext } from "react";
import { NotificationContext } from "../providers/NotificationContext";
import { db } from "../services/Firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export const LoadNotifications = async (user) => {
  console.log(user.uid)
  // const { notifications } = useContext(NotificationContext);
  // let notificationsArr = [];
  const q = query(collection(db, "bookings"))
  // , where("renter_id", "==", user.uid));
  const querySnapshot = await getDocs(q);

  //77Kkd6UM6ggnTbZxR3NMG3uieP73

  // console.log(querySnapshot.docs)
  // let notificationsArr = 
  console.log("THE CURRENT USER", user.uid)
  let notificationsArr = querySnapshot.docs.filter((doc) => {
    // console.log("RENTER_ID", doc.data().renter_id)
    // console.log(doc.data().renter_id.includes(user.uid))
    return doc.data().renter_id.includes(user.uid);
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    // notificationsArr.push(doc.data())
  });
  // console.log(notificationsArr)
//   await db
//     .collection("bookings")
//     // .doc(user.uid)
//     .where("renter_id", "==", user.uid)
//     .get()
//     .then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         notificationsArr.push({
//           id: doc.id,
//           data: doc.data(),
//         });
//       });
//       // notificationsArr.push(...notificationsArr)
//     });
// debugger
  return notificationsArr;
};
