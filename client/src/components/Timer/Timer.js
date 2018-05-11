import React from "react";
import PropTypes from "prop-types";

import "./Timer.css";

/**
 * Timer counts down from timeLimit to 0, calls onFinish when done
 * ```
 * // Defaults - all props are optional
 * <Timer run={true} timeLimit={20} onFinish={() => {}} />
 * ```
 *
 * To stop the Timer, render with `run={false}`
 *
 * To restart the Timer, stop it first.
 * *Even after the Timer has finished.*
 *
 * `timeLimit` can be set when creating <Timer /> or when restarting the Timer.
 * *It will not change if the Timer is already running.*
 *
 * `onFinish` accepts a function to be called when timer reaches 0.
 * *It will not execute if timer is stopped mid run.*
 *
 * @class Timer
 * @extends {React.Component}
 */
class Timer extends React.Component {
  /**
   * Creates an instance of Timer.
   * state.timeLeft: Remaining time, sets to timeLimit on init
   * Starts timer if run=true
   * @param {{run: boolean, onFinish: function, timeLimit: number}} props
   * @memberof Timer
   */
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: Number.parseInt(props.timeLimit, 10)
    };
    this.updateTimer = this.updateTimer.bind(this);
    if (props.run === true) {
      this.startTimer();
    }
  }

  /**
   * Start Timer
   * Start executing updateTimer every 1000ms
   * Stops any existing timers
   */
  startTimer() {
    this.stopTimer();
    this.timerEvent = window.setInterval(this.updateTimer, 1000);
  }

  /**
   * Stop Timer
   * Clear any previous timer
   */
  stopTimer() {
    if (this.timerEvent) {
      window.clearInterval(this.timerEvent);
    }
  }

  /**
   * Update Timer
   * Decrease state.timeLeft by 1 every second
   * Executes props.onFinish when reaches 0
   */
  updateTimer() {
    const timeLeft = this.state.timeLeft - 1;
    if (timeLeft <= 0) {
      this.stopTimer();
      this.props.onFinish();
    }
    this.setState({
      timeLeft
    });
  }

  /**
   * React's render
   * Render state.timeLeft
   */
  render() {
    return <div className="Timer">{this.state.timeLeft}</div>;
  }

  /**
   * React's componentDidUpdate
   * Checks if props.run changed, start/stop Timer accordingly
   * props.run changed from true to false: stop Timer
   * props.run changed from false to true: start Timer. Set state.timeLeft = props.timeLimit
   * @param {{run: boolean, onFinish: function, timeLimit: number}} prevProps
   */
  componentDidUpdate(prevProps) {
    if (this.props.run === true && prevProps.run === false) {
      this.setState({
        timeLeft: Number.parseInt(this.props.timeLimit, 10)
      });
      this.startTimer();
    } else if (this.props.run === false && prevProps.run === true) {
      this.stopTimer();
    }
  }

  /**
   * React's componentWillUnmount
   * Remove any pending timers before unmounting
   */
  componentWillUnmount() {
    this.stopTimer();
  }
}

/**
 * PropType Validation
 * timeLimit: Custom validation, should be number in range [1, 1000]
 * run: should be boolean
 * onFinish: should be function
 */
Timer.propTypes = {
  timeLimit: function(props, propName, componentName) {
    if (typeof props[propName] !== "number") {
      return new Error(
        `Invalid type of "${propName}" supplied to ${componentName}. Validation failed.`
      );
    } else if (props[propName] < 1 || props[propName] > 1000) {
      return new Error(
        `"${propName}=${
          props[propName]
        }" supplied to ${componentName} is not in range [1, 1000]`
      );
    }
  },
  run: PropTypes.bool,
  onFinish: PropTypes.func
};

/**
 * Default Props
 */
Timer.defaultProps = {
  timeLimit: 20,
  run: true,
  onFinish: () => {}
};

export default Timer;
