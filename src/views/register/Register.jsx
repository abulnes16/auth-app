/* Register view */

import React from "react";

//Styled components
import {
  RegisterContainer,
  Paragraph,
  RegisterMessageContainer,
} from "./components/RegisterStyles";

//Components
import RegisterForm from "./components/RegisterForm";
import SocialMedia from "../../components/layout/SocialMedia";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <RegisterContainer>
      <div className="register__header">
        <img src="assets/images/devchallenges.svg" alt="Dev challenge logo" />
      </div>
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
        <p className="text-center text-muted">
          or continue with these social profile
        </p>
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
    </RegisterContainer>
  );
};

export default Register;
