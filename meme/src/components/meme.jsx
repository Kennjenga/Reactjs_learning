import React, { useState } from 'react';
import memedata from "./memesData";

const Meme = () => {

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg" 
})
const [allMemeImages, setAllMemeImages] = React.useState(memedata)


function getMemeImage() {
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }))
    
}

  return (
    <main>
        <div className='form'>
            <div>
            <label className='f-label'>Top text</label>
            <input type="text" className='f-input' placeholder='Shut up'></input>
            </div>
            <div>
            <label className='f-label'>Bottom text</label>
            <input type='text' className='f-input'placeholder='and take my money'/>
            </div>
            <button className='f-button' onClick={getMemeImage}> Generate your meme Image</button>
        </div>
        <img src = { meme.randomImage }  className='img-section' />
        
    </main>
  )
}

export default Meme