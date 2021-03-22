import React from "react";
import  { Switch, Route, Redirect } from "react-router-dom";

import Home from "pages/home/home.component";
import Main from "components/layout/main.component";
import { authService } from "utils/firebase/myfirebase";
import SignInAndSignUp from "pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

function RootRouter(){

  const user = authService.currentUser;
  return (
    <Switch>
      <Main>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/auth" render={() => {
          if( user ){
            return <Redirect to="/profile"/>;
          }
          return <SignInAndSignUp/>;
        }}/>        
      </Main>
    </Switch>
  );
}

export default RootRouter;