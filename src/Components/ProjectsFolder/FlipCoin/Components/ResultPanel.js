import React, { Component } from "react";

class ResultPanel extends Component {
  render() {
    const { tHeads, tTails, tFlips } = this.props;

    return (
      <p className="flipP">Total of {tFlips}, there have been {tHeads} heads and {tTails} tails.</p>
    );
  }
}

export default ResultPanel;










