import React, { Component } from "react";
import RegisterForm from "./RegisterForm";
import "../CSS/RegistrationForm.css";
export default class RegistrationForm extends Component {
  render() {
    return (
      <div className="RegistrationForm">
        <h6>Register For Vaccination</h6>
        <RegisterForm />
      </div>
    );
  }
}
