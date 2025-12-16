
import { useContext} from "react";
import { UserContext } from "./ComponentA";
// interface Props{
//     user: string;
// }

const ComponentD = () => {

    const user = useContext(UserContext);
    return (
        <div className="p-5 border-4">
            <h1 className="text-orange-400"> 
                Component D
            </h1>

            <h2>
                {`Bye ${user}`}
            </h2>
            
        </div>
    )
}

export default ComponentD