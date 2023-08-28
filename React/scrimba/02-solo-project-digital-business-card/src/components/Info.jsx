import React from 'react';
import '../App.css'
import mailLogo from '../assets/mail-icon.png'
import linkedinLogo from '../assets/linkedin-icon.png'


export default function Info(){
    return(
        <nav>
            <img id = "photo" src='../src/assets/me.png' alt='an image of the person'/>
            <info>
                <h1>Kaustav Gurey</h1>
                <h4>Frontend Developer</h4>
                <p><small><a href='https://timely-zuccutto-0ab79b.netlify.app/' target='_blank'>kaustavgurey.website</a></small></p>
                <btns>
                    <button id='mail-btn' className='btn-text'><img className='btn-logo' src={mailLogo} alt=''/>Email</button>
                    <button id='linkedin-btn' className='btn-text'><img className='btn-logo' src={linkedinLogo} alt=''/>LinkedIn</button>
                </btns>
            </info>
        </nav>
    )
}