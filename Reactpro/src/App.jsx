//import Hello from './components/Helllo';
//this imports our component

//import Fruits from './components/Fruits';

// import Objects from './components/Objects';

// import Fruit from './components/Fruit';
// import ConditionalComponent from './components/ConditionalComponent';

import Message from './components/Message';
import Counter from './components/Counter';
import Form from './components/Form';

function App() {

  // const seatNumbers = [1,4,7];
  /*const person = {
    name:"Rob",
    message: "Hello There!",
    seatNumbers: [1,4,8],
  }; 
  an object we had earlier created*/

  return (
    <div className="App">
    {/* 
    <Hello name="Bob" message="Hey There!!"
      seatNumbers={seatNumbers}
       />
        */}
      {/*  <Hello person ={person} /> */}

     {/* <Objects /> */}

      {/* <Objects/> */}

      <Message/>
      <Counter />
      <Form/>

    </div>
    );
  
}

export default App;
