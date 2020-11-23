import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import logo from "../../images/logo2.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { CartContext } from "../../Contexts/CartContext";

const Navigation = () => {
    const { cart } = useContext(CartContext);
    return (
        <Navbar className="nav-bar" fixed="top">
            <Navbar.Brand>
                <Link className="link" className="logo" to="/">
                    <img src={logo} alt="Red Onion" />
                </Link>
            </Navbar.Brand>
            <Nav className="ml-auto">
                <Link className="link" to="/cart">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span> {cart.length} </span>
                </Link>
                <Link className="link" to="/login">
                    Login
                </Link>
                <Link className="link" to="/sign-up">
                    Sign Up
                </Link>
            </Nav>
        </Navbar>
    );
};

export default Navigation;
