import React from "react"

export default function Meme(props) {
    return (
    <div>
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={props.objMeme.topText}
                    onChange={props.handleChange}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={props.objMeme.bottomText}
                    onChange={props.handleChange}
                />
                <button
                    className="form--button"
                    onClick={props.getImg}
                >
                    Get a new meme image 
                </button>
            </div>
            <div className="meme">
                <img src={props.objMeme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{props.objMeme.topText}</h2>
                <h2 className="meme--text bottom">{props.objMeme.bottomText}</h2>
            </div>
        </main>
    </div>
    )
}