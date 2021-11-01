import React, { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { stripePaymentMethodHandler } from "./script";
import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { db } from "../services/Firebase";
import axios from "axios";
import { apiURL } from "../util/apiURL";
const API = apiURL();

export default function CheckoutForm(props) {
  const { item, totalPrice } = props;
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("")
  // const [selectedItemDetails, setSelectedItemDetails] = useState(null);

  const user = useContext(UserContext);
  const stripe = useStripe();
  const elements = useElements();

  const handleSelectedItem = async (id) => {
    let res = await axios.get(`${API}/items/${id}`);
    // setSelectedItemDetails(res.data);
    return res.data
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);
    setErrorMsg("");
    try {
      let selectedItemDetails = await handleSelectedItem(props.item_id);
      addDoc(collection(db, "bookings"), {
        rentee_id: user.uid,
        item_details: selectedItemDetails,
        renter_id: selectedItemDetails.user_id,
        item_id: props.item_id,
        message: message,
        start_date: props.startDate,
        end_date: props.endDate,
        total_price: totalPrice,
      });
      props.setPaymentCompleted(true);
    } catch (error) {
      console.log(error);
    }

    //   const paymentMethodObj = {
    //     type: 'card',
    //     card: elements.getElement(CardNumberElement),
    //     billing_details: {
    //       name,
    //       email
    //     },
    //   };
    //   const paymentMethodResult = await stripe.createPaymentMethod(paymentMethodObj);

    //   stripePaymentMethodHandler({
    //     result: paymentMethodResult,
    //     price: item.price
    //   }, handleResponse);
  };
  //   callback method to handle the response
  // const handleResponse = (response) => {
  //   setLoading(false);
  //   if (response.error) {
  //     setErrorMsg("error happening");
  //     return;
  //   }
  //   // props.setPaymentCompleted(response.success ? true : false);
  // };

  return (
      <section className="checkoutContainer">
        <h4 className="d-flex justify-content-between align-items-center mb-3"></h4>
        <h6>Pay with card</h6>
        <form onSubmit={handleSubmit}>
          <h1>Send Message To Renter</h1>
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
          <div className="row">
            <label htmlFor="cc-name">Name on card</label>
            <div className="col-md-6 mb-3">
              <input
                id="cc-name"
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <label htmlFor="cc-email">Email</label>
            <div className="col-md-6 mb-3">
              <input
                id="cc-email"
                type="text"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <label htmlFor="cc-number">Card Number</label>
            <div className="col-md-12 mb-3">
              <CardNumberElement id="cc-number" className="form-control" />
            </div>
          </div>

          <label htmlFor="expiry">Expiration Date</label>
          <div className="col-md-6 mb-3">
            <CardExpiryElement id="expiry" className="form-control" />

            <label htmlFor="cvc">CVC</label>
            <div className="col-md-6 mb-3">
              <CardCvcElement id="cvc" className="form-control" />
            </div>
          </div>

          <hr className="mb-4" />
          <button
            className="btn btn-dark w-100 button1"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <div
                className="spinner-border spinner-border-sm text-light"
                role="status"
              ></div>
            ) : (
              `$${totalPrice}`
            )}
          </button>
          {errorMsg && <div className="text-danger mt-2">{errorMsg}</div>}
        </form>
      </section>
  );
}
