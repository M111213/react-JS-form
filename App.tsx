import React, { SyntheticEvent } from 'react';
import {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import { text } from 'stream/consumers';


/*function favcolor(){
  const [color, setColor] = useState("red");

  return(
    <>
    <h1>My favourite color is {color}.</h1>
    <button type='button' onClick={() => setColor("blue")}>blue</button>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<favcolor/>);*/

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Contact manager</h1>
        <input type="text" id="var"></input>
        <button>Submit</button>
      </header>
    
    </div>
  );
}
export default App;*/



function Contact(){
  const [name, setName] = useState("");
  const [rawInput, setRawInput] = useState("");
  const display = (event: SyntheticEvent) =>{
    event.preventDefault();
    setName(rawInput)
  }
 
  return(
  <form onSubmit={display}>
    <div className="App">
      <header className="App-header">
        <h1>Contact manager</h1>
          <input type="text" value={rawInput} onChange={(e) => setRawInput(e.target.value)}></input>
        <button>Submit</button>
        {
        name !== undefined  && <p>{name} </p> 
      }

      </header>
     
    </div>

  </form>
  )

  const myArr = ["masudi hamidu", "Adamu hamidu", "Baraka Alex", "Rahul Alex"];
  const myList = myArr.map(item => <p>{item}</p>);
  return(
    <h1>{myList}</h1>
  )

}

export default Contact;
export {Contact};
