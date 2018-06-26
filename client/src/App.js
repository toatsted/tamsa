import React, { Component } from 'react';

import Nav from './components/Nav';
import Masthead from './components/Masthead';
import IconGrid from './components/IconGrid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Masthead />
        <IconGrid />
      </div>
    );
  }
}

export default App;
