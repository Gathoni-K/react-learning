import WelcomeCard from './components/WelcomeCard';
import StudentProfile from './components/StudentProfile';
import ShoppingList from './components/ShoppingList';
import BookList from './components/BookList';
import Teams from './components/Teams';


function App() {
 
  return (
    <div className="App">
      
      <WelcomeCard name="Miki" age={44}/>
      <StudentProfile student={{name: "Mary", grades:[79, 87,98,70]}} />
      <ShoppingList/>
      <BookList></BookList>
      <Teams></Teams>
    </div>
  )
}

export default App;
