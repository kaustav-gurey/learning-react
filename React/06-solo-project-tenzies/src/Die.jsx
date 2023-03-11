import React from 'react'

export default function Die(props) {
    const styles={
        backgroundColor : props.isHeld ? "#59E391" : "#FFFFFF"
    }
    return (
        <div onClick={props.holdDice} className="die-face" 
        style={styles} >
            {props.value}
        </div>
    )
}