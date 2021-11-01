import '../styles/ItemList.css'
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL.js";
import { useContext } from "react";
import { UserContext } from "../providers/UserProvider"

const API = apiURL();


const ItemListItem = ({ item }) => {
  const user = useContext(UserContext);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get(`${API}/categories`);
      setCategories(res.data);
    };
    getCategories();
  }, []);
  if (!categories) {
    return <h6>Loading</h6>;
  }

  const category = categories.filter(
    (category) => category.id === item.category_id
  );
  
  return (
    <div className='singleItem' >
      <div className='imageContainer'><img src={item.image} className='itemPhoto'/></div>
      <Link to={`/items/${item.id}`} className='itemName'>{item.name}
      <img src={item.photo} />
      </Link>
      <h4>Category: {category[0].name}</h4>
      <h4>Price: ${item.price}</h4>
      <h4>Location: {item.location}</h4>
    </div>
  );
};

export default ItemListItem;
