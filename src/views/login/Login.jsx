/* Login view 
   Renders the login view in app. 
*/

// React
import React from "react";
// Router
import { Link } from "react-router-dom";

// Components
import AuthContainer from "../../components/AuthContainer";
import Logo from "../../components/Logo";
import SocialMedia from "../../components/SocialMedia";
import LoginForm from "./components/LoginForm";

const Login = () => {
  return (
    <AuthContainer login={true}>
      <Logo />
      <p className="text-bold">Login</p>
      <LoginForm />
      <SocialMedia />
      <div className="text-center">
        <p className="text-muted text-light">
          Don't have an account yet?{" "}
          <Link className="link" to="/">
            Register
          </Link>
        </p>
      </div>
    </AuthContainer>
  );
};

export default Login;
