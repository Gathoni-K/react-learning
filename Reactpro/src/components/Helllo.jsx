/* const name = "Rob";

function displayMessage() {
    return "Wow!";
}
*/

//function Hello({name, message, seatNumbers}) {
function Hello ({person}) {

//    console.log(props);
//will print our object with our name property
    
    return (
    <div>
    <h1> 
        {person.message}
        {person.name}
        {person.seatNumbers}
         </h1>
{/*to acces the value of our prop, we treat is as an object, so 'name.property' */}
     </div>
     );
}

//we have created our component, now how to use it.
//creating a component is like defining a function, and putting it in our main component 'app' is like calling our function.
//we have to export it to our main component.

export default Hello;

//it renders our HTML and evaluates our JS variable, meaning expressions are totally welcome.

/*
Adjacent jsx elements must be wrapped in an enclosing tag.
-Our component should not return more than one root element.
-Always return a single 'div'.
 */