import React, { Component } from 'react';

import Nav from './components/Nav';
import Contact from './components/Contact';
import Masthead from './components/Masthead';
import IconGrid from './components/IconGrid';
import ImgShowcase from './components/ImgShowcase';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Contact />
        <Masthead />
        <IconGrid />
        <ImgShowcase />
        <CallToAction />
        <Footer />
      </div>
    );
  }
}

export default App;
