/*
Declaring a form declaratively:
1.Identifying the component's different visual state.
-The different states of our UI the user will see are:
.empty: form has a disabled 'Submit' button.
.typing: our button is enabled here.
.submitting: form completely disabled, spinner is shown.
.success: "Thank you" message is shown.
.error: same as our typing state but there is an error message.

2.Determine what triggers the state changes.
-The state will be changed in response to:
.changing the text input, switch from Empty to Typing state or back,
depending on if th einput is empty or not.
.clicking the submit button, show the Submitting state.
.succesful network response where the state shows Success, vice versa is true for the 
error response.


*/



import { useState } from "react";


// //Below is the mock up of the different states
// export default function ContactForm({
//     status = 'empty'
// }) {
//     if(status === "success"){
//         return <h1>That's Right!</h1>
//     }
//     return(
//         <>
//         <h2>City Quiz</h2>
//         <p>
//             In whoch city is there a billboard that turns air into drinkable water?
//         </p>
//         <form>
//             <textarea/>
//                 <br/>
//                 <button>
//                     Submit
//                 </button>
            
//         </form>
//         {/* on changing the status to 'succes', the success message shows */}
        
//         </>
//     )
// }

export default function CityForm(){
    const [answer, setAnswer] = useState("");
    const [error, setError] = useState(null);
    const [status, setStatus] = useState("typing");

    if(status === "success") {
        return <h1>That's right!</h1>
    }

    async function handleSubmit(e){
        e.preventDefault();
        setStatus("submitting");
        try{
            await submitForm(answer);
            setStatus("success");
        }catch (err) {
            setStatus("typing");
            setError(err);
        }
    }
    function handleTextAreaChange(e){
        setAnswer(e.target.value);
    }

    return(
        <>
        <h2>City Quiz</h2>
        <p>
            In which city is there a bilboard that turns air to drinkable water?
        
        </p>  
        <form onSubmit={handleSubmit}>
            <textarea
            value={answer}
            onChange={handleTextAreaChange}
            disabled={status === "submitting"}
            />
            <br />
            <button  type="submit" disabled={
                answer.length === 0 ||
                status === "submitting"
            }>
                Submit
            </button>
            {error !== null &&
            <p className="Error">
                {error.message}
                </p>
                }
        </form>
        
        </>
    )


}
function submitForm(answer) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            let shouldError = answer.toLowerCase() !== "lima"
            if (shouldError) {
                reject (new Error("Good guess but a wrong answer. Try again!"))
            } else{
                resolve();
            }

        }, 1500);
    });
}