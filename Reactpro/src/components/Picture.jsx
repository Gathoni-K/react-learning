import { useState } from "react";

export default function Picture(){
    const [isActive, setIsActive] = useState(false);
    //we have set one single boolean state

    let backgroundClassName = "background";
    let pictureClassName = "picture";

    if(isActive){
        //if picture is active, if 'isActive' = true, the following code runs
        pictureClassName += "picture--active";
        //picture then becomes 'picture picture--active'
    } else{
        backgroundClassName =+ "background--active";
    }
    return (
        <div
        className = {backgroundClassName}
        onClick={() => setIsActive(false)}
        // when clicked makes our background active
        >
            <img 
            onClick ={e => {
                e.stopPropagation();
                //this stops the background click
                setIsActive(true)
            }}
            className={pictureClassName}
            alt="Rainbow houses"
            src="https://i.imgur.com/5qwVYb1.jpeg"
            />

        </div>
    )
}