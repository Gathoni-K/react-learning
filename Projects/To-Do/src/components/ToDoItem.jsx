import styles from "./toDoItem.module.css";

export default function ToDoItem({item, onDelete, onComplete }) {
    //accepting our prop and returning some jsx.
    // function handleDelete(item) {
    //     //we access our item like this
    //     console.log("Delete button clicked for item", item);
    // }
        //logs that our button has been clicked.
        //and what task has been clicked on
        /*
        We need to identify which delete button has been clicked, because the way the function is
        currently set up, whenever we click any delete button, it has the risk of deleting all the tasks and 
        we only want to delete the task whose button was clicked.
        -In this case, we are going to pass our 'item' in our button.
        -This is discouraged for real-world apllications, do not pass the entire item to the button, pass the ID of the specific
        item instead.
                *****DELETION LOGIC
        -Our handleDelete() function is to map through the lists of tasks and then will filterout the task whose button
        was clicked.
        -Only problem is that this component does not have access to our todos
         */
      
        /*
        However, we want to identify which task has bee clicked, so each task must be identified uniquely.
        -To do this, we could pass the item name to our handler function.
        -We need to use a callback function as the handler fuction is called once we have clicked on an item.
        */
       const taskStyle = item.done ? styles.completed : "";
       //checks our item, if status is true, then it styles it using the 'completed' style in our css module.
    
    return <div className={styles.item}>
        <div className={styles.itemName}>
             <span className= {taskStyle} onClick={() => onComplete(item.name)}>
                {item.name}
            </span>
            {/* on clickig on our spa element, our tasks, then the functio defined above is called */}
              <span>
            <button type="button" onClick={()=>onDelete(item)} className={styles.deleteButton}>x</button>
            {/* so for our deleting logic:
            we have passed the individual item name to our delete function, this makes our function to be called immediately which is not what we want as 
            it is only to be called after clicking the button.
            so we create a callback function to solve this error.
            -Callbacks are used when we do not want to call our function immediately.
            -are used wherever we may need to defer execution.
            -our function has access to our task items
             */}
             </span>
         </div>
       
            <hr className={styles.line}/>
        
        </div>
}