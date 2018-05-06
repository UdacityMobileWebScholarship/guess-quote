import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import QuoteNOptionComponent from "../../components/QuoteNOptionComponent";
import { setQuoteNOptions } from "../../actions/quoteNOptions";

class QuoteNOptionContainer extends PureComponent {
  static displayName = "QuoteNOptionContainer";

  componentDidMount() {
    this.props.onFetchQuoteNOptionAction();
  }

  render() {
    return (
      <div className="QuoteNOptionContainer">
        {" "}
        {<QuoteNOptionComponent question={this.props.quoteNOptions.question} />}
      </div>
    );
  }
}

QuoteNOptionContainer.propTypes = {
  quoteNOptions: PropTypes.shape({
    question: PropTypes.shape({
      title: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string.isRequired,
          is_correct: PropTypes.bool.isRequired
        })
      ).isRequired
    }).isRequired
  }).isRequired,
  onFetchQuoteNOptionAction: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    quoteNOptions: state.quoteNOptions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchQuoteNOptionAction: () => {
      dispatch(setQuoteNOptions());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  QuoteNOptionContainer
);
