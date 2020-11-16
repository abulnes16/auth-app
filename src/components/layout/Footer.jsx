import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 90%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: -80px;
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
