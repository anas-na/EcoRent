// components
import BookingForm from "./BookingForm";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiURL } from "../util/apiURL";
import GoogleMap from  "../util/GoogleMap";
const API = apiURL();


const ItemDetails = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getItem = async () => {
      try {
        const res = await axios.get(`${API}/items/${id}`);
        console.log(res);
        setItem(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getItem();
  }, [id]);

  console.log(item)

  return (
    <div>
      {/* <article>
        <div>
          <p>Category:</p>
          <p>Name: {item.name}</p>
          <p>Description: {item.description}</p>
          <p>Price: ${item.price}</p>
          <p>Location: {item.location}</p>
        </div>
      </article> */}
      <GoogleMap />
      <BookingForm item_id={id} owner_id={item.user_id}/>
    </div>
  );
};

export default ItemDetails;
