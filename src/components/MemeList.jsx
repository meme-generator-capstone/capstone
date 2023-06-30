import React from "react"
import MemeForList from "./MemeForList"

export default function MemeList(props) {
    function handleClick() {
        props.setMemeList(prevMemes => {
            const theId = prevMemes.length 
            const meme = {...props.meme, key: theId}
            return ([...prevMemes, meme])
        })
    }

    let memes = props.memeList.map(meme => {
       return (
       <MemeForList
            key = {meme.key}
            meme = {meme}
            setMemeList = {props.setMemeList}
        />
       )
    })

    console.log(memes)
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