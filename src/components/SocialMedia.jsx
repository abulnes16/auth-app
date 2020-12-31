/* Social media component
   Renders the social media icons for 3rd parties authentication
*/

// React
import React from "react";
// Styled 
import styled from "styled-components";
// Data
import socialMedia from "../constants/social-media";

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 80%;
  margin: 20px auto;
`;

const SocialMedia = () => {
  return (
    <>
      <p className="text-center text-muted">
        or continue with these social profile
      </p>
      <SocialMediaContainer>
        {socialMedia.map((link) => (
          <img width="45" key={link.name} src={link.path} alt={link.name} />
        ))}
      </SocialMediaContainer>
    </>
  );
};

export default SocialMedia;
