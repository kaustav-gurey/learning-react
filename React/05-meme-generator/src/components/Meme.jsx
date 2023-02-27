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
    function handleChange(event){
        const {name,value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name] : value,
            }
        })
    }
    return (
        <main>
            <div id='form'>
                <div className="inputs">
                    <input 
                        type='text'
                        placeholder='Top text'
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <input 
                        type='text'
                        placeholder='Bottom text'
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <button onClick={getNewImg}>Get a new meme image 🖼️</button>
                <div id="meme">
                    <img src={meme.randomImage} className="meme--image" />
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
            </div>

        </main>
    )
}