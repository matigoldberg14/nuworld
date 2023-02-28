import React from "react";
import Body from "./body/Body";
import Footer from "./Footer";
import Header from "./header/Header";

function Main() {
  return (
    <div className="container" id="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default Main;
