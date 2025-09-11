/*
-The text input is to show what I am typing in real time.
-Add a character counter that updates as I type.

**Component should show 'Too long!' if the characters exceed 50.


*/




import { useState } from "react";

export default function BasicInput(){
    const [answer, setAnswer] = useState("");
//creates our state variable and sets the initial value to an empty string.

function handleChange(e){
    setAnswer(e.target.value);
    //will update state to whatever the user has typed in
}

return(
    <>
    <textarea
        value={answer}
        onChange={handleChange}
    />
    <p>The character count is: {answer.length}</p>
    {answer.length >= 50 && <p>Your message is too long!</p>}
    {/* 
    Conditionally rendering our UI, the error message is shown only when the character is 50 charaacters+
     */}
    </>
)

}