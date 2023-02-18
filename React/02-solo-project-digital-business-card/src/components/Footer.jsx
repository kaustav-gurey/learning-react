import React from 'react';
import '../App.css'
import twitterLogo from '../assets/twitter-icon.png'
import facebookLogo from '../assets/facebook-icon.png'
import instagramLogo from '../assets/instagram-icon.png'
import githubLogo from '../assets/github-icon.png'
export default function Footer(){
    return(
        <footer>
            <img className='logo' src={twitterLogo} alt='twitter logo'/>
            <img className='logo' src={facebookLogo} alt=' facebook logo'/>
            <img className='logo' src={instagramLogo} alt='instagram logo'/>
            <img className='logo' src={githubLogo} alt='github logo'/>
        </footer>
    )
}