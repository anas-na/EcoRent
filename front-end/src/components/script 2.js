import { apiURL } from "../util/apiURL";
const API = apiURL();

export const stripePaymentMethodHandler = async (data) => {
  console.log(data)
  const { price, result } = data;
  if (result.error) {
    // show error in payment form
    return result
  } else {
    const paymentResponse = await stripePayment({
      payment_method_id: result.paymentMethod.id,
      name: result.paymentMethod.billing_details.name,
      email: result.paymentMethod.billing_details.email,
      price: price
    });
    console.log(paymentResponse);
    return paymentResponse
    // cb(paymentResponse);
  }
}

// place backend API call for payment
const stripePayment = async data => {
  const res = await fetch(`${API}/pay`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  return await res.json();
}