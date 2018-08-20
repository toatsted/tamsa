import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Index from './pages/Index';
import Legislature from './pages/Legislature';

import Nav from './components/Nav';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Contact />
          <Route exact path="/" component={ Index } />
          <Route exact path="/legislature" component={ Legislature } />
        </div>
      </Router>
    );
  }
}

export default App;
