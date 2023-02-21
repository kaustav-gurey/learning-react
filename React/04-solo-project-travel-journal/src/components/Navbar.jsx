import React from 'react'
import worldLogo from '../assets/globe-logo.png'

export default function Navbar(){
    return (
        <nav>
            <img id='nav-logo' src = {worldLogo} alt = 'journal icon'/>
            <p>my travel journal.</p>
        </nav>
    )
}