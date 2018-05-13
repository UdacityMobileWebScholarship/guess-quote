import React from "react";
import PropTypes from "prop-types";
import "./QuoteNOptionComponent.css";

const Quote = ({ quote }) => {
  return (
    <div>
      <i className="fa fa-quote-left" aria-hidden="true" />
      <div className="quote">
        <h2 className="quote-text">{quote}</h2>
      </div>
    </div>
  );
};

Quote.propTypes = {
  quote: PropTypes.string
};

export default Quote;
