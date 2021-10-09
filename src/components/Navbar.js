import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () =>  {
    return (
        <div style={styleNav}>
            <h3>adiysfr</h3>
            <ul style={styleUlNav}>
                <li ><Link to="/" style={linkHome}>Home</Link></li>
                <li ><Link to="/about" style={linkHome}>About</Link></li>
                <li ><Link to="/contact" style={linkHome}>Contact</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;

const styleNav = {
    display: "flex",
    background: "#fe024e",
    padding: "0 6rem",
    justifyContent: "space-between",
    color: "white",
    alignItems: "center"
}

const styleUlNav ={
    display: "flex",
    listStyle: "none",
    justifyContent: "space-evenly",
    width: "40%"
}

const linkHome ={
    textDecoration: "none",
    color: "white",
    fontWeight: "bold"
}
