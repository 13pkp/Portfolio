import React from 'react';

import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import HeroImgTo from "../components/HeroImgTo";
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
       <Navbar/>
       <HeroImgTo heading="ABOUT." text=" Im a React front-end Devloper."  />
       <AboutContent/>
    <Footer/>
    </div>
  );
};

export default About;
