import React from "react";
import About from "./AboutPage/About";
import Footer from "./FooterPage/Footer";
import Header from "./Header";
import Home from "./HomePage/Home";
import Portfolio from "./PortfolioPage/Portfolio";
import Servives from "./ServicesPage/Servives";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Servives />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default App;
