import '../styles/ItemList.css'
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL.js";
const API = apiURL();

const ItemListItem = ({ item }) => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get(`${API}/categories`);
      setCategories(res.data);
    };
    getCategories();
  }, []);
  if (!categories) {
    return <p>Loading</p>;
  }

  const category = categories.filter(
    (category) => category.id === item.category_id
  );
  return (

      
    <div className='singleItem'>
      <Link to={`/items/${item.id}`} className='itemName'>{item.name}</Link>
      <p>Category: {category[0].name}</p>
      <p>Price: ${item.price}</p>
      <p>Location: {item.location}</p>
      <img src={item.image} />
   

    </div>
  );
};

export default ItemListItem;
