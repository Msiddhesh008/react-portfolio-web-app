import { Route, Routes } from "react-router-dom";
import { useState, useEffect, Fragment } from "react"
import "./App.css";
import Navbar from "./Components/Navbar";
import RollDice from "./Components/ProjectsFolder/RollDice/RollDice";
import Home from "./Pages/Home";
import FlipCoin from "./Components/ProjectsFolder/FlipCoin/FlipCoin";
import Todo from "./Components/ProjectsFolder/Todo/Todo";
import Pokedex from "./Components/ProjectsFolder/Pokedex/App";
import DadJoke from "./Components/ProjectsFolder/JokeGenerator/JokeGenerator";
import Loader from "./Components/Loader"

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="App">
      {(loading ? <Fragment/> : <Navbar />)}
      <Routes>
        <Route path="/react-portfolio-web-app" element={(loading ? <Loader/> : <Home />)} />
        <Route path="/react-portfolio-web-app/rolldice" element={<RollDice />} />
        <Route path="/react-portfolio-web-app/flipcoin" element={<FlipCoin />} />
        <Route path="/react-portfolio-web-app/todo" element={<Todo />} />
        <Route path="/react-portfolio-web-app/pokedex" element={<Pokedex />} />
        <Route path="/react-portfolio-web-app/dad-joke" element={<DadJoke />} />
      </Routes>
    </div>
  );
}

export default App;
