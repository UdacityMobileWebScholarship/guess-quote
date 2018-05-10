import React, { PureComponent } from "react";
import "./Quiz.css";
import QuoteNOptionContainers from "../../containers/QuoteNOptionContainers";

class Quiz extends PureComponent {
  static displayName = "Quiz";

  render() {
    return (
      <div className="Quiz container">
        <br />
        <br />
        <QuoteNOptionContainers />
      </div>
    );
  }
}

export default Quiz;
