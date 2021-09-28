import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiURL } from "../util/apiURL";

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
        debugger;
      } catch (error) {
        console.log(error);
      }
    }
    getItem();
  }, [id]);

  return (
    <div>
        <article>
            <div>
            <p>Category:</p>
            <p>Name: {item.name}</p>
            <p>Description: {item.description}</p>
            <p>Price: ${item.price}</p>
            <p>Location: {item.location}</p>
            </div>
        </article>
    </div>
  )
};

export default ItemDetails;
