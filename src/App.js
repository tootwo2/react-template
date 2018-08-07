import React from "react";
import { ConnectedRouter } from "connected-react-router";
import "./App.css";

import BasicLayout from "./containers/BasicLayout";

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <BasicLayout />
    </ConnectedRouter>
  );
};

export default App;
