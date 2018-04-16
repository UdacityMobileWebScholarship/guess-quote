import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import RouteManager from "./RouteManager";
import store from "./core/store";

import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <App>
      <RouteManager />
    </App>
  </Provider>,
  document.getElementById("root")
);
