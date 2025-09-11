import { useState } from "react";

export default function MultipleInput(){
    const [name, setName] = useState({
        firstName: '',
        lastName: '',
    })
    function handleSubmit(e){
        e.preventDefault();
        //prevents default behaviour of form.
        console.log(name);
        //will print the name to our console.
    }

    return(
        <div>
            {name.firstName} - {name.lastName}
            {/* will print out the first and last names */}
            <form>
                <input onChange={(e) =>setName({...name, firstName:e.target.value})}
                type="text"
                value={name.firstName}
                />
                <input
                type="text"
                onChange={(e) => setName({...name, lastName:e.target.value})}
                value={name.lastName}/>

                {/*
                 at this point when trying to type in our first name, the second input field is empty
                and on typing in the second input box, the text in the first input disappears.
                -To solve this problem, we will use a spread operator.
                -when we want to set either names we don't want the other value to be disturbed.
                -Take the current value then append the value, do this using the spread operator.
                */}
                <button onClick={(e)=>handleSubmit()}>Add</button>
                {/* 
                -whenever the button is inside a form, its default behaviour on clicking it is that
                the form is submitted.
                -on refreshing a page in React, data saved is lost.
                -prevent the page from reloading.
                -so what we are doing, we are declaring an arrow function with 'e', event as its parameter.
                -we are passing this function to handleSubmit()
                 */}
            </form>
        </div>
    )
}