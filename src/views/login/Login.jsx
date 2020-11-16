import React from "react";
import { Link } from "react-router-dom";
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
