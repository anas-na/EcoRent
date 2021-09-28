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
        debugger;
        setItem(res.data);
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
                In Item Detail Page
                {item.name}
            </div>
        </article>
    </div>
  )
};

export default ItemDetails;
