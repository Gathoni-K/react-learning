import { useState } from "react";
import styles from "./form.module.css";


export default function Form({ todos, setTodos }){
    // const [todo, setTodo] = useState("");
    
    const [todo, setTodo] = useState({name:"", done:false});
    //declares our state variable whose initial value is an object.
    //the bject's properties include: a name, whose value is set to empty, and a dne, set to a boolean, this helps us
    //track the state of our tasks.


    function captureInput(e) {
        setTodo({name: e.target.value, done:false});
    }
    //our function allows us to access the properties of our task object.


    // function captureInput(e) {
    //     setTodo(e.target.value);
    // }
    //the handler function was correct if the initial value was set to an empty string.


    function handleSubmit(e){
        e.preventDefault();
        //prevents default submission of the form which causes our page to reload
        // setTodos([todo]);
        //this line will not work as will not store data for the previous item.
        //we are only declaring an array that stores the previous item, adding another item overrides the previous one.
        // console.log(todos);
        setTodos([...todos, todo]);
        //retrieves the previous items, takes the current one and sets an array with both.
        //Output looks like somthing like: '[homework, lunch, play]'
        //our to-do list disappears when we manually refresh our page
        setTodo({name: "", done: false});
        //this line clears out our input
        //question is how exactly this works, why this function to clear the input?
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.todoForm}>
                <div className={styles.inputContainer}>
            <input type="text" value={todo.name} onChange={captureInput} className={styles.modernInput} placeholder="Enter task here" />
            {/* here we have used a handler function, we could also use a callback function. */}
            {/* 
            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}
            in our 'onChange' attribute, we have a callback function
            */}

            <button type="submit" className={styles.modernButton}>Add</button>
                </div>
            {/* {console.log(todos)} */}
        </form>
        </div>
    )
}