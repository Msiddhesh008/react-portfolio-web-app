import React, { useEffect, useState } from "react";
import "./HookDeck.css";
import HookCard from "./HookCard";
import axios from "axios";
import cassino from "./images/casino.png"

function randDeg(){
    return Math.floor(Math.random() *360+1);
}

const HookDeck = () => {     

    const [ id, setId ] = useState("")
    const [ cards, setCards ] = useState([])
    const [ rotate, setRotate ] = useState([])
    const [ success, setSuccess ] = useState(true)

    useEffect(()=>{
        async function fetchData() {
            let res = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle ')
            let data = res.data;
            setId(data.deck_id)
        }
        fetchData()
    }, [])

    async function handleClick(e){
        e.preventDefault() 
        let card = await axios.get(`https://deckofcardsapi.com/api/deck/${id}/draw/`)
        setCards([...cards, card.data.cards[0]])
        setRotate([...rotate, randDeg()])
        setSuccess(card.data.success)
    }

    if(!success){
      return(
        <div className="hook-deck container-fluid">
          <div className="container">
            <div className="row">
            <div className="deck-cnt ">
            <div className="logo-cnt">
            <img 
            className="cassino" 
            style={{opacity:"100%"}} 
            src={cassino} width={500}
            alt="cassiono" />
            <h1 
            className="msg-logo" 
            style={{opacity:"100%"}}>DECK IS EMPTY!!</h1>
            </div>
            </div>
            </div>
          </div>
        </div>
      )}else{
    return (
    <div className="hook-deck container-fluid ">
      <div className="container">
        <div className="row">
          <div className="deck-cnt">

            {cards.map((eachCard, index) => {
                return(
                    <HookCard 
                    key={index} 
                    deg={rotate[index]}  
                    src={eachCard.image}  
                    alt={eachCard.code} />
                )
            })}

            <div className="logo-cnt">
            <img 
            className="cassino" 
            style={{opacity:"10%"}} 
            alt="cassion"
            src={cassino} width={500} />
            <h1 className="msg-logo">SHUFLLE CARDS</h1>
            </div>
            
        <button 
        onClick={handleClick}
        className="button-82-pushable m-5 btnn">
          <span className="button-82-shadow"></span>
          <span className="button-82-edge"></span>
          <span className="button-82-front text">PRESS ME</span>
        </button>

        </div>
        </div>
      </div>
    </div>
  )}
};

export default HookDeck;







// import joker from "./images/joker.png"
// import deck from "./images/deck.png"