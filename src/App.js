import React, { useState } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import { SliderData } from './data/SliderData';
import Dropdown from './components/Dropdown';
import InfoSection from './components/InfoSection';
import Tour from './components/Tour';
import { InfoData, InfoDataTwo } from './data/InfoData';
import Footer from './components/Footer';

import { LatestData } from './data/LatestData';
import LatestSection from './components/LatestSection';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <LatestSection heading="View our Latest Homes" latestdata={LatestData} />
      <InfoSection {...InfoDataTwo} />
      <Tour />
      <Footer />
    </>
  );
}

export default App;
