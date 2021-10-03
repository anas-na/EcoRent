import { useContext } from "react";
import { NotificationContext } from "../providers/NotificationContext";
import {db} from "../services/Firebase";

export const LoadNotifications = async (user) => {
  const { notifications } = useContext(NotificationContext);
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
