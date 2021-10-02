// Demi


import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

import { apiURL } from '../util/apiURL';
const API = apiURL();




function ItemEdit() {
  let { index } = useParams();
  let history = useHistory();

  const [item, setItem] = useState({
    catergory_id: 0,
    name: "",
    description: "",
    price: 0,
    location: "",
  });

  const updateItem = async (updatedItem, index) => {
    try {
      await axios.put(`${API}/items/${index}`, updatedItem);
      const newItems = [...item];
      newItems[index] = updatedItem;
      setItem(newItems);
    } catch (err) {
      console.log(err);
    }
  };

  const handleTextChange = (event) => {
    setItem({ ...item, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setItem({ ...item, isFavorite: !item.isFavorite });
  };

  const fetchItem = async () => {
    try {
      const res = await axios.get(`${API}/bookmarks/${index}`);
      setItem(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchItem();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateItem(item, index);
    history.push(`/items/${index}`);
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={item.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Website"
          required
        />
     <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={item.description}
          onChange={handleTextChange}
          placeholder="Describe why you bookmarked this site"
        />
        
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="text"
          name="price"
          value={item.price}
          placeholder="$X.XX per day/hour"
          onChange={handleTextChange}
        />
        <label htmlFor="location">Favorite:</label>
        <input
          id="location"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={item.isFavorite}
        />
        
        <br />

        <input type="submit" />
      </form>
      <Link to={`/bookmarks/${index}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default ItemEdit;
