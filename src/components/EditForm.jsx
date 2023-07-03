import React from "react" 

export default function EditForm(props){
    //placeholder state meme for editing with controlled inputs
    const [editMeme, setEditMeme] = React.useState(props.meme)

    //controlled inputs using editMeme temp state
    function handleChange(event) {
        const {name, value} = event.target
        setEditMeme(prevMeme => ({
          ...prevMeme,
          [name]: value
      }))
    }

    //adds editited meme to the memelist state from the editform state
    function handleSubmit() {
        props.toggle()
        props.setMemeList(prev => {
            return (prev.map(mem => {
                if (mem.key == editMeme.key) {
                    return editMeme
                }
                else {
                    return mem
                }
            }))
        })
    }

    return(
        <div>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={editMeme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={editMeme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={handleSubmit}
                >
                Submit Changes
                </button>
            </div>
        <div className="meme">
            <img src={editMeme.randomImage} className="meme--image" />
            <h2 className="meme--text top">{editMeme.topText}</h2>
            <h2 className="meme--text bottom">{editMeme.bottomText}</h2>
        </div>
    </div>)
}