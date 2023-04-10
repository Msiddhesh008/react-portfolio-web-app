import React, { Component } from 'react'
import Head from '../Coins/Head.png'
import Tail from '../Coins/Tail.png'

class Coin extends Component {

  render() {
    return (
        <img 
        className='FlipImg'
        src={`${this.props.switch?Tail:Head}`} 
        style={ {display: this.props.display ?'block':'none'}}  
        alt="Img"
        />
    )
  }
}

export default Coin;





