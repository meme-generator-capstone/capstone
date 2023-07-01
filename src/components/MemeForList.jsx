import React from "react"
import EditForm from "./EditForm"

export default function MemeForList(props) {

    const [isEditing, setIsEditing] = React.useState(false)

    function toggleIsEditing() {
        setIsEditing(prev => !prev)
    }
    

    // props.setMemeList(prev => console.log(`prev: ${prev}`))

    // function deleteMeme() {
    //     props.setMemeList(prev => {
    //         return (prev.map(meme => {
    //             if (meme.key != props.meme.key) {
    //                 return meme
    //             }
    //         }))
    //     })
    // }

    //props.meme.key
    function testfunc() {
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
                    <button onClick={testfunc}>Delete</button>
                    </div>
                }
        </div>
        
    )
}