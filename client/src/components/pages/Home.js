import React, { useState, useEffect } from "react";
import "./Home.css";
import { get } from "../../utilities.js";

const Home = (props) => {
    // credits to https://alvarotrigo.com/blog/css-animations-scroll/ for reveal function:
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      window.addEventListener("scroll", reveal);


    {/* TODO: add link to course 6-3, xc bio, MITAS website? */}
  return (
    <div className="Home-Background">
    
    <div className="Home-TitleContainer">
    <div className="Home-AvatarContainer">
        <div className="Home-Avatar"/>
    </div>
    <div className="Home-Title">
        Lily Janjigian
    </div>
    
    </div>
    

    <div className="Home-TextBox reveal fade-bottom">
        <div className="Home-Text">
        Welcome to my website! I'm Lily, a rising junior at MIT from Rye Brook, NY pursuing a BS in computer science (course 6-3).
        </div>
        <div className="Home-Text">
        I'm excited about applying the skills I've developed during my time at MIT to solve real-world problems and pursue a career in software development. Through my coursework and work experience, I have expanded my toolbox as a programmer and learned new approaches to problem solving.
        </div>
        <div className="Home-Text">
        Outside of my classes, I'm on the varsity track and cross country teams and I'm a member of the Armenian Society at MIT. I also love listening to music, being in nature, and doing people's eyebrows! Click the links above to learn more about me :)
        </div>
    </div>
        
    </div>
  );
};

export default Home;
