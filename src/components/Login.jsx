import React, { Component } from "react";
import GoogleButton from "react-google-button";
import { auth, provider } from "../Auth/GoogleAuthentication";
import "../CSS/Login.css";
export default class Login extends Component {
  handleSignIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result.user.displayName);
        console.log(result.user.uid);
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
    // auth
    //   .signInWithPopUp(provider)
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  render() {
    return (
      <div className="Login">
        <GoogleButton
          onClick={() => {
            this.handleSignIn();
          }}
        />
      </div>
    );
  }
}
