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
  
  //list of created memes
  const [memeList, setMemeList] = React.useState([])
  
  //populate allMemes with fetch from api
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])

  //get a new random meme image
  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }))}

  //update the meme in real time on the image from input
  //controlled state
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
            setMeme = {setMeme}
            setMemeList = {setMemeList}
            handleChange = {handleChange}
          />
        </div>
    </div>
  )
}

export default App
  