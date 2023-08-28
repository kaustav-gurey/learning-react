import React from 'react';
import star from '../assets/star.png'
export default function Card(props){
    let status
    if(props.item.openSpots === 0){
        status = "SOLD OUT"
    }
    else if(props.item.location === "Online"){
        status = "ONLINE"
    }
    return (
        <div className='card'>
            <img className='card-image'src={props.item.coverImg}/>
            {status && <div className='card-status'>{status}</div>}
            <div className='card-stats'>
                <img className='rating-star' src={star}/>
                <span>{props.item.stats.rating}</span>
                <span className='gray'>({props.item.stats.reviewCount}) • </span>
                <span className='gray'>{props.item.country}</span>
            </div>
            <p className='card-content'>{props.item.title}</p>
            <p className='host-rate'><span className='rate-amount'>From ${props.item.price}</span> / person</p>
        </div>
    )
}