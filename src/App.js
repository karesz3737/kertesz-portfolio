import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import AboutMe from "./pages/AboutMe";
import Things from "./pages/Things";
import MyProjects from "./pages/MyProjects";
import Contact from "./pages/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import ControlledCarousel from "./components/Carousel";

function App() {
  const background = "/images/pexels-henry.jpg";
  return (
    <div
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + background})` }}
    >
      <Router>
        <Navigation />
        <Route exact path="/">
          <AboutMe />
        </Route>
        <Route component={Things} exact path="/things" />
        <Route component={MyProjects} exact path="/myprojects" />
        <Route component={Contact} exact path="/contact" />
        <Route component={ControlledCarousel} exact path="/item" />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
