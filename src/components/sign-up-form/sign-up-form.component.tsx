import React, { useState }from "react";
import FormInput from "components/form-input/form-input.component";
import { SignInFomContainer, Title } from "./sign-up-form.styles";

function SignUpForm(){
  
  const [ { displayName, email, password }, setFormState ] = useState( {
    displayName: "",
    email: "",
    password: ""
  } );

  const handleChangeFormInput = ( event:React.ChangeEvent<HTMLInputElement> ) => {
    const { name, value } = event.target;
    setFormState( prev => ( { ...prev, [ name ]: value } ) );
  }; 
  


  return(
    <>
      <SignInFomContainer>
        <Title>Sign Up With Your Email and Password</Title>
        <FormInput value={displayName} onChange={handleChangeFormInput} name="displayName" type="text" label="Display Name"/>
        <FormInput value={email} onChange={handleChangeFormInput} name="email" type="email" label="Email"/>
        <FormInput value={password} autoComplete="true" onChange={handleChangeFormInput} name="password" type="password" label="Password"/>
      </SignInFomContainer>
    </>
  );
}

export default SignUpForm;