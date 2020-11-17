import React from "react";
import { Card, Container } from "react-bootstrap";

const Menu = ({ title, img, price, subtitle }) => {
    return (
        <Container>
            <Card style={{ padding: "15px" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{subtitle}</Card.Text>
                    <small>Price: ${price} </small>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Menu;
