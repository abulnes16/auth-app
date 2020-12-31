/* Footer component 
   App footer for dev challenges. 
*/

// React
import React from "react";

// Router
import { useLocation } from "react-router-dom";

// Style components
import styled from "styled-components";

// Footer container styled component
const FooterContainer = styled.footer`
  width: 90%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  margin: 0 auto;
  bottom: ${(props) => (props.login ? "-15em" : "-80px")};
  right: 0;
  left: 0;

  @media screen and (min-width: 768px) {
    width: 55%;
    bottom: -20px;
  }

  @media screen and (min-width: 1024px) {
    width: 34%;
  }
`;

const Footer = () => {
  const location = useLocation();
  const isInLogin = location.pathname === "/login";


  return (
    <FooterContainer login={isInLogin}>
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
