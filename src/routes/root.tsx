import React from "react";
import  { Switch, Route, Redirect } from "react-router-dom";

import Home from "pages/home/home.component";
import Main from "components/layout/main.component";

import SignInAndSignUp from "pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { useUser } from "providers/auth/auth";
import Profile from "pages/profile/profile.component";
import Post from "pages/post/post.component";

function RootRouter(){

  const user = useUser();

  return (
    <Switch>
      <Main>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/post">
          <Post/>
        </Route>
        <Route path="/auth" render={() => {
          if( user )return <Redirect to="/profile"/>;
          return <SignInAndSignUp/>;
        }}/>   
        <Route path="/profile" render={() => {
          if( !user )return <Redirect to="/"/>;
          return <Profile/>;
        }}/>
                  
      </Main>
    </Switch>
  );
}

export default RootRouter;