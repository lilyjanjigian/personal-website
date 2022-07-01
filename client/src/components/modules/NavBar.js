import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "@reach/router";

const NavBar = () => {
    return (<div className="NavBar-Container">
        <div className="NavBar-Title"/>
        <div className="NavBar-LinkContainer">
        <Link to="/" className="NavBar-Link">
            home
        </Link>
        <Link to="/resume" className="NavBar-Link">
            resume
        </Link>
        <Link to="/courses" className="NavBar-Link">
            courses
        </Link>
        </div>
    </div>)
}

export default NavBar;