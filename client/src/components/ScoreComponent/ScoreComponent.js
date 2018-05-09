import React from "react";
import "./ScoreComponent.css";

class ScoreComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { score: 0 };
  }

  changeScore(amount) {
    let newState = {};
    let score = this.state.score;
    score = score + amount;
    newState.score = score;
    this.setState(newState, 10);
  }
  render() {
    return <div className="score">Score:{this.state.score}</div>;
  }
}

export default ScoreComponent;
