import React from "react";
import StripeCheckout from "react-stripe-checkout";

import axios from "axios";

//Styling and Animation
import "./stripe-button.styles.scss";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JTFnmC2q6QYDKQCbXYWO9BVVB36HaB5ZTW8IcHQqKZrDnHDN8CrqOBVB9MZh8am82gHDKTrTnXsM8mFgAYex5wq00gGBoBMGb";
  const onToken = (token) => {
    console.log(token);
    const config = {
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    };
    axios(config)
      .then((response) => alert("payment succesful"))
      .catch((error) => {
        console.log("Payment error: " + error);
        alert("There was an issue with your payment. Please make sure you use the provided credit card");
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://icons-for-free.com/iconfiles/png/512/linecolor+version+svg+crown-1319964495098639655.png"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeButton;
