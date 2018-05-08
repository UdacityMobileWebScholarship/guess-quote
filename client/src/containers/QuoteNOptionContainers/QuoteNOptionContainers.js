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

  handleAnswerSelected(e) {
    let selectedOption = JSON.parse(e.currentTarget.value);
    if (selectedOption.is_correct) {
      alert("Your answer is correct");
    }
  }

  render() {
    return (
      <div className="QuoteNOptionContainer">
        {" "}
        {
          <QuoteNOptionComponent
            quoteNOption={this.props.quoteNOptions.quoteNOption}
            onAnswerSelected={this.handleAnswerSelected}
          />
        }
      </div>
    );
  }
}

QuoteNOptionContainer.propTypes = {
  quoteNOptions: PropTypes.shape({
    quoteNOption: PropTypes.shape({
      title: PropTypes.string,
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
