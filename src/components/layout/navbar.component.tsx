import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useUser } from "providers/auth/auth";
import color from "utils/them/color";
function MainNavBar(){

  const user = useUser();
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
    text-transform:uppercase;
    background-color:${color.blue};
    color:${color.yellow};
    
    position:fixed;
    width:100%;
    header{
        height:100%;
        padding:10px;
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