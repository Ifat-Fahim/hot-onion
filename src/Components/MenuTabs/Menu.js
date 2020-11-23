import React from "react";
import { Card, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Menu = ({ title, img, price, subtitle, id }) => {
    const history = useHistory();
    return (
        <Container>
            <Card
                style={{ padding: "15px" }}
                onClick={() => history.push(`/food-detail/${id}`)}
            >
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
