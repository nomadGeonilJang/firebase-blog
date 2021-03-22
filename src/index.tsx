import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import App from 'App';
import GlobalStyle from 'components/layout/global.component';
import RootProvider from 'providers/root';

ReactDOM.render(
  <React.StrictMode>
    <RootProvider>
      <BrowserRouter>
        <GlobalStyle/>
        <App />
      </BrowserRouter>
    </RootProvider>
  </React.StrictMode>,
  document.getElementById( 'root' )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
