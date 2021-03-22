import React from 'react';
import { useHistory } from 'react-router';
import styled from "styled-components";

import { useResetUser, useUser } from 'providers/auth/auth';
import { authService } from "utils/firebase/myfirebase";

function Profile() {
  const history = useHistory();
  const user = useUser();
  const resetUser = useResetUser();

  

  return (
    <ProfileContainer>
      <img src={user?.photoURL} alt="profile"/>
      <h2>{user?.displayName}</h2>
      <span>{user?.email}</span>
      <button onClick={() => {
        resetUser();
        authService.signOut();
        history.push( "/" );
      }}> log out</button>
    </ProfileContainer>
  );
}

const ProfileContainer = styled.article`

display:flex;
flex-direction:column;
align-items:center;
  img{
    width:400px;
    height:400px;
    border-radius:50%;
    margin:15px;
  }
  h2{
    font-size:2rem;
    font-weight:bold;
    margin:15px;
  }
  span{
    font-size:2rem;
    margin:15px;
  }
  button{
    height:48px;
    text-transform:uppercase;
    margin:15px;
  }
`;

export default Profile;
