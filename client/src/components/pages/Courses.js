import React, { useState, useEffect } from "react";
import { get } from "../../utilities.js";
import "./Courses.css";

const Courses = (props) => {
  return (<>
    <div className="Courses-Background">
      <div className="Courses-TitleContainer">
      <div className="Courses-Title">
          My MIT Coursework
        </div>
      <div className="Courses-SubTitle">
        Course descriptions from <a href="https://registrar.mit.edu/">MIT Registrar</a>
        {/* https://registrar.mit.edu/ */}
      </div>
      </div>
      
        <div className="Courses-TextBox">
        <ul>
        <div class="dropdown">
          <span><li>6.031 (now 6.1020) - Elements of Software Construction</li></span>
          <div class="dropdown-content">
          <p>Introduces fundamental principles and techniques of software development: how to write software that is safe from bugs, easy to understand, and ready for change. Topics include specifications and invariants; testing, test-case generation, and coverage; abstract data types and representation independence; design patterns for object-oriented programming; concurrent programming, including message passing and shared memory concurrency, and defending against races and deadlock; and functional programming with immutable data and higher-order functions. Includes weekly programming exercises and larger group programming projects.</p>
          </div>
        </div>
        </ul>
        </div>

        <div className="Courses-TextBox">
        <ul>
        <div class="dropdown">
          <span><li>6.08 (now 6.9010) - Introduction to EECS via Interconnected Embedded Systems</li></span>
          <div class="dropdown-content">
          <p>Introduction to embedded systems in the context of connected devices, wearables, and the "Internet of Things" (IoT). Topics include microcontrollers, energy utilization, algorithmic efficiency, interfacing with sensors, networking, cryptography, and local versus distributed computation. Students design, make, and program an Internet-connected wearable or handheld device. In the final project, student teams design and demo their own server-connected IoT system.</p>
          </div>
        </div>
        </ul>
        </div>

        <div className="Courses-TextBox">
        <ul>
        <div class="dropdown">
          <span><li>6.036 (now 6.3900) - Introduction to Machine Learning</li></span>
          <div class="dropdown-content">
          <p>Introduces principles, algorithms, and applications of machine learning from the point of view of modeling and prediction; formulation of learning problems; representation, over-fitting, generalization; clustering, classification, probabilistic modeling; and methods such as support vector machines, hidden Markov models, and neural networks.</p>
          </div>
        </div>
        </ul>
        </div>

        <div className="Courses-TextBox">
        <ul>
        <div class="dropdown">
          <span><li>6.006 (now 6.1210) - Introduction to Algorithms</li></span>
          <div class="dropdown-content">
          <p>Introduction to mathematical modeling of computational problems, as well as common algorithms, algorithmic paradigms, and data structures used to solve these problems. Emphasizes the relationship between algorithms and programming, and introduces basic performance measures and analysis techniques for these problems.</p>
          </div>
        </div>
        </ul>
        </div>

        <div className="Courses-TextBox">
        <ul>
        <div class="dropdown">
          <span><li>6.009 (now 6.1010) - Fundamentals of Programming</li></span>
          <div class="dropdown-content">
          <p>Introduces fundamental concepts of programming. Designed to develop skills in applying basic methods from programming languages to abstract problems. Topics include programming and Python basics, computational concepts, software engineering, algorithmic techniques, data types, and recursion.  Lab component consists of software design, construction, and implementation of design.</p>
          </div>
        </div>
        </ul>
        </div>

        <div className="Courses-TextBox">
        <ul>
        <div class="dropdown">
          <span><li>6.042 (now 6.1200) - Mathematics for Computer Science</li></span>
          <div class="dropdown-content">
          <p>Elementary discrete mathematics for science and engineering, with a focus on mathematical tools and proof techniques useful in computer science. Topics include logical notation, sets, relations, elementary graph theory, state machines and invariants, induction and proofs by contradiction, recurrences, asymptotic notation, elementary analysis of algorithms, elementary number theory and cryptography, permutations and combinations, counting tools, and discrete probability.</p>
          </div>
        </div>
        </ul>
        </div>

        <div className="Courses-TextBox">
        <ul>
        <div class="dropdown">
          <span><li>6.0002 (now 6.100B) - Introduction to Computational Thinking and Data Science</li></span>
          <div class="dropdown-content">
          <p>Provides an introduction to using computation to understand real-world phenomena. Topics include plotting, stochastic programs, probability and statistics, random walks, Monte Carlo simulations, modeling data, optimization problems, and clustering.</p>
          </div>
        </div>
        </ul>
        </div>

        <div className="Courses-TextBox">
        <ul>
        <div class="dropdown">
          <span><li>6.0001 (now 6.100A) - Introduction to Computer Science Programming in Python</li></span>
          <div class="dropdown-content">
          <p>Introduction to computer science and programming for students with little or no programming experience. Students develop skills to program and use computational techniques to solve problems. Topics include the notion of computation, Python, simple algorithms and data structures, testing and debugging, and algorithmic complexity.</p>
          </div>
        </div>
        </ul>
        </div>

        <div className="Courses-TextBox">
        <ul>
        <div class="dropdown">
          <span><li>8.02 - Physics II</li></span>
          <div class="dropdown-content">
          <p>Introduction to electromagnetism and electrostatics: electric charge, Coulomb's law, electric structure of matter; conductors and dielectrics. Concepts of electrostatic field and potential, electrostatic energy. Electric currents, magnetic fields and Ampere's law. Magnetic materials. Time-varying fields and Faraday's law of induction. Basic electric circuits. Electromagnetic waves and Maxwell's equations. Subject taught using the TEAL (Technology Enabled Active Learning) studio format which utilizes small group interaction and current technology to help students develop intuition about, and conceptual models of, physical phenomena.</p>
          </div>
        </div>
        </ul>
        </div>

        <div className="Courses-TextBox">
        <ul>
        <div class="dropdown">
          <span><li>8.01 - Physics I</li></span>
          <div class="dropdown-content">
          <p>Introduces classical mechanics. Space and time: straight-line kinematics; motion in a plane; forces and static equilibrium; particle dynamics, with force and conservation of momentum; relative inertial frames and non-inertial force; work, potential energy and conservation of energy; kinetic theory and the ideal gas; rigid bodies and rotational dynamics; vibrational motion; conservation of angular momentum; central force motions; fluid mechanics. Subject taught using the TEAL (Technology-Enabled Active Learning) format which features students working in groups of three, discussing concepts, solving problems, and doing table-top experiments with the aid of computer data acquisition and analysis.</p>
          </div>
        </div>
        </ul>
        </div>

        <div className="Courses-TextBox">
        <ul>
        <div class="dropdown">
          <span><li>18.02A - Calculus</li></span>
          <div class="dropdown-content">
          <p>Calculus of several variables. Vector algebra in 3-space, determinants, matrices. Vector-valued functions of one variable, space motion. Scalar functions of several variables: partial differentiation, gradient, optimization techniques. Double integrals and line integrals in the plane; exact differentials and conservative fields; Green's theorem and applications, triple integrals, line and surface integrals in space, Divergence theorem, Stokes' theorem; applications.</p>
          </div>
        </div>
        </ul>
        </div>

        <div className="Courses-TextBox">
        <ul>
        <div class="dropdown">
          <span><li>18.01A - Calculus</li></span>
          <div class="dropdown-content">
          <p>Six-week review of one-variable calculus, emphasizing material not on the high-school AB syllabus: integration techniques and applications, improper integrals, infinite series, applications to other topics, such as probability and statistics, as time permits.</p>
          </div>
        </div>
        </ul>
        </div>

        <div className="Courses-TextBox">
        <ul>
        <div class="dropdown">
          <span><li>3.091 - Introduction to Solid-State Chemistry</li></span>
          <div class="dropdown-content">
          <p>Basic principles of chemistry and their application to engineering systems. The relationship between electronic structure, chemical bonding, and atomic order. Characterization of atomic arrangements in crystalline and amorphous solids: metals, ceramics, semiconductors, and polymers. Topical coverage of organic chemistry, solution chemistry, acid-base equilibria, electrochemistry, biochemistry, chemical kinetics, diffusion, and phase diagrams. Examples from industrial practice (including the environmental impact of chemical processes), from energy generation and storage (e.g., batteries and fuel cells), and from emerging technologies (e.g., photonic and biomedical devices).</p>
          </div>
        </div>
        </ul>
        </div>

        <div className="Courses-TextBox">
        <ul>
        <div class="dropdown">
          <span><li>WGS.101 - Introduction to Women's and Gender Studies</li></span>
          <div class="dropdown-content">
          <p>Drawing on multiple disciplines - such as literature, history, economics, psychology, philosophy, political science, anthropology, media studies and the arts - to examine cultural assumptions about sex, gender, and sexuality. Integrates analysis of current events through student presentations, aiming to increase awareness of contemporary and historical experiences of women, and of the ways sex and gender interact with race, class, nationality, and other social identities. Students are introduced to recent scholarship on gender and its implications for traditional disciplines.</p>
          </div>
        </div>
        </ul>
        </div>

        <div className="Courses-TextBox">
        <ul>
        <div class="dropdown">
          <span><li>WGS.220 - Women and Gender in the Middle East and North Africa</li></span>
          <div class="dropdown-content">
          <p>Provides an overview of key issues and themes in the study of women and gender relations in the Middle East and North Africa. Includes readings from a variety of disciplines, e.g., history, anthropology, sociology, literature, religious studies, and media studies. Addresses themes such as the relationship between the concepts of nation and gender; women's citizenship; Middle Eastern women's activism and the involvement of their Western "sisters" to this movement; gendered interpretations of the Qur'an and the example of the Prophet Muhammad; and the three H's of Orientalism (hijab, harem, and hamam).</p>
          </div>
        </div>
        </ul>
        </div>

        <div className="Courses-TextBox">
        <ul>
        <div class="dropdown">
          <span><li>21M.361 - Electronic Music Composition I</li></span>
          <div class="dropdown-content">
          <p>Students develop basic skills in composition through weekly assignments focusing on sampling and audio processing. Source materials include samples of urban/natural environments, electronically generated sounds, inherent studio/recording noise, and pre-existing recordings. Audio processing includes digital signal processing (DSP) and analog devices. Covers compositional techniques, including mixing, algorithms, studio improvisation, and interaction. Students critique each other's work and give informal presentations on recordings drawn from sound art, experimental electronica, conventional and non-conventional classical electronic works, and popular music. Covers technology, math, and acoustics in varying detail.</p>
          </div>
        </div>
        </ul>
        </div>

        <div className="Courses-TextBox">
        <ul>
        <div class="dropdown">
          <span><li>24.900 - Introduction to Linguistics</li></span>
          <div class="dropdown-content">
          <p>Studies what is language and what does knowledge of a language consist of. It asks how do children learn languages and is language unique to humans; why are there many languages; how do languages change; is any language or dialect superior to another; and how are speech and writing related. Context for these and similar questions provided by basic examination of internal organization of sentences, words, and sound systems. Assumes no prior training in linguistics.</p>
          </div>
        </div>
        </ul>
        </div>

            {/* <a href="#myLink">6.031</a> - Elements of Software Construction */}
        </div>
        </>
  );
};

export default Courses;
