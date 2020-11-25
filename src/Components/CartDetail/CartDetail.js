import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../Contexts/CartContext";
import "./CartDetail.css";

const CartDetail = () => {
    const { cart, increaseQuantity, decreaseQuantity, removeItem } = useContext(
        CartContext
    );

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
            {cart.length > 0 ? (
                <div style={{ textAlign: "center" }}>
                    <h4>From Alishan Restaurant Sherpur</h4>
                    <h5>Arriving in 20-30 minutes</h5>
                </div>
            ) : (
                <div style={{ textAlign: "center" }}>
                    <h2>Your cart is empty</h2>
                    <Link to="/">
                        <button className="btn btn-primary mt-2">
                            Checkout our food
                        </button>
                    </Link>
                </div>
            )}
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
                            <span>Price: ${price}</span>
                        </div>
                        <div className="cart-btn-group">
                            <button
                                onClick={() => increaseQuantity(id)}
                                className="btn btn-danger"
                            >
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                            <span className="px-3 py-2  quantity">
                                {quantity}
                            </span>
                            <button
                                onClick={() => decreaseQuantity(id)}
                                className="btn btn-danger"
                            >
                                <FontAwesomeIcon icon={faMinus} />
                            </button>
                        </div>
                        <p>${totalPrice}</p>

                        <button
                            onClick={() => removeItem(id)}
                            className="btn btn-danger"
                        >
                            Remove
                        </button>
                    </div>
                );
            })}
            {cart.length && (
                <Card style={{ width: "18rem", marginBottom: "50px" }}>
                    <Card.Body>
                        <Card.Title>
                            <h2>Order Details</h2>
                        </Card.Title>
                        <Card.Text>Total: ${totalBill}</Card.Text>
                        <Card.Text>
                            Delivery Charge: ${deliveryCharge}
                        </Card.Text>
                        <Card.Text>Tax: ${tax}</Card.Text>
                        <Card.Text>
                            <h5>Grand Total: ${grandTotal} </h5>
                        </Card.Text>
                    </Card.Body>
                </Card>
            )}
        </div>
    );
};

export default CartDetail;
