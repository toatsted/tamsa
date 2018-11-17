import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Linkrow.css';

export default class Linkrow extends Component {
  render() {
    return (
      <section className="linkrow">
        <div className="text-center container">
          <div className="row">
            <div className="col-lg-3">
              <div className="mx-auto mb-5 mb-lg-3">
                <Link className="m-auto btn btn-primary" to="/legislature">Legislation</Link>
              </div>
              <p className="lead">Stay up-to-date on testing related Legislation</p>
            </div>
            <div className="col-lg-3">
              <div className="mx-auto mb-5 mb-lg-3">
                <Link className="m-auto btn btn-primary" to="/help">Get Involved</Link>
              </div>
              <p className="lead">Ways you can get involved in advocating for appropriate student testing</p>
            </div>
            <div className="col-lg-3">
              <div className="mx-auto mb-5 mb-lg-3">
                <Link className="m-auto btn btn-primary" to="/#">BUTTON!</Link>
              </div>
              <p className="lead">this is some placeholder text for text thats gonna be here later</p>
            </div>
            <div className="col-lg-3">
              <div className="mx-auto mb-5 b-lg-3">
                <Link className="m-auto btn btn-primary" to="/#">BUTTON!</Link>
              </div>
              <p className="lead">this is some placeholder text for text thats gonna be here later</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
