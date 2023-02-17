import React from "react";
import reactLogo from '../assets/react.svg'
export default function Navbar(){
    return (
        <header>
            <nav>
                <img  src={reactLogo} alt="react-logo" width="40"/>
                <h4>ReactFacts</h4>
            </nav>
            <p>React Course - Project 1</p>
        </header>
    )
}