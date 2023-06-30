import React from "react"

export default function MemeForList(props) {
    // props.meme
    //props.setMemeList
    
    return (
        <li className="meme">
            <img src={props.meme.randomImage} className="meme--image" />
            <h2 className="meme--text top">{props.meme.topText}</h2>
            <h2 className="meme--text bottom">{props.meme.bottomText}</h2>
        </li>
    )
}