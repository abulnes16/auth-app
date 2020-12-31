/* Profile display component
  Renders the user data that is logged
  props: 
    -user : The current logged user
*/

// React
import React from "react";

// Styled
import styled from "styled-components";

const ProfileDisplayContainer = styled.div`
  .profile__header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left-content {
      width: 50%;
    }

    .header__title {
      font-size: 24px;
      font-weight: 400;
      margin-bottom: 0;
    }

    .header__info {
      font-size: 13px;
      font-weight: 500;
      margin-top: 5px;
    }

    .btn-edit {
      border: 1px solid #828282;
      box-sizing: border-box;
      border-radius: 12px;
      padding: 0.6em 2em;
      background-color: transparent;
      color: #828282;
      font-size: 16px;
    }
  }

  .profile__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e0e0e0;
    padding: 0.8em 0.6em;

    p {
      text-transform: uppercase;
    }

    img {
      width: 72px;
      height: 72px;
      border-radius: 8px;
    }
  }
`;

const ProfileDisplay = () => {
  return (
    <ProfileDisplayContainer>
      <div className="profile__header">
        <div className="left-content">
          <h2 className="header__title">Profile</h2>
          <p className="header__info text-muted">
            Some info may be visible to other people
          </p>
        </div>
        <button className="btn-edit">Edit</button>
      </div>
      <div className="profile__item">
        <p className="text-muted">Photo</p>
        <img width="70" src="assets/images/image.jpg" alt="User profile pic" />
      </div>
      <div className="profile__item">
        <p className="text-muted">Name</p>
        Xanthe Neal
      </div>
      <div className="profile__item">
        <p className="text-muted">Bio</p>I am a software developer
      </div>
      <div className="profile__item">
        <p className="text-muted">Email</p>
        xanthe.neal@gmail.com
      </div>
      <div className="profile__item">
        <p className="text-muted">Password</p>
        *******************
      </div>
    </ProfileDisplayContainer>
  );
};

export default ProfileDisplay;
