import React from "react";
import reactLogo from '../assets/react.svg'
import '../App.css'
export default function Navbar(){
    return (
        <header>
            <nav>
                <img  src={reactLogo} alt="react-logo" width="40"/>
                <h3 >ReactFacts</h3>
            </nav>
            <h4>React Course - Project 1</h4>
        </header>
    )
}