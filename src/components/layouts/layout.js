import React from "react";
// import Layouts components
import Footer from "./footer/footer";
import Header from "./header/header";
function Layouts({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
export default Layouts;
