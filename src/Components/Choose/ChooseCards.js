import React from "react";
import { Card } from "react-bootstrap";

const ChooseCards = (props) => {
    const { title, description, img, icon } = props;

    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>
                    <img
                        src={icon}
                        alt={icon}
                        style={{ marginRight: "10px" }}
                    />
                    {title}
                </Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ChooseCards;
