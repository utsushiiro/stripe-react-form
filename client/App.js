import React from "react";
import { render } from "react-dom";
import { StripeProvider } from "react-stripe-elements";
import { Elements } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm";

const App = () => {
  return (
    <StripeProvider apiKey="pk_test_12345">
      <Elements>
        <CheckoutForm />
      </Elements>
    </StripeProvider>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  render(<App />, document.getElementById("app-root"));
});
export default App;
