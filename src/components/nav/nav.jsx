import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

function NavBar() {
    return (
        <nav>
            <div className="navBar">
                <Link to="/" className="navButton">Home</Link>
                <Link to="/awards" className="navButton">Awards</Link>
                <Link to="/interests" className="navButton">Interests</Link>
                <Link to="/contact" className="navButton">Contact</Link>
            </div>
        </nav>
    );
}

export default NavBar;