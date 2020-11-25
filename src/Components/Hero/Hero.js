import React from "react";
import "./Hero.css";

const Hero = () => {
    const btnStyle = {
        backgroundColor: "#f91944",
        color: "#fff ",
        borderRadius: "20px",
        marginLeft: "-70px",
    };
    return (
        <div className="hero">
            <h1 className="mb-3 text-center">
                Best Food Waiting for your belly
            </h1>
            <form className="d-flex">
                <input
                    type="text"
                    placeholder="Search Food Here"
                    className="form-control mx-auto input-text"
                />
                <input
                    type="submit"
                    className="btn"
                    value="Search"
                    style={btnStyle}
                />
            </form>
        </div>
    );
};

export default Hero;
