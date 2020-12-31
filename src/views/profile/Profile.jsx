/* Profile view
   Renders the profile view in app
*/

// React
import React from "react";

// Components
import Header from "../../components/layout/Header";
import ProfileDisplay from "./components/ProfileDisplay";

// Styled
import { ProfileTitleContainer } from "./components/ProfileStyles";

const Profile = () => {
  return (
    <>
      <Header />
      <ProfileTitleContainer>
        <h1>Personal info</h1>
        <h4>Basic info, like your name and photo</h4>
      </ProfileTitleContainer>
      <ProfileDisplay />
    </>
  );
};

export default Profile;
