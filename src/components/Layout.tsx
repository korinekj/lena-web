import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

import "normalize.css";
import "../assets/css/index.scss";

interface Props {
  children: React.ReactNode;
}

function Layout(props: Props) {
  const { children } = props;

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
