import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { NotificationContext } from "../providers/NotificationContext";
import { db } from "../services/Firebase";

const user = useContext(UserContext);
const { notifications } = useContext(NotificationContext);

export const loadNotifications = async (user) => {
  let notificationsArr = [];
  await db
    .collection("bookings")
    .doc(user.uid)
    .collection("messages")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        notificationsArr.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      notifications.push(...notificationsArr)
    });
};
