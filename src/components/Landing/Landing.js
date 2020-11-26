import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import About from "../About/About";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Services from '../Services/Services'

function Landing() {
  return (
    <div>
      <Home />
      <About />
      <Services/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Landing;
