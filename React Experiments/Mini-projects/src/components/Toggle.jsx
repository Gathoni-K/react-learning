/*
Build a Toggle component with a button that toggles between "ON" and "OFF".

Expected Behavior:

When you first load it, it shows "OFF".

Click once → it shows "ON".

Click again → back to "OFF".

-Logic to change from on to off.
-our states are on, off
*/

import { useState } from "react";

// export default function Toggle(){

//     const [turn, setTurn] = useState("OFF");

//     function turnOn() {
//         //logic to change the state of my button
//         setTurn("ON");
//     }
//     function turnOff() {
//         //logic to change it to off
//         setTurn("OFF");
//     }

//     return(
//         <div>
//             <h2>{turn}</h2>
//             {/* will display the state we are at */}
//             <button type="button" onClick={turnOn}>On</button>
//             <button type="button" onClick={turnOff}>Off</button>
//         </div>
//     )

// }

//what if we were to use only one button?


export default function Toggle(){
    const [turn, setTurn] = useState("OFF");

    function toggle() {
        setTurn(turn === "OFF" ? "ON" : "OFF");
        //using the conditonal; condition ? valueifTrue : valueifFalse
        //our condition is to check if our turn is off, if it is off, it should turn on, our value if true.
        //calls our function 'setTurn'
    }

    return(
        <div>
            <h2>{turn}</h2>
            <button  type="button" onClick={ toggle }>Toggle</button>
        </div> 
    )

}
