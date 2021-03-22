import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { authService } from "utils/firebase/myfirebase";
import color from "utils/them/color";
function MainNavBar(){

  const user = authService.currentUser;
  return <NavBar>
    <header>
      <NavLink to="/">
        <h1>Welcome.</h1>
      </NavLink>
      <ul>
        <NavLink to="/"><span>home</span></NavLink>
        {user && (
          <>
            <NavLink to="/post"><span>post</span></NavLink>
            <NavLink to="/profile"><span>profile</span></NavLink>
          </>
        )}
        {!user && <NavLink to="/auth"><span>login</span></NavLink>}
      </ul>
    </header>
  </NavBar>;
}

const NavBar = styled.nav`
    height:100px;
    padding:10px;
    text-transform:uppercase;
    background-color:${color.blue};
    color:${color.yellow};
    header{
        width:100%;
        height:100%;
        display:flex;
        justify-content:space-between;
        align-items:center;
        
    }
`;
const NavLink = styled( Link )`
    span{
        padding:10px;
    }
`;


export default MainNavBar;