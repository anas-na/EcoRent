// components
import BookingForm from "./BookingForm";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiURL } from "../util/apiURL";
import GoogleMap from  "./GoogleMap";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import DayPicker from "./DayPicker";

const API = apiURL();
const stripePromise = loadStripe(
  "pk_test_51JTu2IHSic55neYrUSAPj8GK2fh3EzUPuYv4hmmyV6k2eIHXBHyj8s9bgsc9KwoUfH6zvPXaYPANVWLwtIBoEFfZ00Q2Gew3cj"
);

const successMessage = () => {
  return (
    <div className="success-msg">
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        className="bi bi-check2"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
        />
      </svg>
      <div className="title">Payment Successful</div>
    </div>
  );
};

const ItemDetails = () => {
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [item, setItem] = useState({});
  const [coordinates, setCoordinates] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const { id } = useParams();
  
  const getItem = async () => {
    try {
      const res = await axios.get(`${API}/items/${id}`);
      setItem(res.data);
      return res.data;
    } catch (error) {
      throw error;
    }
  };
  
  useEffect(() => {
    getItem().then((res) => {
      geoCode(res);
    }).catch((error) => {
      alert(error.message);
    });
  }, []);

  const geoCode = async (location) => {
    try {
      const res = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address: location.location,
          key: process.env.REACT_APP_GOOGLE_KEY
        }
      });
      setCoordinates(res.data.results[0].geometry.location);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="detailContainer">
      <div className="details">
        <img src={item.photo} />
        <p>Name: {item.name}</p>
        <p>Category:</p>
        <p>Description: {item.description}</p>
        <p>Price: ${item.price}/Day</p>
        <p>Location: {item.location}</p>
      </div>

      <div>
        <GoogleMap coordinates={coordinates} className="mapsContainer" item={item}/>
      </div>
      <DayPicker  startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate} />
      <BookingForm item_id={id} owner_id={item.user_id}/>
      <div className="payementContainer">
        {" "}
        {paymentCompleted ? (
          successMessage()
        ) : (
          <Elements stripe={stripePromise}>
            <CheckoutForm
              item={item}
              setPaymentCompleted={setPaymentCompleted}
              className="paymentContainer"
            />
          </Elements>
        )}
      </div>
    </div>
  );
};

export default ItemDetails;
