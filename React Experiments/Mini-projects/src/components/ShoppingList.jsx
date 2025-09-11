//rendering array items as lists.

export default function ShoppingList() {
    const colors = ["red", "blue", "black", "red"];
    //declaring our array.
    return (
     
        <ul>
            {/* creates our unordered list */}

            {colors.map(color=> (
                <li key={color}>{color}</li>
            ))
            }
            {/* Our block of JS code is enclosed within the curly braces.
            'colors'- is my array and the '.map()' goes through each item of my array
            'color' - is the current item of our array.
            -SO for each color, it creates a '<li>....</li>'
            -Our key helps our JS Keep track of individual items in a list 
            */}
        </ul>
        
    )    

}