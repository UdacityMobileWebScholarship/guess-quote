import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import QuoteNOptionComponent from "../../components/QuoteNOptionComponent";
import {
  setQuoteNOptions,
  setSelectedAnswer
} from "../../actions/quoteNOptions";

class QuoteNOptionContainer extends PureComponent {
  static displayName = "QuoteNOptionContainer";

  componentDidMount() {
    this.props.onFetchQuoteNOptionAction();
  }

  handleAnswerSelected(e) {
    let selectedOption = JSON.parse(e.currentTarget.dataset.id);
    this.props.setSelectedAnswerAction(selectedOption);
  }

  render() {
    return (
      <div className="QuoteNOptionContainer">
        {" "}
        {
          <QuoteNOptionComponent
            quoteNOption={this.props.quoteNOptions.quoteNOption}
            onAnswerSelected={this.handleAnswerSelected.bind(this)}
            selectedAnswer={this.props.quoteNOptions.selectedAnswer}
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
    }).isRequired,
    selectedAnswer: PropTypes.shape({
      value: PropTypes.string.isRequired,
      is_correct: PropTypes.bool.isRequired
    }).isRequired
  }).isRequired,
  onFetchQuoteNOptionAction: PropTypes.func.isRequired,
  setSelectedAnswerAction: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    quoteNOptions: state.quoteNOptions,
    selectedAnswer: state.selectedAnswer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchQuoteNOptionAction: () => {
      dispatch(setQuoteNOptions());
    },
    setSelectedAnswerAction: ans => {
      dispatch(setSelectedAnswer(ans));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  QuoteNOptionContainer
);
