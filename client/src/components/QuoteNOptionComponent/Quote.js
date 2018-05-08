import React from "react";
import PropTypes from "prop-types";
import "./QuoteNOptionComponent.css";

const Quote = ({ quote }) => {
  return (
    <div>
      <h2 className="quote">{quote}</h2>
    </div>
  );
};

Quote.propTypes = {
  quote: PropTypes.string
};

export default Quote;
