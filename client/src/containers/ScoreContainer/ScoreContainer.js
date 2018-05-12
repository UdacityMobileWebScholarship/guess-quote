import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ScoreComponent from "../../components/ScoreComponent";
import { sampleAction } from "../../actions/sample";

class ScoreContainer extends PureComponent {
  static displayName = "ScoreContainer";

  componentDidMount() {
    this.props.onSampleAction("This is a score box!");
  }

  render() {
    return (
      <div className="ScoreContainer">
        <ScoreComponent score={this.props.sample.score} />
      </div>
    );
  }
}

ScoreContainer.propTypes = {
  sample: PropTypes.shape({
    score: PropTypes.number
  }).isRequired,
  onSampleAction: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    sample: state.sample
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSampleAction: score => {
      dispatch(sampleAction(score));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScoreContainer);
