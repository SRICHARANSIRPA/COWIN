import React, { Component } from "react";

const stateContext = React.createContext();

export class StateProvider extends Component {
  state = {
    userName: null,
    userId: null,
    Email: null,
    Gender: null,
    UIDNumber: null,
    DateofBirth: null,
  };

  handleuserName = (userName) => {
    this.setState({ userName });
  };

  handleuserId = (userId) => {
    this.setState({ userId });
  };

  handleEmail = (Email) => {
    this.setState({ Email });
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
    const {
      userName,
      userId,
      Email,
      Gender,
      UIDNumber,
      DateofBirth,
    } = this.state;
    const {
      handleuserName,
      handleuserId,
      handleEmail,
      handleGender,
      handleUIDNumber,
      handleDateofBirth,
    } = this;
    return (
      <stateContext.Provider
        value={{
          userName,
          userId,
          Email,
          Gender,
          UIDNumber,
          DateofBirth,
          handleuserName,
          handleuserId,
          handleEmail,
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
