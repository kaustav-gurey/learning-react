import React from 'react'
import locationIcon from '../assets/location-icon.png'


export default function Card() {
    return (
        <card>
            <img className='card-img' src = 'mount-fuji.png' alt ='image of Mount Fuji'/>
            <div className='place-info'>
                <p>
                    <img className='location-icon' src={locationIcon}/>
                    <span>JAPAN</span>
                    <span><a href='https://goo.gl/maps/79mGbZyu2dNW1rkk6' target='_blank'>View on Google Maps</a></span>
                </p>
                <h1>Mount Fuji</h1>
                <p>12 Jan, 2021 - 24 Jan, 2021</p>
                <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is teh single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </card>
    )
}