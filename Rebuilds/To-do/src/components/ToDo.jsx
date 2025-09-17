/*
Our component where our state will live.
-Parent component responsible for managing state.

What state do we need?
-Remember state is data that changes.
-our data that will change include the task array, 

-


*/
import Input from "./Input";
import TaskList from "./TaskList";
import { useState } from "react";

export default function ToDo(){
    const [todos, setTodos] = useState([]);
    //define state for my task list
    //define the state for our tasks
    //set it to an array
 
    function addTask(taskText){
        setTodos([...todos, taskText]);
        //the function is to make it such that our tasks are added to our app
        //fetch our previous tasks and add the new task
        //pass it to our Input component.
    }
    //helper function for adding our tasks to our TaskLIst component.
    //I am thinking of passing our helper function to our imported components below.
    function onDelete(taskText) {
        setTodos(todos.filter(todo =>  todo !== taskText))
    }
    return (
        <div>
            <Input addTask={addTask}/>
            {/* pass our function as a prop so we can acces it in our Input component. */}
            <TaskList onDelete={onDelete} todos={todos}/>
        </div>
    )


}