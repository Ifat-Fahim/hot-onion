import React from "react";
import { Button, Card } from "react-bootstrap";

const OrderComplete = () => {
    return (
        <Card style={{ width: "18rem", margin: " 100px auto" }}>
            <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + `/images/image/Group 1151.png`}
            />
            <Card.Text>
                <p style={{ marginBottom: "0" }}>Your location</p>
                <p style={{ marginBottom: "0" }}>location</p>
            </Card.Text>
            <Card.Text>
                <p style={{ marginBottom: "0" }}>Shop Address</p>
                <p style={{ marginBottom: "0" }}>ABC restaurant Sherpur</p>
            </Card.Text>
            <Card.Text>
                <h3 style={{ fontSize: "20px" }}>
                    Estimated Delivery time: 30 minutes
                </h3>
            </Card.Text>
            <Button className="btn btn-danger">Contact</Button>
        </Card>
    );
};

export default OrderComplete;
