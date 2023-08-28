import React from 'react'
import locationIcon from '../assets/location-icon.png'


export default function Card(props) {
    return (
        <card>
            <img className='card-img' src = {props.item.img} alt ='image of {props.title}'/>
            <div className='place-info'>
                <p className='location-section'>
                    <img className='location-icon' src={locationIcon}/>
                    <span className='place-location'>{props.item.location.toUpperCase()}</span>
                    <span ><a className='place-location-link' href={props.item.locationLink} target='_blank'>View on Google Maps</a></span>
                </p>
                <h1 className='place-title'>{props.item.title}</h1>
                <p className='place-date'>{props.item.date}</p>
                <p className='place-details'>{props.item.description}</p>
            </div>
        </card>
    )
}