/* Header component
  App header before authentication
*/

// React
import React from "react";
import styled from "styled-components";

// Components
import Logo from "../Logo";
import UserButton from "../UserButton";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <UserButton />
    </HeaderContainer>
  );
};

export default Header;
