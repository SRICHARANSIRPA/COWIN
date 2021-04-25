import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import DatePicker from "react-date-picker";
import stateContext from "../context/context";
import "../CSS/RegisterForm.css";
class RegisterForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    console.log(this.context);
    const { handleGender, handleUIDNumber, handleDateofBirth } = this.context;
    return (
      <div className="RegisterForm effect">
        <Form className="Form">
          <Form.Group>
            <Form.Label>Aadhar Number</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => handleUIDNumber(e.target.value)}
              placeholder="Enter Aadhar Number"
            />
          </Form.Group>
          <div className="mb-3">
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
          </div>
          <DatePicker
            value={this.context.DateofBirth}
            onChange={handleDateofBirth}
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
