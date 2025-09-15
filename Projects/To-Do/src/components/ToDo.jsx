import Form from "./Form.jsx";
import ToDoList from "./ToDoList.jsx";
import Footer from "./Footer.jsx";
import { useState } from "react";

export default function ToDo(){
    const [todos, setTodos] = useState([]);
    //this is going to be alist, where we will store all our tasks.
    //so we will define an array.
    const completedTodos = todos.filter((todo) => todo.done).length;
    //will only return the todos whose status is set to done.
    //the '.length' will give us the total number of tasks that are completed.
    const totalTodos = todos.length;
    //will calculate the total number of tasks we have in our component.

    function handleDelete(itemToDelete){
        setTodos(todos.filter(todo => todo !== itemToDelete));
    }
    function handleComplete(itemName){
            setTodos(todos.map(todo => todo.name === itemName? {...todo, done: !todo.done} : todo ) )
        }
    /*
    -declare a function that expects a prameter 'itemToDelete'
    -the state update happens in the second line:
    'todos.filter(..)' - array method creating a new array with only items tha pass a specific
    test.
    'todo => todo !== itemToDelete' - callback function running for each item.
    -current item being tested, arrow function, a not equal to comparison, and the item we want to delete.
    'setTodos(..)' - takes the new filtered array and updates our state.
    */
    return (
    <div>
        <Form todos={todos} setTodos={setTodos} />
        {/* calls our component that contains the form */}
        <ToDoList todos = {todos} onDelete={handleDelete} onComplete={handleComplete}/>
        <Footer completedTodos={completedTodos} totalTodos={totalTodos}/>
    </div>
);
}
//at this point, our app has 2 problems, on refreshing the page, the data is lost and the button does not submit the data.
//the default behaviour of a form is reloading the page when submittin, use the .preventDefault() to prevent default behaviour.