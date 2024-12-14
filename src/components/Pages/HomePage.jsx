import React from "react";
import Nav from "../nav";
import Field from "../Field";
import Home from "../HomeParallax";
import Services from "./Services";
import Gallary from "./Gallary";
import Footer from "./Footer";
const HomePage = () => {
  console.log("home page");
  return (
    <>
      <Nav />
      <Field />
      <Home />
      <Services />
      <Gallary />
      {/* <Footer /> */}
    </>
  );
};

export default HomePage;
