import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Index from './pages/Index';
import Legislature from './pages/Legislature';
import Help from './pages/Help';
import About from './pages/About';
import Media from './pages/Media';

import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          
          <Route path="/" exact component={ Index } />
          <Route path="/help" exact component={ Help } />
          <Route path="/legislature" exact component={ Legislature } />
          <Route path="/about" exact component={ About } />
          <Route path="/media" exact component={ Media } />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
