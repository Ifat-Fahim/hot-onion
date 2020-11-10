import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import logo from '../../images/logo2.png';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="d-flex justify-content-between align-items-center">
            <div className="logo">
                <img src={logo} alt="hot onion"/>
            </div>
            <ul className="d-flex justify-content-around align-items-center">
                <li><a href="/cart"> <FontAwesomeIcon icon={faShoppingCart} /> </a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/sign-up">Sign Up</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;