import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import NavBar from "./modules/NavBar.js";
import Home from "./pages/Home.js";
import Courses from "./pages/Courses.js";
import Resume from "./pages/Resume.js";


import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

/**
 * Define the "App" component
 */
const App = () => {

  return (
    // Add coursework page with links to each class you've taken
    // Add skills
    // Add fun page
    <>
      <NavBar/>
      <Router>
        <Home path="/"/>
        <Courses path="/courses"/>
        <Resume path="/resume"/>
        <NotFound default />
      </Router>

    </>
  );
};

export default App;
