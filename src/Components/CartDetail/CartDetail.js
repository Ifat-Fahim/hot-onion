import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
import "./CartDetail.css";

const CartDetail = () => {
    const { cart } = useContext(CartContext);

    const totalBill = cart
        .reduce((total, item) => total + Number(item.totalPrice), 0)
        .toFixed(2);
    let deliveryCharge;
    if (cart.length) {
        deliveryCharge = 40;
    } else {
        deliveryCharge = 0;
    }
    const tax = (totalBill * (5 / 100)).toFixed(2);
    const grandTotal = (
        Number(totalBill) +
        Number(deliveryCharge) +
        Number(tax)
    ).toFixed(2);

    return (
        <div className="container cart-detail-container">
            <div>
                <h4>From Alishan Restaurant Sherpur</h4>
                <h5>Arriving in 20-30 minutes</h5>
            </div>
            {cart.map((cartItem) => {
                const {
                    img,
                    title,
                    price,
                    totalPrice,
                    quantity,
                    id,
                } = cartItem;
                return (
                    <div key={id} className="cart-detail alert alert-dark">
                        <div className="img-container">
                            <img src={img} alt={title} />
                        </div>
                        <div className="info">
                            <span>
                                {title.split(" ")[title.split(" ").length - 1]}
                            </span>
                            <span>{price}</span>
                        </div>
                        <div className="cart-btn-group">
                            <button className="btn btn-danger">
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                            <span className="px-3 py-2  quantity">
                                {quantity}
                            </span>
                            <button className="btn btn-danger">
                                <FontAwesomeIcon icon={faMinus} />
                            </button>
                        </div>
                        <p>${totalPrice}</p>
                    </div>
                );
            })}
            {cart.length && (
                <div className="payment-info">
                    <p>Total: $ {totalBill} </p>
                    <p>Delivery Charge: $ {deliveryCharge}</p>
                    <p>Tax: $ {tax} </p>
                    <h5>Grand Total: $ {grandTotal} </h5>
                </div>
            )}
        </div>
    );
};

export default CartDetail;
