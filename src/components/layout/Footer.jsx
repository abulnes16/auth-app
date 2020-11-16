import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 90%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  margin: 0 auto;
  bottom: -80px;
  right: 0;
  left: 0;

  @media screen and (min-width: 768px){
    width: 55%;
    bottom: -20px;
  }

  @media screen and (min-width: 1024px){
    width: 34%;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <a href="https://github.com/abulnes16" className="link text-light">
        @abulnes16
      </a>
      <a
        href="https://devchallenges.io/challenges/N1fvBjQfhlkctmwj1tnw"
        className="link text-light"
      >
        devchallenges.io
      </a>
    </FooterContainer>
  );
};

export default Footer;
