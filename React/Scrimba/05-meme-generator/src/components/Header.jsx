import React from 'react';
import trollFace from '../assets/troll-face.png'

export default function Navbar(){
    return (    
        <div className='header'>
            <img id='header-img' src={trollFace} alt='troll face'/>
            <h3 id='project-title'>Meme Generator</h3>
            <h3>React Course - Project 3</h3>
        </div>
    )
}