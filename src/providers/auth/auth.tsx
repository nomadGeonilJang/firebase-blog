import React, { createContext, useContext, useEffect, useState } from "react";
import { authService } from "utils/firebase/myfirebase";
import { User } from "./auth.types";


const AuthContext = createContext<User | null>( {
  displayName: "",
  email: "",
  photoURL: ""
}  );
const AuthLogOutContext = createContext<()=>void | null>( () => {
  //
} );
const InitContext = createContext( false );


function AuthProvider( { children }:{children:React.ReactNode} ){

  const [ user, setUser ] = useState<User | null>( null );
  const [ init, setInit ] = useState( false );

  const resetUser = () => {
    setUser( null );
  };

  useEffect( () => {
    authService.onAuthStateChanged( ( user ) => {
      if( user ){
        setUser( user as User );
      }
      setInit( true );
    } );
  }, [] );




  return (
    <AuthLogOutContext.Provider value={resetUser}>
      <AuthContext.Provider value={user}>
        <InitContext.Provider value={init}>
          {children}
        </InitContext.Provider>
      </AuthContext.Provider>
    </AuthLogOutContext.Provider>
  );
}

export const useUser = () => useContext( AuthContext );
export const useResetUser = () => useContext( AuthLogOutContext );
export const useInit = () => useContext( InitContext );
export default AuthProvider;