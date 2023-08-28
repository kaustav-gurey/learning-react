import React from 'react';
import airbnbLogo from '../assets/airbnb-logo.png'

export default function Navbar() {
    return(
        <nav>
            <img id='logo' src={airbnbLogo} alt='airbnb logo'/>
        </nav>
    )
}