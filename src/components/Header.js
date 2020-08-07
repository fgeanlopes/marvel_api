import React from 'react';

const logoMarvel = require("../dist/img/MarvelLogo.svg");

function Header() {
    return (
        <div className="header">
            <img className="logoMarvel" src={logoMarvel} title="logo da Marvel" alt="logo da Marvel" />
        </div>
    );
}
export default Header;