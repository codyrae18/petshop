import React, { Component, Fragment } from "react";
import Home from "./components/Home";
import FormApplication from "./components/FormApplication";
import CustomNav from "./components/CustomNav";
import Current from "./components/Current";
import SignUp from "./components/SignUp";
import "./App.css";

import { Switch, Route, withRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <CustomNav />
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/form" render={() => <FormApplication />} />
            <Route exact path="/current" render={() => <Current />} />
            <Route exact path="/customnav" render={() => <CustomNav />} />
            <Route exact path="/signup" render={() => <SignUp />} />
          </Switch>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(App);
