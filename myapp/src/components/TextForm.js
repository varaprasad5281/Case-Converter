import React,{useState} from 'react';

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Upper case was clicked"+ text)
        let newText=text.toUpperCase()
        setText(newText)

    }
    const handleOnChange=(event)=>{
        // console.log("On change")
        setText(event.target.value)

    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase()
        setText(newText)
    }
    const handleClearClick=()=>{
        let newText=''
        setText(newText)

    }

    const [text,setText]=useState("")
    
    return (
        <>
        <div className="container">
            <div className="form-group">
                <h2>{props.heading} </h2>
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} Characters</p>
            <p>{0.008 * text.split("").length} Minutes to read</p>
            <p>preview</p>
            <p>{text}</p>
        </div>
        </>
        
    );
}
