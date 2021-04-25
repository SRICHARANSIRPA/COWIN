import React, { useContext } from "react";
import GoogleButton from "react-google-button";
import { auth, provider } from "../Auth/GoogleAuthentication";
import "../CSS/Login.css";
import stateContext from "../context/context";
import { useHistory } from "react-router-dom";
const Login = () => {
  const { handleuserName, handleuserId, handleEmail } = useContext(
    stateContext
  );
  const history = useHistory();
  const handleSignIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        handleuserName(result.user.displayName);
        handleuserId(result.user.uid);
        handleEmail(result.user.email);
        history.push("/RegistrationForm");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="Login">
      <GoogleButton
        onClick={() => {
          handleSignIn();
        }}
      />
    </div>
  );
};

// class Login extends Component {
//   handleSignIn = () => {
//     auth
//       .signInWithPopup(provider)
//       .then((result) => {
//         this.context.handleuserName(result.user.displayName);
//         this.context.handleuserId(result.user.uid);
//         this.context.handleEmail(result.user.email);
//         history.push("/RegistrationForm");
//         // window.location.reload();
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   render() {
//     return (
//       <div className="Login">
//         <GoogleButton
//           // type="submit"
//           onClick={() => {
//             this.handleSignIn();
//           }}
//         />
//       </div>
//     );
//   }
// }
// Login.contextType = stateContext;

export default Login;
