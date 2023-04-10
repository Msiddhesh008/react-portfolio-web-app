import React, { Component } from 'react'
import "./RollDice.css"
import Dice from './Dice'

export class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = { die1: 0, die2: 5 , switch: false};
        this.roll=this.roll.bind(this)
    }
    
    roll(){
        this.setState({
            die1: Math.floor(Math.random() * 5),
            die2: Math.floor(Math.random() * 5),
            switch:true
        })
        setTimeout(() => {this.setState({switch: false})},500);
    }

  render() {
    return (
      <div className='rollDice container-fluid'>

      <div className="container">

      <div className="col-12 diceCnt">
      <h1 className="title">{this.props.title}</h1>
      <div className='dieCnt'>
      <h1 className='h1'><i className={`${Dice[this.state.die1]} ${this.state.switch ? "Die-shaking" : ""}`}></i></h1>
      <h1 className='h1'><i className={`${Dice[this.state.die2]} ${this.state.switch ? "Die-shaking" : ""}`}></i></h1>
      </div>
      </div>

      <div className="col-12 btnCnt">
      <button className='btnn' onClick={this.roll}>{ this.state.switch ? "Rolling... Dice" : "Roll Dice"}</button>
      </div>

      </div>
      </div>
    )
  }
}

export default RollDice;