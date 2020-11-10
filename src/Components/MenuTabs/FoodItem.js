import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const FoodItem = (props) => {
    const { title, img, price, categories } = props;
    return (
        <Container>
            <Row>
                <Col>
                    <Card style={{ width: "18rem", padding: "0 10px" }}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title> {title} </Card.Title>
                            <p>Category: {categories} </p>
                            <small>${price} </small>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default FoodItem;
