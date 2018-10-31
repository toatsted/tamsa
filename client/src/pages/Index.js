import React, { Component } from 'react';

import Masthead from '../components/Masthead/Masthead';
import Linkrow from '../components/Linkrow/Linkrow';
import Showcase from '../components/Showcase/Showcase';

export default class Index extends Component {
  render() {
    return (
      <div className="indexPage">
        <Masthead />
        <Linkrow />
        <Showcase />
      </div>
    )
  }
}
