import React from 'react';
import { useHistory } from 'react-router';

import { useResetUser, useUser } from 'providers/auth/auth';
import { authService } from "utils/firebase/myfirebase";

function Profile() {
  const history = useHistory();
  const user = useUser();
  const resetUser = useResetUser();

  

  return (
    <div>
      <div>{user?.email}</div>
      <button onClick={() => {
        authService.signOut();
        resetUser();
        history.push( "/" );
      }}> log out</button>
    </div>
  );
}

export default Profile;
