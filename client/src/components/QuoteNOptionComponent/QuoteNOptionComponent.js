import React from "react";
import PropTypes from "prop-types";
import Quote from "./Quote";
import Options from "./Options";
import "./QuoteNOptionComponent.css";

const QuoteNOptionComponent = ({
  quoteNOption,
  onAnswerSelected,
  selectedAnswer
}) => {
  return (
    <div className="quiz-option-container">
      <Quote quote={quoteNOption.title} />
      <p> Who stated it? </p>
      <Options
        options={quoteNOption.options}
        onAnswerSelected={onAnswerSelected}
        selectedAnswer={selectedAnswer}
      />
    </div>
  );
};

QuoteNOptionComponent.propTypes = {
  quoteNOption: PropTypes.shape.isRequired,
  selectedAnswer: PropTypes.shape.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default QuoteNOptionComponent;
