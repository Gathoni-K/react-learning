import ToDoItem from "./ToDoItem";
import styles from "./toDoList.module.css";

export default function ToDoList({ todos, onDelete, onComplete }){
  const sortedTodos = todos.slice().sort((a,b) => Number(a.done)-Number(b.done))
  /*
  -we are creating a duplicate of our todos, our '.sort()' method alters the original array and we want to avoid that.
  -'.slice()' - creates our copy.
  'Number(a.done) - Number(b.done)' - sort our completed items on one side and the incomplete pnes on the other.
  */
    return (
        <div className={styles.list}> 
          {/* our div here acts as a container for all our tasks */}
              {sortedTodos.map((item) => (
            // we have created a callback function that accepts a particular item,
            //then returns some jsx
           <ToDoItem item={item} key={item.name} onDelete={onDelete} onComplete={onComplete} />
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
    )
}