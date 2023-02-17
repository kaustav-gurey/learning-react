import React from 'react';
import '../App.css'

export default function About(){
    return(
        <nav>
            <img id = "photo" src='../src/assets/me.png' alt='an image of the person'/>
            <info>
                <h1>Kaustav Gurey</h1>
                <h4>Frontend Developer</h4>
                <p><small><a href='https://timely-zuccutto-0ab79b.netlify.app/' target='_blank'>kaustavgurey.website</a></small></p>
                <btns>
                    <button>Email</button>
                    <button>LinkedIn</button>
                </btns>
            </info>
        </nav>
    )
}