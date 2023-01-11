import React from "react";
import Footer from "./Footer";
import Header from "./Header";

import "normalize.css";
import "../assets/css/index.module.scss";

interface Props {
  children: React.ReactNode;
}

function Layout(props: Props) {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
