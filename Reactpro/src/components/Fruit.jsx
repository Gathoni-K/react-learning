export default function Fruit({name, price}){
    return (
        <div>
            {/* {name}
            {price} */}

            {price > 20 ? <h3>{name} {price}</h3> : ""}
{/* Our code will check for any fruit whose price is more than 20, this is our condition
-It will print all the fruits whose values are greate than 20 else, it will return an empty string
 */}
        </div>
    )
}