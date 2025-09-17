/*
Component containing our header.
-It is to return the title alone.

*/
import styles from "./header.module.css";

export default function Header(){

    return(
        <div className={styles.border}>
            <h1 className={styles.mainTitle}>Hello There!!</h1>
            <h3 className={styles.secondaryTitle}>What do you have planned for today?</h3>
        </div>
    )

}