import React from "react";
import AuthProvider from "./auth/auth";

function RootProvider( { children }:{children:React.ReactNode} ){
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}

export default RootProvider;