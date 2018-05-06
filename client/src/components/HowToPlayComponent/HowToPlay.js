import React from "react";
import "./HowToPlay.css";
//import PropTypes from "prop-types";

const HowToPlay = () => {
  return (
    <div className="HowToplay">
      <h1>Instructions</h1>
      <ul className="list-group">
        <li className="list-group-item">
          Click on <b>Play</b> button to start the quiz
        </li>
        <li className="list-group-item">
          For Each question you will have 120 seconds to choose the right quote
        </li>
        <li className="list-group-item">
          You will be having four multiple choices in order to choose the right
          answer
        </li>
        <li className="list-group-item">
          Your score will decrease by -1 for incorrect answer or if time runs
          out
        </li>
        <li className="list-group-item">
          Your score will increase by +1 for correct answer
        </li>
        <li className="list-group-item">
          Your final score will be displayed after answering the question{" "}
        </li>
      </ul>
      <p>
        Note : In order to keep track of the score , you have to sign-up with
        the game{" "}
      </p>
    </div>
  );
};

// HowToPlay.propTypes = {

// };

export default HowToPlay;
