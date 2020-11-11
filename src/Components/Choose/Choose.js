import React from "react";
import { Container } from "react-bootstrap";
import { chooseData } from "../../fakedata/fakedata";
import ChooseCards from "./ChooseCards";

const Choose = () => {
    const cardStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        justifyItems: "center",
        gridGap: "15px",
        alignItems: "center",
    };
    return (
        <Container>
            <h1 className="display-4 text-center">Why Choose Us</h1>
            <p className="text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea,
                eligendi odio. Quos impedit rem hic laborum maxime asperiores
                odio cupiditate.
            </p>
            <div style={cardStyle}>
                {chooseData.map((choose) => (
                    <ChooseCards key={chooseData.id} {...choose} />
                ))}
            </div>
        </Container>
    );
};

export default Choose;
