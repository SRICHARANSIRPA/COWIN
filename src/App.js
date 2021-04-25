import "./App.css";
import React, { Component } from "react";
import Login from "./components/Login";
import RegistrationForm from "./components/RegistrationForm";
import stateContext from "./context/context";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/Login">
              <Login />
            </Route>
            <Route exact path="/RegistrationForm">
              {this.context.userId ? (
                <RegistrationForm />
              ) : (
                <Redirect to="/Login" />
              )}
            </Route>
            <Redirect to="/Login" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
App.contextType = stateContext;
export default App;
