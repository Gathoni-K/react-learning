export default function Fruits () {
//this first line exports and creates our component on the same line.
    const fruits = ["Apple", "Mango", "Orange", "Pineapple"];
    return <div>
        <ul>
    {fruits.map(fruit=>
     (
     <li key={fruit}>{fruit}</li>

     )
    ) }
    </ul>
{/*
-The .map() function return a callback function
-.arrayName.map(callback function)
-Our function gives us access to every element of the array.
 */}
    
    </div>;
}