
import './App.css';
import Info from './Info';


function App() {
  return (
    <div className="App">
     <Info />
     <AddItem />
    </div>
  );
}



function AddItem(){
  return(
    <form>
      <label for='text-form'>Type some words</label>
      <input type='text' id='text-form'/>
      <Info />
    </form>
  )
}



export default App;
