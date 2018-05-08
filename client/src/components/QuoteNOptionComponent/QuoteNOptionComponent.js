import React from "react";
import PropTypes from "prop-types";
import Quote from "./Quote";
import Options from "./Options";
import "./QuoteNOptionComponent.css";

const QuoteNOptionComponent = ({ quoteNOption, onAnswerSelected }) => {
  return (
    <div className="quiz-option-container">
      <Quote quote={quoteNOption.title} />
      <Options
        options={quoteNOption.options}
        onAnswerSelected={onAnswerSelected}
      />
    </div>
  );
};

QuoteNOptionComponent.propTypes = {
  quoteNOption: PropTypes.shape.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default QuoteNOptionComponent;
