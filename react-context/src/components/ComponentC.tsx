import ComponentD from "./ComponentD"

// interface Props{
//     user: string,
// }
const ComponentC= () => {
    return (
        <div className="p-5 border-4">
            <h1 className="text-blue-600"> 
                Component C
            </h1>

            <ComponentD />
            
        </div>
    )
}

export default ComponentC