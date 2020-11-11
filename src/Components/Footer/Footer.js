import React from "react";
import { Container } from "react-bootstrap";
import logo from "../../images/logo.png";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="f-container">
            <Container>
                <footer>
                    <section className="section-a">
                        <div className="logo">
                            <img src={logo} alt="Hot onion" />
                        </div>
                        <div className="ul-container">
                            <ul>
                                <li>Food</li>
                                <li>Menu</li>
                                <li>Delivery</li>
                                <li>Contact</li>
                            </ul>
                            <ul>
                                <li>Get help</li>
                                <li>faq</li>
                                <li>Cities</li>
                                <li>Services</li>
                            </ul>
                        </div>
                    </section>
                    <section className="section-b">
                        <p style={{ color: "#777" }}>&copy;Copyright 2020</p>
                        <div>
                            <p>Privacy Policy</p>
                            <p>Terms and Conditions</p>
                            <p>Pricing</p>
                        </div>
                    </section>
                </footer>
            </Container>
        </div>
    );
};

export default Footer;
