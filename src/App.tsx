import React from 'react';


import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import OurServicesAnimated from './components/features/OurServicesAnimated/OurServicesAnimated';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      
      <Hero />
      
      <OurServicesAnimated />
      <WhyChooseUs />
      <Testimonials />
     
      <Contact />
      <Footer />
    </>
  );
};

export default App;