import React from "react";
import styled from "styled-components";

import SignInForm from "components/sign-in-form/sign-in-form.component";
import SignUpForm from "components/sign-up-form/sign-up-form.component";

function SignInAndSignUp(){
  return (
    <SignInAndSignUpContainer>
      <SignInForm/>
      <SignUpForm/>
    </SignInAndSignUpContainer>
  );
}


const SignInAndSignUpContainer = styled.article`
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-gap:20px;
    align-items:center;

    @media screen and (max-width: 800px){
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 2fr;
    }
    
`;
export default SignInAndSignUp;