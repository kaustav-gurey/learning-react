import React from "react";
import '../App.css'
import reactBackground from '../assets/react-icon-large.png'

export default function MainContent(){
    return (
           <main>
                <h1 id="main--title">Fun facts about React</h1>
                <ul id="main--facts">
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </main>
        )
}