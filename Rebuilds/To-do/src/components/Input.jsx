import styles from "./input.module.css";
import { useState } from "react";
/*
What does our component do?
Will capture user input and onclicking the 'add' button, the tasks are added to our list.
functions: one for adding tasks

*/
export default function Input({ addTask }){

    const [task, setTask] = useState("");
    //declare local state that will help us handling the addition of tasks to our app.

    function captureInput(e){
        setTask(e.target.value);
        console.log(task);
    }
//creates a handler function that is responsible for adding tasks to our app.
//our app is to return our input box, the add button.
//logic to capture the user input
    return (
        <div className={styles.addTask}>
            <textarea className={styles.input} onChange={(e)=> captureInput(e)} value={task}></textarea>
            {/*
            -on our 'onChange' attribute, we need to receive the event then pass it, hence the syntax.
            -create an arrow function receiving the event then calling the function with that event
             */}
            <button className={styles.addButton} type="button" onClick={() => addTask(task)}>Add</button>

        </div>
    )



}