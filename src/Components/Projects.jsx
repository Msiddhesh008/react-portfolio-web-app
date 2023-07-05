import React, { Component } from 'react'
import ProRow from './SubComponents/ProRow'
import todo from '../images/todo.png'
import Firechat from '../images/firechat.png'
import dadJoke from '../images/dad-joke.png'
import vendingMachine from '../images/vending-machine.png'
import cardDeck from '../images/card-deck.png'


class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
       hide: true
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState({hide: !this.state.hide})
  }


  render() {
    return (
      <div className='container-fluid Projects'>
        <div className="container pt-5 pb-5">
        <div className="row pt-5">
          <p>PRACTITIONER PROJECTS</p>

          <ProRow imgLink ={Firechat}
          title="Realtime Chat App"
          p1="Frontend"
          p2="Backend"
          p1Color="#e74c3c"
          p2Color="#e67e22"
          p3Color="#1a589c"
          h3One="React Js"
          h3Two="Firebase"
          pc="Firebase, Data collections"
          route="https://msiddhesh008.github.io/firechat/"
          />

          <ProRow imgLink ={todo}
          title="Todo List"
          p1="Frontend"
          p2="Backend"
          p1Color="#e74c3c"
          p2Color="#e67e22"
          p3Color="#1a589c"
          h3One="React Js"
          h3Two="MySql"
          pc="Bootstarp, Flexbox, Animation, Breakoints"
          route="/react-portfolio-web-app/todo"
          />
          

          <ProRow imgLink ="https://msiddhesh008.github.io/portfolioweb/ProjectImages/diceGame1.png"
          title="Roll Dice"
          p1="Frontend"
          p2="Styling"
          p1Color="#f39c12"
          p2Color="#9b59b6"
          p3Color="#2ecc71"
          h3One="React JS"
          h3Two="CSS Bootstarp"
          route="/react-portfolio-web-app/rolldice"
          pc="Bootstarp, Flexbox, Animation, Breakoints, State Management"
          />


          <div style={{display :`${this.state.hide ? `none`: `block`}`}}>

          <ProRow imgLink ="https://msiddhesh008.github.io/portfolioweb/ProjectImages/coin1.png"
          title="Flip Coin"
          p1="Frontend"
          p2="Backend"
          p1Color="#e74c3c"
          p2Color="#e67e22"
          p3Color="#1abc9c"
          h3One="React Js"
          h3Two="MySql"
          pc="Bootstarp, Flexbox, Animation, Breakoints"
          route="/react-portfolio-web-app/flipcoin"
          />

          <ProRow imgLink ={dadJoke}
          title="Dad Joke"
          p1="Frontend"
          p2="Backend"
          p1Color="#ffb8b8"
          p2Color="#ff9f1a"
          p3Color="#3ae374"
          h3One="React Js"
          h3Two="API"
          pc="Axio, Api, Hooks"
          route="/react-portfolio-web-app/dad-joke"
          />
          

          <ProRow imgLink ={cardDeck}
          title="Card Deck"
          p1="Design"
          p2="Styling"
          p1Color="#e74c3c"
          p2Color="#e67e22"
          p3Color="#ED4C67"
          h3One="React JS"
          h3Two="CSS Bootstarp"
          pc="API fetching"
          route="/react-portfolio-web-app/deck-card"
          />          

          <ProRow imgLink ="https://msiddhesh008.github.io/portfolioweb/ProjectImages/pokeDex2.png"
          title="Pokedex"
          p1="Design"
          p2="Styling"
          p1Color="#e74c3c"
          p2Color="#e67e22"
          p3Color="#ED4C67"
          h3One="React JS"
          h3Two="CSS Bootstarp"
          route="/react-portfolio-web-app/pokedex"
          />
          </div>

          

          <button 
          className='btn text-info m-5 mx-auto' 
          onClick={this.handleClick}
          style={{width:"20%"}}>{`${this.state.hide ? `More`: `Hide`}`}</button>

          {/* <button className='btn btn-warning m-5 mx-auto' style={{width:"20%"}}>All Projects</button> */}

          
        </div>
        </div>
      </div>
    )
  }
}

export default Projects
