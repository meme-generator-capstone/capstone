import React from "react"
import MemeForList from "./MemeForList"

export default function MemeList(props) {
    //for adding to the list- when clicked, the meme is added to MemeList using setMemeList
    //id is determined by the length of the list 
    //while loop provides redundancy- if items have been deleted the keys may be greater values than the list length
    //increments until no matching ids to ensure unique key 
    function handleClick() {
        props.setMemeList(prevMemes => {
            let theId = prevMemes.length 
            let idExists = prevMemes.find(meme => meme.key === theId)
            while (idExists) {
                theId++
                idExists = prevMemes.find(meme => meme.key === theId) 
            }
            const meme = {...props.meme, key: theId}
            return ([...prevMemes, meme])
        })
    }

    //each meme in memeList is packaged into its component, giving it format and edit/delete buttons with functionality
    let memes = props.memeList.map(meme => {
       return (
       <MemeForList
            key = {meme.key}
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