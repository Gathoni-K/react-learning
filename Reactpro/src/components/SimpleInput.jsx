import { useState } from "react";

export default function SimpleInput(){
    const [answer, setAnswer] = useState("");
    //stores whatever the user types.

    //our handler function
    function handleTextAreaChange(e){
        setAnswer(e.target.value);
        //will update state to what the user has typed
    }
    /*
    
    -specific handler function
    -used when there is only one input.
    -the input needs special logic.
    -to update a separate piece of state.
    
    */
    return(
        <>
        <textarea
        value={answer}
        //shows our current state
        onChange={handleTextAreaChange}
        //updates state when user types
        />
        <p>You typed: {answer} </p>
        </>
    )
}