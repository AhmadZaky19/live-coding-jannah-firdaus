import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import User from "./pages";

import { Provider } from "react-redux";
import store from "./stores/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={User} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
