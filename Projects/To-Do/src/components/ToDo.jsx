import { useState } from "react";

export default function ToDo(){

    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    //this is going to be alist, where we will store all our tasks.
    //so we will define an array.

    function captureInput(e) {
        setTodo(e.target.value);
    }
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
        setTodo("");
        //this line clears out our input
        //question is how exactly this works, why this function to clear the input?
    }
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={todo} onChange={captureInput} />
            {/* here we have used a handler function, we could also use a callback function. */}
            {/* 
            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}
            in our 'onChange' attribute, we have a callback function
            */}

            <button type="submit">Add</button>
          
            {/* {console.log(todos)} */}
        </form>
        {todos.map((item) => (
            // we have created a callback function that accepts a particular item,
            //then returns some jsx
           <ToDoItem item={item} key={item} />
           //in our case, the unique key is the item's name.
           //our component is automatically imported.
           //we need to pass our item as a prop to our other component.
            /*
            -Whenever we are mapping through something, making a callback function that returns jsx, 
            instead of making it return jsx, we can make it return another component.
            -To identify items uniquely, we pass in the ID of the particular items as the key. 
            */
          ))}
    </div>
);
}
//at this point, our app has 2 problems, on refreshing the page, the data is lost and the button does not submit the data.
//the default behaviour of a form is reloading the page when submittin, use the .preventDefault() to prevent default behaviour.