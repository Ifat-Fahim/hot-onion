import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./CheckoutForm.css";

const CheckoutForm = () => {
    return (
        <Container>
            <Form
                className="checkout-form"
                style={{ maxWidth: "320px", marginBottom: "50px" }}
            >
                <h2>Delivery Details</h2>
                <Form.Control type="text" placeholder="Enter your name" />{" "}
                <br />
                <Form.Control
                    type="text"
                    placeholder="Enter your address"
                />{" "}
                <br />
                <Form.Control
                    type="text"
                    placeholder="Enter your Phone number"
                />{" "}
                <br />
                <Form.Control
                    as="textarea"
                    rows={3}
                    type="textarea"
                    placeholder="Add delivery instruction"
                />
                <br />
                <Button
                    style={{ backgroundColor: "#f91944", border: "0" }}
                    className="btn btn-block"
                >
                    Save and Continue
                </Button>
            </Form>
        </Container>
    );
};

export default CheckoutForm;
