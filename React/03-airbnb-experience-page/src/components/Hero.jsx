import React from 'react';
import imageGrid from '../assets/photo-grid.png'

export default function Hero() {
    return(
        <div className='hero'>
            <img id='img-grid' src={imageGrid} alt='images of airbnb experiences'/>
            <div className='experience'>
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by on-of-a-kind-hosts--all without leaving home. </p>
            </div>
        </div>
    )
}