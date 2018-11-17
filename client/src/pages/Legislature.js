import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Titlecard from '../components/Titlecard/Titlecard';

import ImportantDates from '../components/ImportantDates/ImportantDates';

export default class Legislature extends Component {
  render() {
    return (
      <div className="legislaturePage">
        <Titlecard>TAMSA Advocacy Tools & Legislative Priorities</Titlecard>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <h3>2019 Advocacy Agenda</h3>
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="card">
                    <img className="card-img-top" src="https://placehold.it/300x180" alt="cardimg" />
                    <div className="card-body">
                      <Link className="btn" to="legislature/priorities">Legislative Priorities</Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="card">
                    <img className="card-img-top" src="https://placehold.it/300x180" alt="cardimg" />
                    <div className="card-body">
                      <Link className="btn" to="legislature/billtracker">Bill Tracker</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="card">
                    <img className="card-img-top" src="https://placehold.it/300x180" alt="cardimg" />
                    <div className="card-body">
                      <Link className="btn" to="legislature/committees">Legislative Committees</Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="card">
                    <img className="card-img-top" src="https://placehold.it/300x180" alt="cardimg" />
                    <div className="card-body">
                      <Link className="btn" to="legislature/resources">Resources</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <ImportantDates />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
