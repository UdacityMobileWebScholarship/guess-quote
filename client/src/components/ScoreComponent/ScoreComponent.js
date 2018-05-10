import React from "react";
import PropTypes from "prop-types";
import "./ScoreComponent.css";
const ScoreComponent = ({ score }) => {
  return <div className="score">Score:{score}</div>;
};

ScoreComponent.propTypes = {
  score: PropTypes.number
};

export default ScoreComponent;
