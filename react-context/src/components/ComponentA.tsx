import ComponentB from "./ComponentB";
import { useState, createContext } from "react";


export const UserContext = createContext();

const ComponentA = () => {

    const[user, setUser] = useState<string>("Gathoni");
    
    return (
        <div className="p-5 border-4">
            <h1 className="text-red-600"> 
                Component A
            </h1>

            <h2>
                {`Hello ${user}`}
            </h2>

        <UserContext.Provider value={user}>
            <ComponentB/>
        </UserContext.Provider>
            
            
        </div>
    )
}

export default ComponentA