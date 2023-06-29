import React from 'react'
import './App.css'
import MemeList from "./components/MemeList"

function App() {
  const [meme, setMeme] = React.useState({
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg" 
  })
  const [allMemes, setAllMemes] = React.useState([])
  
  //This spot will be state for the memelist of all memes 
  const [memeList, setMemeList] = React.useState([{
    topText: "meme",
    bottomText: "meme",
    randomImage: "http://i.imgflip.com/1bij.jpg" 
}])
  
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])

    
  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }))}

  function handleChange(event) {
      const {name, value} = event.target
      setMeme(prevMeme => ({
          ...prevMeme,
          [name]: value
      }))
  }

  return (
    <div>
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
        <div className="memes-container">
          <MemeList 
            memeList = {memeList}
            meme = {meme}
            setMemeList = {setMemeList}
          />
        </div>
    </div>
  )
}

export default App
  