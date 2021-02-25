import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import AboutMe from "./pages/AboutMe";
import Things from "./pages/Things";
import MyProjects from "./pages/MyProjects";
import Contact from "./pages/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";

function App() {
  const background = "/images/wallpi.jpg";
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + background})`,
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        height: "111vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <AboutMe />
          </Route>
          <Route component={Things} exact path="/things" />
          <Route component={MyProjects} exact path="/myprojects" />
          <Route component={Contact} exact path="/contact" />
          <Route component={Carousel} exact path="/:id" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
