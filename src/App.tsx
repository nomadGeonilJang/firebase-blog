
import React, { useEffect }from 'react';
import { authService } from "utils/firebase/myfirebase";

import RootRouter from 'routes/root';

import Footer from 'components/layout/footer.component';
import MainNavBar from 'components/layout/navbar.component';
function App() {
  useEffect( () => {
    authService.onAuthStateChanged( ( user ) => {
      console.log( user );
      if( user ){console.log( user );}
      
    } );
  }, [] );
  return (
    <>
      <MainNavBar/>
      <RootRouter/>
      <Footer/>
    </>
  );
}

export default App;
