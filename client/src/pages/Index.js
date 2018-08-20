import React, { Component } from 'react';

import Masthead from '../components/Masthead';
import IconGrid from '../components/IconGrid';
import ImgShowcase from '../components/ImgShowcase';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

class Index extends Component {
  render() {
    return (
      <div className="Index">
        <Masthead />
        <IconGrid />
        <ImgShowcase />
        <CallToAction />
        <Footer />
      </div>
    );
  }
}

export default Index;
