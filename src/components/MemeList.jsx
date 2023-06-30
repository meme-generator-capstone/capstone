import React from "react"
import MemeForList from "./MemeForList"

// props are the memelist state

export default function MemeList(props) {
    function handleClick() {
        props.setMemeList(prevMemes => {
            const theId = prevMemes.length 
            const meme = {...props.meme, id: theId}
            return ([...prevMemes, meme])
        })
        
    }

    let memes = props.memeList.map(meme => {
       return (
       <MemeForList
            meme = {meme}
            setMemeList = {props.setMemeList}
        />
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