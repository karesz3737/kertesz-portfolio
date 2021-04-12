import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Loader from "./components/Loader.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
const Things = lazy(() => import("./pages/Things"));
const About = lazy(() => import("./pages/About"));
const MyProjects = lazy(() => import("./pages/MyProjects"));
const Contact = lazy(() => import("./pages/Contact"));
const Carousel = lazy(() => import("./components/Carousel.jsx"));

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/things">
              <Things />
            </Route>

            <Route exact path="/myprojects">
              <MyProjects />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/aboutme">
              <About />
            </Route>
            <Route exact path="/:id">
              <Carousel />
            </Route>
          </Switch>
        </Suspense>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
