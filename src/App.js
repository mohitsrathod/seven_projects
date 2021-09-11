import React from "react";
import "./App.css";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import styled from "styled-components";
import Footer from "./Footer";
import About from "./About";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact="/" path="/">
            <Header />
            <Home />
            {/* <Footer /> */}
          </Route>

          <Route path="/aboutme">
            <Header />
            <About />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
