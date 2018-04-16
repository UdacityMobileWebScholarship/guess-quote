import React from "react";
import PropTypes from "prop-types";

const SampleComponent = ({ message }) => {
  return <div className="SampleComponent">{message}</div>;
};

SampleComponent.propTypes = {
  message: PropTypes.string
};

export default SampleComponent;
