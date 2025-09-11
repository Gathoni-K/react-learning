/*
Create a functional component.
-Declare an array of objects such that each item has these properties; title and author, include at least 4 books.
-Render an unordered list.
-For each book in the array, render a list item showing the properties.
-Use a unique key for each list item?

 */

export default function BookList(){
    //creating our function and declaring our props
    const books = [
        {title: "Killing Commendatore", author: "Haruki Murakami"},
        {title: "The Memory Police", author: "Yoko Ogawa"},
        {title: "The Stranger", author: "Albert Camus"},
        {title: "The Broken Dolls", author:"Richard Montanari"},
    ];
    //declare an array of objects
    return (
        <ul>
            {/* create an unordered list */}
        
        {books.map(book=>{
            <li key={book.title}>{book.title} {book.author} </li>
            // the 'key' part give a unique key to each item.
        })}
        {/* for each book in the array, renders a list item showing the properties */}

        </ul>
    );
}

/*
The 'key' is a unique identifier React uses to internally track elements in a list.
-Is not a prop getting passed into my component.
-Are necessary to identify which items have been added, changed or removed when re-rendering lists.
-Good keys should be unique and stable, are usually: the ID, or any property unique to each item.
-Bad keys are: array index, random values.
-Name keys according to the properties of the items we are going to mape over.
Syntax: key={currentItem, someProperty}
 */