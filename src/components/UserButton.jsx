/* User button component
  User header button for logout and see profile. 
  props: 
    - img : User image 

*/

// React
import React from "react";

// Styled
import styled from "styled-components";

//Icons
import { FaCaretSquareDown } from "react-icons/fa";

const UserButtonContainer = styled.div`
  .user__img {
    width: 40px;
    height: 40px;
    border-radius: 8px;
  }

  .user__name {
    display: none;
  }

  .btn-dropdown {
    display: none;
  }
`;

const UserButton = ({ img, name }) => {
  return (
    <UserButtonContainer>
      <img
        className="user__img"
        src={img || "assets/images/image.jpg"}
        alt="User profile pic"
      />
      <span className="user__name">{name}</span>
      <span className="btn-dropdown">
        <FaCaretSquareDown  />
      </span>
    </UserButtonContainer>
  );
};

export default UserButton;
