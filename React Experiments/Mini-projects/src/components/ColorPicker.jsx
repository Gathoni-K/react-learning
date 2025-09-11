/*
Create buttons that change the background color.
States you need:

color starting as "white"

What to build:

3 buttons: Red, Blue, Green
The background changes when you click a button


*/
import { useState } from "react";

export default function ColorPicker(){
    const [color, setColor] = useState("white")

    //handler function
    //each color with it's own handler function
    //handler functions just call the state setter with the new value needed

    function showRed(){
        setColor("red");
    }
    function showBlue(){
        setColor("blue");
    }
    function showGreen(){
        setColor("green")
    }

    return(
        <div style={{backgroundColor: color}}>
        <button type="button" onClick={showRed}>Red</button>
        <button type="button" onClick={showBlue}>Blue</button>
        <button type="button" onClick={showGreen}>Green</button>
        
        </div>
    )
}