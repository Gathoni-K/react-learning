/*
Create a button that shows and hides some text.

States needed:
isVisible starting as false

What to build:
A button that says "Show" or "Hide"
Some text that appears/disappears when you click

-This is a toggle visibility component.

*/
import  { useState } from "react";
//always necessary when using state.

export default function ShowButton(){
    const [isVisible, buttonState] = useState(false);

    // to declare a boolean, do not add quotes, then it will be a string.

    function show(){
        buttonState(true);
    }
    // define function 'show', the buttonState is true in this function.
    //the vice versa is true for the function below.
    function hide(){
        buttonState(false);
    }

    return(
        <div>
            <button type="button" onClick={show}>Show</button>
            <button type="button" onClick={hide}>Hide</button>
            
            {isVisible && <p>Here is some text that appears and disappears</p>}
            {/* If isVisible is true, show the paragraph. If false, show nothing. */}
        </div>
    )

}
/*
In JS, the '&&' operator works like so:
-if the first value is true, return the second value.
-if the first value is false, then return false.
 */