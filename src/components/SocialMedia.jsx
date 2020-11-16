import React from "react";

import styled from "styled-components";

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 80%;
  margin: 20px auto;
`;

const SocialMedia = () => {
  const socialMedia = [
    { path: "assets/images/Google.svg", name: "Google" },
    { path: "assets/images/Facebook.svg", name: "Facebook" },
    { path: "assets/images/Twitter.svg", name: "Twitter" },
    { path: "assets/images/Github.svg", name: "Github" },
  ];

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
