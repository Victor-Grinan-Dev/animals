import './App.css';
import { animals } from './database'; 
import  AnimalCard  from "./AnimalCard";

function App() {
  {console.log(animals)}
  return (
    <div className="App">
      hello
      {animals.map(animal => (
      <AnimalCard name={animal.name}/>))
      } 
    </div>
  );
}

export default App;
