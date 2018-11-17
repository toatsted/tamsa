import React, { Component } from 'react';

import Titlecard from '../components/Titlecard/Titlecard';
import Helplist from '../components/Helplist/Helplist';
import Joinemail from '../components/Joinemail/Joinemail';

export default class Help extends Component {
  render() {
    return (
      <div className="helpPage">
        <Titlecard>Get Involved in Testing Reform</Titlecard>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 my-2">
              <Helplist />
            </div>
            <div className="col-12 col-md-4">
              <Joinemail />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
