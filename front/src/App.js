import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Things from "./pages/Things";
import MyProjects from "./pages/MyProjects";
import Contact from "./pages/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import About from "./pages/About";

function App() {
  return (
    <div
      style={{
        backgroundPosition: "center bottom",
        backgroundAttachment: "fixed",
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route component={Things} exact path="/things" />
          <Route component={MyProjects} exact path="/myprojects" />
          <Route component={Contact} exact path="/contact" />
          <Route exact path="/aboutme" component={About} />
          <Route component={Carousel} exact path="/:id" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
