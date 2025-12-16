import ComponentC from "./ComponentC.tsx"

// interface ComponentBProps{
//     user: string;
// }

const ComponentB = () => {
    return (
        <div className="p-5 border-4">
            <h1 className="text-green-700"> 
                Component B
            </h1>
            
            <ComponentC/>
        </div>
    )
}

export default ComponentB