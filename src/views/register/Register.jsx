/* Register view */

import React from "react";

//Styled components
import {
  Paragraph,
  RegisterMessageContainer,
} from "./components/RegisterStyles";

import AuthContainer from '../../components/AuthContainer';

//Components
import RegisterForm from "./components/RegisterForm";
import SocialMedia from "../../components/SocialMedia";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";

const Register = () => {
  return (
    <AuthContainer>
      <Logo />
      <RegisterMessageContainer>
        <Paragraph className="text-bold">
          Join thousands of learners from around the world
        </Paragraph>
        <Paragraph fontSize="16px">
          Master web development by making real-life projects. There are
          multiple paths for you to choose
        </Paragraph>
      </RegisterMessageContainer>
      <RegisterForm></RegisterForm>
      <div className="register__footer">
        <SocialMedia />
        <div className="login-link">
          <p className="text-center text-muted">
            Already a member?{" "}
            <Link className="link" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </AuthContainer>
  );
};

export default Register;
