import React from "react";
import PropTypes from "prop-types";
import "./QuoteNOptionComponent.css";

const Options = ({ options, onAnswerSelected, selectedAnswer }) => {
  return (
    <div className="options">
      <ul className="answerOptions">
        {options.map(function(item) {
          return (
            <li
              key={item.title}
              className="answerOption"
              data-id={JSON.stringify(item)}
              onClick={onAnswerSelected}
            >
              <label className="radioCustomLabel" htmlFor={item.value}>
                <span
                  className={
                    selectedAnswer.value === item.value
                      ? selectedAnswer.is_correct
                        ? "select-success"
                        : "select-fail"
                      : ""
                  }
                />
                {item.value}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Options.propTypes = {
  options: PropTypes.array,
  onAnswerSelected: PropTypes.func.isRequired,
  answerStatus: PropTypes.func.isRequired,
  selectedAnswer: PropTypes.shape.isRequired
};

export default Options;
