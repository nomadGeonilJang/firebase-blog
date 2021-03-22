import React from "react";

type MainProps = {
    children: React.ReactNode
}
function Main( { children }:MainProps ){
  return <main>{children}</main>;
}

export default Main;