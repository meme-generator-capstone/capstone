import React from "react"

// props are the memelist state

export default function MemeList(props) {
    function handleClick() {
        const meme = props.meme
        props.setMemeList(prevMemes => {
            return ([...prevMemes, meme])
        })
    }

    let memes = props.memeList.map(meme => {
       return (
        <li className="meme">
            <img src={meme.randomImage} className="meme--image" />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </li>
       )
    })
    return (
        <div className="memelist">
            <button className="add-meme"
                    onClick={handleClick}>
                    Add meme to list
            </button>
            <ul>
                {memes}
            </ul>
        </div>
    )
}