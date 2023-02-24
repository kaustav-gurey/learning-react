import React from "react";
import randImg from '../assets/random.jpg'
import memeData from '../assets/memesData.js'
export default function Meme(){

    function getNewImg(){
        const memeArr = memeData.data.memes
        const randNumber = Math.floor(Math.random()* memeArr.length)
        setMeme(prevMem => ({
            ...prevMem,
            randomImage: memeArr[randNumber].url
        }))
    }
    const [meme,setMeme] = React.useState({
        topText: "", 
        bottomText: "", 
        randomImage:"https://i.imgflip.com/3si4.jpg"
        ,})
    return (
        <main>
            <div id='form'>
                <div className="inputs">
                    <input 
                        type='text'
                        placeholder='Top text'
                    />
                    <input 
                        type='text'
                        placeholder='Bottom text'
                    />
                </div>
                <button onClick={getNewImg}>Get a new meme image 🖼️</button>
                <img id='meme' src={meme.randomImage}/>
            </div>

        </main>
    )
}