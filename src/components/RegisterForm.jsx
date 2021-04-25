import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import DatePicker from "react-date-picker";
import stateContext from "../context/context";
import "../CSS/RegisterForm.css";
class RegisterForm extends Component {
  validateFields = () => {
    const { UIDNumber, Gender, DateofBirth } = this.context;
    return UIDNumber != null && Gender != null && DateofBirth != null;
  };
  logout = () => {
    const {
      handleuserName,
      handleuserId,
      handleEmail,
      handleGender,
      handleUIDNumber,
      handleDateofBirth,
    } = this.context;
    handleGender(null);
    handleUIDNumber(null);
    handleDateofBirth(null);
    handleuserName(null);
    handleuserId(null);
    handleEmail(null);
  };
  handleSubmit = (e) => {
    const { UIDNumber, Gender, DateofBirth } = this.context;
    e.preventDefault();
    if (this.validateFields()) {
      //API Call Data Save
      window.alert("Your Data Saved Successfully!");
      this.logout();
    } else {
      var Message = "";
      if (UIDNumber == null) Message += "\n" + "Please Enter Aadhar Number";
      if (Gender == null) Message += "\n" + "Please Enter Gender";
      if (DateofBirth == null) Message += "\n" + "Please Enter DateofBirth";
      window.alert(Message);
    }
  };

  render() {
    console.log(this.context);
    const { handleGender, handleUIDNumber, handleDateofBirth } = this.context;
    return (
      <div className="RegisterForm effect">
        <Form className="Form">
          <Form.Group>
            <Form.Label>Aadhar Number :</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) =>
                handleUIDNumber(e.target.value === "" ? null : e.target.value)
              }
              placeholder="Enter Aadhar Number"
              required={true}
            />
          </Form.Group>
          <div>
            <Form.Label>Gender : </Form.Label>
            <Form.Group>
              <Form.Check
                inline
                label="Male"
                value="Male"
                type="radio"
                name="Gender"
                onClick={(e) => handleGender(e.target.value)}
              />
              <Form.Check
                inline
                label="Female"
                value="Female"
                type="radio"
                name="Gender"
                onClick={(e) => handleGender(e.target.value)}
              />
              <Form.Check
                inline
                label="Others"
                value="others"
                type="radio"
                name="Gender"
                onClick={(e) => handleGender(e.target.value)}
              />
            </Form.Group>
          </div>
          <Form.Label>Date of Birth :</Form.Label>
          <DatePicker
            value={this.context.DateofBirth}
            onChange={handleDateofBirth}
            required
          />
          <Button
            className="Button"
            variant="primary"
            type="submit"
            onClick={this.handleSubmit}
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
RegisterForm.contextType = stateContext;
export default RegisterForm;
