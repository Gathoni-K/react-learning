import { useState } from "react";
// export default function Form(){

//     function handleChange(e){ 
//         //our event can now be used here.
//         console.log(e.target.value);
//         //this prints the pressed key onto the console.
//         //but this does not change the input the user sees, i.e., the screen is still blank. 
//         setName(e.target.value);
//         //this line then prints our input value on the screen
//     }
//     const [name, setName] = useState("");
//     return(
//         <div>
//             <form>
//                 {/* <input type="text" value={name} onChange={function demo(e){
//                     // this is not good practice.
//                     return handleChange(e);
//                     // when onChange happens, will execute our demo function that will call the event
//                     //the event is then passed to our 'handleChange' function.
//                 }}></input> */}

//                 <input type="text" value={name} onChange={(e)=>handleChange(e)}></input>

//                             </form>
//         </div>
//     )
// }


//That is when we use a handler function, in the second block of code, the handler functio is elminiated.

export default function Form(){
    const [name, setName] = useState("");

    return(
        <div>
        <form>
            <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            value={name}
            />
        </form>
        </div>
    )
    //this block of code does not print it to the console
}