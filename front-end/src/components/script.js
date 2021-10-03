import { apiURL } from "../util/apiURL";
const API = apiURL();

export const stripePaymentMethodHandler = async (data, cb) => {
  console.log(data)
  const { price, result } = data;
  if (result.error) {
    cb(result);
  } else {
    const paymentResponse = await stripePayment({
      payment_method_id: result.paymentMethod.id,
      name: result.paymentMethod.billing_details.name,
      email: result.paymentMethod.billing_details.email,
      price: price
    });
    console.log(paymentResponse);
    cb(paymentResponse);
  }
}

const stripePayment = async data => {
  const res = await fetch(`${API}/pay`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  return await res.json();
}