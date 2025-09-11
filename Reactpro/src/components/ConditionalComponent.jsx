import Welcome from "./Welcome";
//import our component
import Code from "./Code";
//import our code component

export default function ConditionalComponent() {
    
   // const display = false;
//setting our variable to 'false' a boolean value.

   /* if (display) {
        return (
            <div>
                <h3>THis is a conditional component.</h3>
            </div>
        );  
    }
    else{
        return(
            <div>
                <h3>Eat, Sleep, CODE, Repeat!</h3>
            </div>
        );
    }
}
    */
/*
-We decide what will be displayed on our screen
-Since the first condition is false, the code in the 'else' block will run.
-On changing our 'display' variable to true, the code in the 'if' block will run
-Here we are conditionally rendering jsx and not an entire component.
 */


    /*
    const display = true;
    if (display) {
//if true, our 'Welcome' component is displayed
        return <Welcome/>
    }
    else{
        return <Code/>
    }

//our code will display our first component.
//it is not advisable to have mutliple 'return' statements.

*/
    
/*let messageOne= <h1>This is my first message</h1>;
//our first element variable.
    letmessageTwo = <h1>This is my second message </h1>;
*/

    /*
    const display = true;
//creates our diplay variable that will check for the conditions.
    let message;
//an empty element variable.
    
    
    if (display) {
        message = <h1>This is message one</h1>;
    }
    else{
        message = <h1>This is message two</h1>;
    }
    return message;
    */

    //Use a ternary operator
    
    /*
    let display = true;
    let message = display ? "This is message one" : "This is message two";
    return message;
-My version of the code.
    */
   const display = false;
   {
     return display ? <h1>This is message 1</h1> : <h1>This is message 2</h1>
    }
    
    
}
//to render the components instead, for the conditions, use the name of the components instead.
// return display ? <Welcome/> : <Code/>

