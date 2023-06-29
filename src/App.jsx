import React from 'react'
import './App.css'
import MemeList from "./components/MemeList"
import Meme from './components/Meme'

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
        <div className="memes-container">
          <Meme
            objMeme={meme}
            arrMeme={allMemes}
            handleChange={handleChange}
            getImg={getMemeImage}
            />
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
  