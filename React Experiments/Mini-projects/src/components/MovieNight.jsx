/* Tests on Conditional Rendering of components
 
Create a component called MovieNight.

Inside it, declare a boolean variable, e.g. isMovieNight.

If isMovieNight is true, render a heading that says “Grab your popcorn, it’s movie night!”.

If isMovieNight is false, render a heading that says “No movies today. Maybe read a book instead.”

Extra challenge: Add a list of 3 movies (array) and only render them if isMovieNight is true.
*/

export default function MovieNight(){
    let isMovieNight = true;
    let message = isMovieNight ? "Grab your popcorn, it's movie night" : "No movie today, go read a book";

    const movies = ["A Whisker Away", "A Silent Voice", "Howl's Moving Castle"];
    //declaring our movies array
    return (
        <div>
            <h1>{message}</h1>
            <ul>
           {isMovieNight && movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
      {/* this code will run, the movies will be displayed in a list only if it is 
      movie night
       */}
           
        </div>
        
    )
    //our return statement should only render if our boolean is true.
    //'if' statments cannot be put inside the return statements.
    //in our return statement, it is supposed to return only expressions not statements.
}
