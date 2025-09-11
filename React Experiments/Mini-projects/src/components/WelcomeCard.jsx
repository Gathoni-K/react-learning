//using props
//covers on destructuring props.

export default function WelcomeCard({name,age}){
    return (
        <>
        <h1>
            Hello {name}, you are {age} years old.
        </h1>
        
        </>
    )
}