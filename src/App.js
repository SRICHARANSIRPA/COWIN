import "./App.css";
import React, { Component } from "react";
import Login from "./components/Login";
import RegistrationForm from "./components/RegistrationForm";
class App extends Component {
  render() {
    return (
      <div>
        <Login />
        {/* <RegistrationForm state={this.state} /> */}
      </div>
    );
  }
}

export default App;
