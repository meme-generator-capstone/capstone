import React from "react"
import EditForm from "./EditForm"

export default function MemeForList(props) {

    const [isEditing, setIsEditing] = React.useState(false)

    function toggleIsEditing() {
        setIsEditing(prev => !prev)
    }

    return (
        <div className="listmeme">
            {isEditing ? <EditForm 
                    {...props}
                    toggle = {toggleIsEditing}
                    /> :             
                    <li className="meme">
                        <div>
                            <img src={props.meme.randomImage} className="meme--image" />
                            <h2 className="meme--text top">{props.meme.topText}</h2>
                            <h2 className="meme--text bottom">{props.meme.bottomText}</h2>
                        </div>
                        <button onClick={toggleIsEditing}>Edit</button> 
                    </li>
                }
        </div>
        
    )
}