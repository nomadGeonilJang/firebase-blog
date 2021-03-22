
import React from 'react';

import RootRouter from 'routes/root';
import Footer from 'components/layout/footer.component';
import MainNavBar from 'components/layout/navbar.component';
import { useInit } from 'providers/auth/auth';

function App() {
  const init = useInit();
  return (
    <>
      <MainNavBar/>
      {init && <RootRouter/>}
      <Footer/>
    </>
  );
}

export default App;
