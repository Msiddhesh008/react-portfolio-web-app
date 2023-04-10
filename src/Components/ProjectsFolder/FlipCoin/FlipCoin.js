import React, { Component } from "react";
import "./FlipCoin.css";
import ResultPanel from "./Components/ResultPanel";
import Coin from "./Components/Coin";
import Button from "./Components/Button";
import Title from "./Components/Title";

class FlipCoin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switch: true,
      headCounter: 0,
      tailCounter: 0,
      flipTotal: 0,
      display: false,
    };
    this.flip = this.flip.bind(this);
  }

  flip() {
    this.setState({ display: true });
    Math.random() < 0.5
      ? this.setState((prev) => ({
          switch: false,
          headCounter: prev.headCounter + 1,
          flipTotal: prev.flipTotal + 1,
        }))
      : this.setState((prev) => ({
          switch: true,
          tailCounter: prev.tailCounter + 1,
          flipTotal: prev.flipTotal + 1,
        }));

    if (this.state.flipTotal === 10) {
      this.setState({
        flipTotal: 0,
        headCounter: 0,
        tailCounter: 0,
        display: false,
      });
    }
  }

  render() {
    return (
      <div className="Flip ">
        <Title title="Lets Flip the Coin.!" />

        <Coin switch={this.state.switch} display={this.state.display} />

        <Button  method={this.flip} titleBtn="Flip Me" />

        <ResultPanel
          tHeads={this.state.headCounter}
          tTails={this.state.tailCounter}
          tFlips={this.state.flipTotal}
        />
      </div>
    );
  }
}
export default FlipCoin;
