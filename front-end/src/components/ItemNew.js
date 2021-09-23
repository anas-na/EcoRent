import { useState } from "react";
import axios from "axios";

import { apiUrl } from '../util/apiURL'
const API = apiURL()

const newItem = () => {
    let history = useHistory()
  const [item, setItem] = useState({
    catergory_id: 0,
    name: "",
    description: "",
    price: 0,
    location: "",
  });


  const addItem = async(newItem) => {
    try{
   await axios.post(`${API}/items`, newItem)
    history.push(`/myitems`)
    }
    catch(err){
        console.log(err);
    }
  }

const handleChange = (e) => {
    setItem({...item, [e.target.id]: e.target.value})
}

const handleSubmit = (e) => {
    e.preventDefault()
    addItem(item)
}

  return (
    <section className="formContainer">
      <h1>Add New Item</h1>
      <section className="form">
        <form>
          <label htmlFor="name">Name: </label>
          <input id="name" value={item.name} required />

          <label htmlFor="catergory">Catergorg: </label>
          <select id="catergory" value={item.catergory_id} required />

          <label htmlFor='price'>Price: </label>
          <input type='number'
          value={item.value}
          required />

         <label htmlFor='location'>Location: </label>
         <input type='text'
         value={item.location}
         required />


        </form>
      </section>
    </section>
  );
};
