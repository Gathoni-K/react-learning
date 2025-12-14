import ComponentB from "./ComponentB";

const ComponentA = () => {
    return (
        <div className="p-5 border-4">
            <h1 className="text-red-600"> 
                Component A
            </h1>

            <ComponentB />
            
        </div>
    )
}

export default ComponentA