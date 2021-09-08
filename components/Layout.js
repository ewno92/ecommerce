import React from "react";
import Nbar from "./Nbar";
const Layout = ({ children }) => {
  return (
    <div>
      <Nbar />
      {children}
    </div>
  );
};

export default Layout;
