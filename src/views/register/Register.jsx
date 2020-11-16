import React from "react";
import {
  RegisterContainer,
  SocialMediaContainer,
  Paragraph,
  RegisterMessageContainer,
} from "./components/RegisterStyles";
import RegisterForm from "./components/RegisterForm";

const Register = () => {
  const socialMedia = [
    { path: "assets/images/Google.svg", name: "Google" },
    { path: "assets/images/Facebook.svg", name: "Facebook" },
    { path: "assets/images/Twitter.svg", name: "Twitter" },
    { path: "assets/images/Github.svg", name: "Github" },
  ];

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
        <SocialMediaContainer>
          {socialMedia.map((link) => (
            <img width="45" key={link.name} src={link.path} alt={link.name} />
          ))}
        </SocialMediaContainer>
        <div className="login-link">
          <p className="text-center text-muted">
            Already a member? <a>Login</a>
          </p>
        </div>
      </div>
    </RegisterContainer>
  );
};

export default Register;
