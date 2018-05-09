import React, { PureComponent } from "react";
import "./Home.css";

import SampleContainer from "../../containers/SampleContainer";
import ScoreContainer from "../../containers/ScoreContainer";

class Home extends PureComponent {
  static displayName = "Home";

  render() {
    return (
      <div className="Home container">
        <SampleContainer />
        <ScoreContainer />
      </div>
    );
  }
}

export default Home;
