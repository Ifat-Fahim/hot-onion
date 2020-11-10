import React from 'react';
import './Hero.css'

const Hero = () => {
    return (
        <div className="hero">
            <h1 className="mb-3">Best Food Waiting for your belly</h1>
            <form className="d-flex">
                <input type="text" placeholder="Search Food Here" className="form-control mx-auto"/>
                <input type="submit" value="Search" className="btn"/>
            </form>
        </div>
    );
};

export default Hero;