import React, { PureComponent } from "react";
import "./Home.css";

import SampleContainer from "../../containers/SampleContainer";

class Home extends PureComponent {
  static displayName = "Home";

  render() {
    return (
      <div className="Home container">
        <SampleContainer />
      </div>
    );
  }
}

export default Home;
