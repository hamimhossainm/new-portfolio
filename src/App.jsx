import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Portfolio />
      <About />
      <Resume />
      <Contact />
    </>
  );
};

export default App;
