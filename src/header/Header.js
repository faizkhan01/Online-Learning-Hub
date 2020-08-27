import React from 'react';
import './Header.css';
import logo from './learn.png';

const Header = () => {
    return (
        <nav className="navbar">
            <div className="container justify-content-center">
                <a href="/home" className="navbar-brand">
                    <img src={logo} alt="Career Club"/>
                </a>
                <h2 className="title">Online - Learning Hub</h2>  <br/>
                <p className="sub"> Anybody Can Learn Here...........</p>
            </div>
        </nav>
    );
};

export default Header;