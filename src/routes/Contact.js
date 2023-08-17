import React from 'react';

import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import HeroImgTo from '../components/HeroImgTo';
import Form from '../components/Form';

const Contact = () => {
  return (
    <div>
       <Navbar/>
       <HeroImgTo heading="CONTACT." text="lets have a chat"/>
       <Form/>
    <Footer/>
    </div>
  );
};

export default Contact;

