import './App.css';
import Card from "./Components/Card"
import logo from "./images/pokeball.png"
import pokemon from "./Pokemon";
// import pokemon from "./ThreeDPokObj";
// import ThreeDPokemon from "./ThreeDPokImg";


// ===[ Array Destructuring ]===
  const[ poke1, poke2, poke3, poke4, poke5, poke6, poke7, poke8 ] = pokemon;

// ===[ Object Destructuring into Arry ]===
const expArr = []
  const destucturingArryOfObject = (poki) => {
    const { base_exp:Exp } = poki;
    expArr.push(Exp)
    return expArr;
  }
[ poke1, poke2, poke3, poke4, poke5, poke6, poke7, poke8 ].map(destucturingArryOfObject);

// ===[ Destructuring Array ]===
  const [ exp1, exp2, exp3, exp4, exp5, exp6, exp7, exp8 ] = expArr;


  const fHand = () => {
    const totalScore = exp1 + exp2 + exp3 + exp4;
     return (totalScore);
  }
  const sHand = () => {
    const totalScore = exp5 + exp6 + exp7 + exp8;
     return (totalScore);
  }

  const createCard = (PokeData) =>{
    return <Card
    id={PokeData.id}
    pokeName={PokeData.name} 
    link={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0${PokeData.id}.png`}
    // link={ThreeDPokemon[PokeData.id]}
    type={PokeData.type}
    exp={PokeData.base_exp}
    />
  }

const App = () => {
  const firstHand = fHand();
  const secondHand = sHand();
  return (
    <div className="PokeApp">
      <div className='score'>
        <div>
      <h2 style={{color:firstHand > secondHand ? "Green" : "Red" }}>
        {firstHand < secondHand ? "First Hand Loose" : "First Hand Win" }
      </h2>
      <p style={{color: "white"}}>Total Score : {firstHand}</p>
      </div>
      <img src={logo} width={150}/>
      <div style={{textAlign:'right'}}>
      <h2 style={{color: firstHand < secondHand ? "Green" : "Red" }} >
        {firstHand > secondHand ? "Second Hand Loose" : "Second Hand Win" }
      </h2>
      <p style={{color: "white"}}>Total Score : {secondHand}</p>
     </div>
      </div>
      <div className='Hand'>
        {pokemon.map(createCard)}
      </div>
    </div>
  );
}
export default App;
