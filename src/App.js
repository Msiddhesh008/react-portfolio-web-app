import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import RollDice from "./Components/ProjectsFolder/RollDice/RollDice"
import Home from './Pages/Home';
import FlipCoin from "./Components/ProjectsFolder/FlipCoin/FlipCoin"
import Todo from "./Components/ProjectsFolder/Todo/Todo"
import Pokedex from "./Components/ProjectsFolder/Pokedex/App"



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/rolldice' element={ <RollDice /> } />
        <Route path='/flipcoin' element={ <FlipCoin/> } />
        <Route path='/todo' element={ <Todo/> } />
        <Route path='/pokedex' element={ <Pokedex/> } />

      </Routes>
        
      
      

      
    </div>
  );
}

export default App;
