import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { apiURL } from "../util/apiURL";
const API = apiURL();


const ItemNew = () => {
  let history = useHistory();
  
  const addItem = async (newItem) => {
    try {
      await axios.post(`${API}/items`, newItem);
      history.push(`/myitems`);
    } catch (err) {
      console.log(err);
    }
  };

  const [item, setItem] = useState({
    category_id: 0,
    name: "",
    description: "",
    price: 0.0,
    location: "",
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get(`${API}/categories`);
      setCategories(res.data);
    };
    getCategories();
  }, []);


  const handleChange = (e) => {
    setItem({ ...item, [e.target.id]: e.target.value });
  };
  
  const handleCategory = (e) =>  {
    setItem({ ...item, [e.target.id]: Number(e.target.value) });
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(item);
  };

  const options = categories.map((category) => {
    return (
      <option value={category.id} >
        {category.name}
      </option>
    );
  });

  return (
    <section className="formContainer">
      <h1>Add New Item</h1>
      <section className="form">


        <form onSubmit={handleSubmit}>

          <label htmlFor="name">Name: </label>
          <input type='text' id="name" value={item.name} onChange={handleChange} required />

          <label htmlFor='description'>Description: </label>
          <input type='textarea' id='description' value={item.description} onChange={handleChange} required/>

          <label htmlFor="category">Category: </label>

          <select id="category_id" required onChange={handleCategory}>
            <option disabled defaultValue>
              Select A Category
            </option>
            {options}
          </select>

          <label htmlFor="price">Price: </label>
          <input 
          id='price'
          type='text'
            value={item.price}
            onChange={handleChange}
            required
          />

          <label htmlFor="location">Location: </label>
          <input
          id='location'
          type='text'
            value={item.location}
            onChange={handleChange}
            required
          />

          <input type="submit" />
        </form>
      </section>
    </section>
  );
};

export default ItemNew;
