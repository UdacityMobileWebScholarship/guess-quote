import React, { PureComponent } from "react";
import "./Home.css";

import SampleContainer from "../../containers/SampleContainer";
import QuoteNOptionContainers from "../../containers/QuoteNOptionContainers";

class Home extends PureComponent {
  static displayName = "Home";

  render() {
    return (
      <div className="Home container">
        <SampleContainer />
        <br />
        <QuoteNOptionContainers />
      </div>
    );
  }
}

export default Home;
