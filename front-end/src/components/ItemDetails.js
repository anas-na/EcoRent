import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiURL } from "../util/apiURL";
import GoogleMap from  "../util/GoogleMap";
const API = apiURL();

const ItemDetails = () => {
  const [item, setItem] = useState({});
  const [coordinates, setCoordinates] = useState({});
  const { id } = useParams();

  console.log(coordinates)

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
    geoCode();
  }, [id]);

  const geoCode = async () => {
    const location = item.location;
    try {
      const res = axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address: location,
          key: process.env.REACT_APP_GOOGLE_KEY
        }
      })
      console.log("GEOCODE RES", res);
      setCoordinates(res.data.results[0].geometry.location);
    } catch (error) {
      console.log(error);
    }
  }


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
      <GoogleMap coordinates={coordinates}/>
    </div>
  );
};

export default ItemDetails;
