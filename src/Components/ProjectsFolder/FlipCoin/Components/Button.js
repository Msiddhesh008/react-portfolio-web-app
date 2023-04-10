import React, { Component } from 'react'

class Button extends Component {
  render() {
    return (
        <button className="FlipBtn" onClick={this.props.method}>
          {this.props.titleBtn}
        </button>
    )
  }
}

export default Button;





