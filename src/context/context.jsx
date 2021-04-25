import React, { Component } from "react";

const stateContext = React.createContext();

export class StateProvider extends Component {
  state = {
    userName: "charan",
    Gender: null,
    UIDNumber: null,
    DateofBirth: null,
  };

  handleuserName = (userName) => {
    this.setState({ userName });
  };

  handleGender = (Gender) => {
    this.setState({ Gender });
  };

  handleUIDNumber = (UIDNumber) => {
    this.setState({ UIDNumber });
  };

  convertDate = (str) => {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  };
  handleDateofBirth = (DateofBirth) => {
    // const DOB = this.convertDate(DateofBirth);
    this.setState({ DateofBirth });
  };
  render() {
    const { userName, Gender, UIDNumber, DateofBirth } = this.state;
    const {
      handleuserName,
      handleGender,
      handleUIDNumber,
      handleDateofBirth,
    } = this;
    return (
      <stateContext.Provider
        value={{
          userName,
          Gender,
          UIDNumber,
          DateofBirth,
          handleuserName,
          handleGender,
          handleUIDNumber,
          handleDateofBirth,
        }}
      >
        {this.props.children}
      </stateContext.Provider>
    );
  }
}

export default stateContext;
