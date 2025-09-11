import { useState } from "react";

export default function Counter(){

    const [count, setCount] = useState(0);
    const[incrementBy, setIncrementBy] = useState(1);
    //initial value is 1, because we want to increment our value at least by 1.


    function increment() {
        setCount(count + incrementBy);
        //this sets our variable in such a way that we are going to add our count as per the current increment value.
    }

    function decrement() {
        setCount(count - incrementBy);
    }
    function increaseIncrement(){
        setIncrementBy(incrementBy + 1);
    }
    function decreaseIncrement(){
        setIncrementBy(incrementBy - 1);
    }

    return(
        <div>
           <h1> Count Value is:{count }</h1>
           <button type="button" onClick={increment}>Increment</button>
           <button  type="button" onClick={decrement}>Decrement</button>
           {/* In HTML, when the type of the button is not specified it will be treated as a 'submit' button
           -This happens when the button is inside a 'form', it's default behaviour is to submit the form
            */}

            <h3>We are incrementing the value by:{incrementBy}</h3>
            <button type="button" onClick={increaseIncrement}>Increase Increment</button>
            <button type="button" onClick={decreaseIncrement}>Decrease Increment</button>
            

        </div>
    )
}