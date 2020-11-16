import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p className="text-light">@abulnes16</p>
      <p className="text-light">devchallenges.io</p>
    </FooterContainer>
  );
};

export default Footer;
