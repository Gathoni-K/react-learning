//passing arrays and objects to components using props.

export default function StudentProfile({student}) {
    const average = student.grades.reduce((sum,grade)=> sum+grade, 0) / student.grades.length;
/*the .reduce() function loops through our values combining it to a single value
-Our arrow function loops through every item of our object, caluclating the sum then the average
 */  
    return(
        <>
       <h1> Student: {student.name}</h1>
       <h2>Grades: {student.grades.join(', ')}</h2>
       {/* 
       The '.join()' - method separates our array after every comma, making it more readable
        */}
       <h3>Average grade: {average}</h3>
       </>
    )
}