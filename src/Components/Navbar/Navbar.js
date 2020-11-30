import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import logo from "../../backgroundImg/logo2.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { CartContext } from "../../Contexts/CartContext";
import { AuthContext } from "../../Contexts/AuthContext";

const Navigation = () => {
    const { cart } = useContext(CartContext);
    const { user, handleSignOut } = useContext(AuthContext);
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
                <div>
                    {user.isSignedIn ? (
                        <span
                            style={{ cursor: "pointer" }}
                            onClick={handleSignOut}
                        >
                            Log out
                        </span>
                    ) : (
                        <Link className="link" to="/login">
                            Login
                        </Link>
                    )}
                    <br />
                    {user.isSignedIn ? <span>{user.name}</span> : ""}
                </div>
                <Link className="link" to="/sign-up">
                    Sign Up
                </Link>
            </Nav>
        </Navbar>
    );
};

export default Navigation;
