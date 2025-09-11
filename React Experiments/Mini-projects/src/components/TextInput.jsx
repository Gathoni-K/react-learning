/*
Create a simple text input that shows what you type.

What to build:

An input field
Show the text below the input as you type
*/


import { useState } from "react";

export default function TextInput() {

    const[textInput, setText] = useState("");
    //sets our state, the function that will handle it, and our initial value as an empty string.

    function showText(e){
        setText(e.target.value);
    }

    return(
        <div>
            <h3>This is what you have typed in: {textInput}</h3>
            <input type="text" value={textInput} onChange={showText}></input>
            {/* the 'onChange' property is absolutely mecessary for input fields, will show the current data
            -without it, only the initial data will show. */}

        </div>
    )

}