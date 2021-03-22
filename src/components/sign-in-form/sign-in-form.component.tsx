import React, { useState }from "react";
import FormInput from "components/form-input/form-input.component";
import { FaFacebookF, FaGithubAlt, FaGoogle } from "react-icons/fa";

import { authService, dbService, getProvider } from "utils/firebase/myfirebase";

import { SignInButtonGroup, SignInFomContainer, Title } from "./sign-in-form.styles";
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

  const handleSocialLogIn = async ( e:any ) => {
    try {
      const provider = getProvider( e.target.name );
      const result = await authService.signInWithPopup( provider );
      if( result.user ){
        const { displayName, email, photoURL } = result.user;
        const userRef = dbService.doc( `/users/${result.user.uid}` );
        const snapShot = await userRef.get();

        if( !snapShot.exists ){
          const createdAt = new Date().toISOString;
          try {
            await userRef.set( {
              displayName, email, createdAt, photoURL
            } );
          } catch ( error ) {
            console.log( "error creating user", error.message );
          }
        }
      }
      
    } catch ( error ) {
      alert( error.message ); 
    }
   
  };
  


  return(
    <>
      <SignInFomContainer onSubmit={handleLogIn}>
        <Title>Log In With Email And Password</Title>
        <FormInput required value={email} onChange={handleChangeFormInput} name="email" type="email" label="Email"/>
        <FormInput required value={password} autoComplete="true" onChange={handleChangeFormInput} name="password" type="password" label="Password"/>
        <button type="submit">Sign In</button>
      </SignInFomContainer>
      <SignInButtonGroup>
        <button onClick={handleSocialLogIn}name="google" id="google"><FaGoogle/>oogle</button>
        <button onClick={handleSocialLogIn}name="github" id="github"><FaGithubAlt/>Github</button>
        <button onClick={handleSocialLogIn}name="facebook" id="facebook"><FaFacebookF/>Facebook</button>
      </SignInButtonGroup>
    </>
  );
}

export default SignInForm;