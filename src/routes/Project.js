import React from 'react';

import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import HeroImgTo from '../components/HeroImgTo';
import PricingCards from '../components/PricingCards';
import Work from '../components/Work';

const Project = () => {
  return ( 
  <div> 
    <Navbar/>
    <HeroImgTo heading="PROJECTS."  text="Some of my recent works" />
    <PricingCards/>
    <Work/>
    <Footer/>
  </div>
  );
  
};

export default Project;
