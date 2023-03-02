import React from "react";

export default function Meme(){

    const [meme,setMeme] = React.useState({
        topText: "", 
        bottomText: "", 
        randomImage:"https://i.imgflip.com/3si4.jpg"
    ,})

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    },[])

    function getNewImg(){
        const randNumber = Math.floor(Math.random()* allMemes.length)
        setMeme(prevMem => ({
            ...prevMem,
            randomImage: allMemes[randNumber].url
        }))
    }

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