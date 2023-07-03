import React from "react"
import EditForm from "./EditForm"

export default function MemeForList(props) {
    //used for conditional rendering
    const [isEditing, setIsEditing] = React.useState(false)

    //makes edit form appear and disappear by changing state
    function toggleIsEditing() {
        setIsEditing(prev => !prev)
    }
    
    //filter out id of deleted post, reassigns new list to state
    function deleteFunc() {
        props.setMemeList(prev => {
            const newarray = prev.filter(meme => meme.key != props.meme.key)
            return newarray
        })
    }

    return (
        <div className="listmeme">
            {isEditing ? <EditForm 
                    {...props}
                    toggle = {toggleIsEditing}
                    /> :     
                    <div>        
                    <li className="meme">
                        <div>
                            <img src={props.meme.randomImage} className="meme--image" />
                            <h2 className="meme--text top">{props.meme.topText}</h2>
                            <h2 className="meme--text bottom">{props.meme.bottomText}</h2>
                        </div>
                        
                    </li>
                    <button onClick={toggleIsEditing}>Edit</button> 
                    <button onClick={deleteFunc}>Delete</button>
                    </div>
                }
        </div>
        
    )
}