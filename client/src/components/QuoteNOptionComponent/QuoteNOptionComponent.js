import React from "react";
import PropTypes from "prop-types";
import Quote from "./Quote";
import Options from "./Options";
import "./QuoteNOptionComponent.css";

const QuoteNOptionComponent = ({ question }) => {
  return (
    <div className="quiz-option-container">
      <Quote quote={question.title} />
      <Options options={question.options} />
    </div>
  );
};

QuoteNOptionComponent.propTypes = {
  question: PropTypes.shape.isRequired
};

export default QuoteNOptionComponent;
