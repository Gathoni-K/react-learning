import Fruit from "./Fruit";

export default function Objects (){
    const objects = [
        {name: 'Apple', price: 40},
        {name: 'Mango', price: 20},
        {name: 'Banana', price: 10},
        {name: 'Orange', price: 25},
        {name: 'Pineapple', price: 60},
    ];

    return (
  <div>
    <ul>
      {objects.map(object => (
        <Fruit key={object.name} name={object.name} price={object.price}/>
         /*<li key={object.name}>
          {object.name} - {object.price}
        </li> */
      ))}
    </ul>
  </div>
)
}