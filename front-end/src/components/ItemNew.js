import '../styles/ItemNew.css'
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { apiURL } from "../util/apiURL";
import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { storage } from "../services/Firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

  const API = apiURL();
  const ItemNew = () => {
  const user = useContext(UserContext);
  let history = useHistory();

  const [image, setImage] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState("");


  const addItem = async (newItem) => {
    try {
      await axios.post(`${API}/items`, newItem);
      history.push(`/items`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleImage = (event) => {
    const img = event.target.files[0];
    setImage((image) => img);
  };



  const [item, setItem] = useState({
    category_id: 0,
    photo: "",
    name: "",
    description: "",
    price: 0.0,
    location: "",
    photo:'',
    user_id: ""
  });
  
  const handleUpload = (event) => {
    event.preventDefault();
    const storage = getStorage();
    const storageRef = ref(storage, "items/" + image.name);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapShot) => {
        console.log(snapShot);
      },
      (err) => {
        console.log(err);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setImageAsUrl(downloadURL)
          setItem({ ...item, photo: downloadURL })
        });
      }
    );
   
  };


  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get(`${API}/categories`);
      setCategories(res.data);
      
    };
    getCategories();
    setItem({ ...item, user_id: user.uid })
  }, []);

  const handleChange = (e) => {
    setItem({ ...item, [e.target.id]: e.target.value });
  };

  const handleCategory = (e) => {
    setItem({ ...item, [e.target.id]: Number(e.target.value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(item);
  };

  const options = categories.map((category) => {
    return <option value={category.id}>{category.name}</option>;
  });


  const imagePlaceHolder = (img) => {
    if(imageAsUrl === ''){
      return <div></div>
    } else {
      return(
        <img src={imageAsUrl} alt="newItemImg" />
        )
      }
    }

  return (
    <section className="formContainer">
      <h1 className="formTitle">List An Item</h1>

      <section className="newItemForm">
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <label htmlFor="name">Name </label>
            <input
              type="text"
              id="name"
              value={item.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="description">Description </label>
            <input
              type="textarea"
              id="description"
              value={item.description}
              onChange={handleChange}
              required
            />

            <label htmlFor="category">Category </label>

            <select id="category_id" required onChange={handleCategory}>
              <option selected='selected'>
                Select A Category
              </option>
              {options}
            </select>

            <label htmlFor="price">Price </label>
            <input
              id="price"
              type="text"
              value={item.price}
              onChange={handleChange}
              required
            />

            <label htmlFor="location">Location </label>
            <input
              id="location"
              type="text"
              value={item.location}
              onChange={handleChange}
              required
            />
            <div className='imageUpload'>
            <input className="photo" type="file" onChange={handleImage}/>

            <button onClick={handleUpload} className='button1'>Upload</button>
            {imagePlaceHolder()}
            </div>
          </div>
          <input type="submit" className="button" />
        </form>
      </section>
    </section>
  );
};

export default ItemNew;
