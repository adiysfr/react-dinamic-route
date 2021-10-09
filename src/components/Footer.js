import React from 'react';

const Footer = () =>  {
    return (
        <div style={styleFooter}>
            <h3>adiysfr | 2021</h3>
        </div>
    );
}

export default Footer;

const styleFooter = {
    display: "flex",
    background: "#fe024e",
    justifyContent: "center",
    color: "white",
    alignItems: "center",
    position: "absolute",
    bottom: "0",
    width: "100%"
}