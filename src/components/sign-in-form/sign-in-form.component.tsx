import React, { useState }from "react";
import FormInput from "components/form-input/form-input.component";

import { authService, dbService } from "utils/firebase/myfirebase";

import { SignInFomContainer, Title } from "./sign-in-form.styles";
import { useHistory } from "react-router";

function SignInForm(){
  const history = useHistory();
  
  const [ { email, password }, setFormState ] = useState( {
    email: "",
    password: ""
  } );

  const handleChangeFormInput = ( event:React.ChangeEvent<HTMLInputElement> ) => {
    const { name, value } = event.target;
    setFormState( prev => ( { ...prev, [ name ]: value } ) );
  }; 

  const handleLogIn = async ( event:React.FormEvent ) => {      
    event.preventDefault();
    try{
      await authService.signInWithEmailAndPassword( email, password );
      history.push( "/" );
    }catch( error ){
      console.log( error );
    }
    
  };
  


  return(
    <>
      <SignInFomContainer onSubmit={handleLogIn}>
        <Title>Log In With Email And Password</Title>
        <FormInput value={email} onChange={handleChangeFormInput} name="email" type="email" label="Email"/>
        <FormInput value={password} autoComplete="true" onChange={handleChangeFormInput} name="password" type="password" label="Password"/>
        <button type="submit">Log In</button>
      </SignInFomContainer>
    </>
  );
}

export default SignInForm;