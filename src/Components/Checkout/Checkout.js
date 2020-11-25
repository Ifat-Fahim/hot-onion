import React from "react";
import CartDetail from "../CartDetail/CartDetail";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import "./Checkout.css";

const Checkout = () => {
    return (
        <div className="checkout-container">
            <CheckoutForm />
            <CartDetail />
        </div>
    );
};

export default Checkout;
