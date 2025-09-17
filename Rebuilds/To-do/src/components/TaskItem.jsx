/*
-Is the component responsible for displaying a single item at a time.
-Our function should return each task.
-Also contains the delete button
*/
import styles from "./taskItem.module.css";

export default function TaskItem({ item, onDelete }){

    return (
        <div>
            <span className={styles.task}>
                {item}
            
            <button type="button" onClick={() => onDelete(item)} className={styles.deleteButton} >x</button>
            </span>
            
        <hr className={styles.line} />
         </div>

    )
          
  
}