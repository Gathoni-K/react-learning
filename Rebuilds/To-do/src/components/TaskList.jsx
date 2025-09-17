/*
Our component is responsible for where all our tasks are displayed as 
a list.
-the container containing all of our tasks.
-On clicking the 'add' button, tasks are added to this component of ours.
-pass down the tasks as props


*/
import styles from "./taskList.module.css";
import TaskItem from "./TaskItem";

export default function TaskList( {todos, onDelete} ){

    return(
        <div className={styles.taskContainer}>

            {/* <ul>
                <li className={styles.list}>{todos}</li>
            </ul> */}
            {/* we need to loop through our array then create a separate list item for each */}

            {todos.map((item) => (
                <TaskItem item={item} key={item} onDelete={onDelete}/>
            ))}
        </div>
    )
}