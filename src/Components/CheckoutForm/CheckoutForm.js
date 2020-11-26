import React, { useContext, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { CartContext } from "../../Contexts/CartContext";
import "./CheckoutForm.css";

const CheckoutForm = () => {
    const { setHasCheckout } = useContext(CartContext);
    const [formInfo, setFormInfo] = useState({
        name: "",
        address: "",
        phone: "",
        desc: "",
    });
    const handleCheckout = (e) => {
        e.preventDefault();
        setHasCheckout(true);
        setFormInfo({
            name: "",
            address: "",
            phone: "",
            desc: "",
        });
    };
    return (
        <Container>
            <Form
                className="checkout-form"
                style={{ maxWidth: "320px", marginBottom: "50px" }}
                onSubmit={handleCheckout}
            >
                <h2>Delivery Details</h2>
                <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    value={formInfo.name}
                    onChange={(e) =>
                        setFormInfo({ ...formInfo, name: e.target.value })
                    }
                    required
                />{" "}
                <br />
                <Form.Control
                    type="text"
                    placeholder="Enter your address"
                    value={formInfo.address}
                    onChange={(e) =>
                        setFormInfo({ ...formInfo, address: e.target.value })
                    }
                    required
                />{" "}
                <br />
                <Form.Control
                    type="number"
                    placeholder="Enter your Phone number"
                    value={formInfo.phone}
                    onChange={(e) =>
                        setFormInfo({ ...formInfo, phone: e.target.value })
                    }
                    required
                />{" "}
                <br />
                <Form.Control
                    as="textarea"
                    rows={3}
                    type="textarea"
                    placeholder="Add delivery instruction"
                    value={formInfo.desc}
                    onChange={(e) =>
                        setFormInfo({ ...formInfo, desc: e.target.value })
                    }
                    required
                />
                <br />
                <input
                    style={{
                        backgroundColor: "#f91944",
                        border: "0",
                        color: "#fff",
                    }}
                    className="btn btn-block"
                    type="submit"
                    value="Save and Continue"
                />
            </Form>
        </Container>
    );
};

export default CheckoutForm;
