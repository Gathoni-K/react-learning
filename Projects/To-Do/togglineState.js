/*
This file demonstrates how we mark a task as completed.
*/
let todos = [{name: "lunch", done: false}, {name: "dinner", done: false}, {name: "breakfast", done: false}];

let name = "dinner";
//saved the variable we want to change in a variable.

/*
Loop through all the tasks.
Find the name whose task is given.
*/

const newTodos = todos.map((todo)=> todo.name === name ? {...todo, done: !todo.done} : todo )  
    //create a new variable where we are looping through our OG array.
    //to access every task in the list, we use 'todo'.
    //sets our condition in a way that, our done status is reversed, if false will be ture and vice versa.
    //our spread operator: takes our item and copies everything from our item 

console.log(newTodos);

//this is the logic we will need to use whenever we click on a random task.

