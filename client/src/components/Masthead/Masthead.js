import React, { Component } from 'react';
import './Masthead.css';

export default class Masthead extends Component {
  render() {
    return (
      <section className="masthead">
        <div className="text-white text-center">
          <div className="container">
            <div className="row slogan">
              <div className="col-12 col-md-4"><p>Nonpartisan</p></div>
              <div className="col-12 col-md-4"><p>Grassroots</p></div>
              <div className="col-12 col-md-4"><p>Statewide</p></div>
            </div>
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <h1 className="my-5">Texans Advocating for Meaningful Student Assessments</h1>
                <h2 className="mb-5">Join our email list today!</h2>
              </div>
            </div>
            <div className="col-md-10 mx-auto">
              <form>
                <div className="form-row">
                  <div className="col-12 col-md-9 mb-2 mb-md-0">
                    <input className="form-control form-control-lg" type="email" placeholder="Enter your email..." />
                    <p className="mb-0 mb-md-5">District employees and teachers, please use PERSONAL email address</p>
                  </div>
                  <div className="col-12 col-md-3 mb-3">
                    <button className="btn btn-block btn-lg btn-primary" type="submit">Sign up!</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
