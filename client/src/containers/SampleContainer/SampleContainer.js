import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import SampleComponent from "../../components/SampleComponent";
import { sampleAction } from "../../actions/sample";

class SampleContainer extends PureComponent {
  static displayName = "SampleContainer";

  componentDidMount() {
    this.props.onSampleAction("This is a sample app!");
  }

  render() {
    return (
      <div className="SampleContainer">
        <SampleComponent message={this.props.sample.message} />
      </div>
    );
  }
}

SampleContainer.propTypes = {
  sample: PropTypes.shape({
    message: PropTypes.string
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
    onSampleAction: message => {
      dispatch(sampleAction(message));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SampleContainer);
