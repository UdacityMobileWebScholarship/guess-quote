import React from "react";
import "./HowToPlay.css";
//import PropTypes from "prop-types";

const HowToPlay = () => {
  return (
    <div className="HowToplay">
      <h1>How To Play</h1>
      <h5>Choose the correct author who has quoted the sentence</h5>
      <ul className="list-group">
        <li className="list-group-item">
          For Each question you have 30 seconds before the timer runs out
        </li>
        <li className="list-group-item">
          Each correct answer gains you 100 points
        </li>
        <li className="list-group-item">
          Score remains the same for wrong or timed-out answer
        </li>
        <li className="list-group-item">
          Your progress will be displayed accordingly when you move-on for the
          next-quote
        </li>
        <li className="list-group-item">
          <span>Note </span>: In order to keep track of the score , you have to
          sign-up with the game
        </li>
      </ul>
    </div>
  );
};

// HowToPlay.propTypes = {

// };

export default HowToPlay;
