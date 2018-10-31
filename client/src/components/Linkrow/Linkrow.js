import React, { Component } from 'react';
import './Linkrow.css';

export default class Linkrow extends Component {
  render() {
    return (
      <section className="linkrow">
        <div className="text-center container">
          <div className="row">
            <div className="col-lg-3">
              <div className="mx-auto mb-5 mb-lg-0 mb-lg-3">
                <a className="m-auto btn btn-primary" href="/legislature">Legislation</a>
              </div>
              <p className="lead">Stay up-to-date on testing related Legislation</p>
            </div>
            <div className="col-lg-3">
              <div className="mx-auto mb-5 mb-lg-0 mb-lg-3">
                <a className="m-auto btn btn-primary" href="/help">Get Involved</a>
              </div>
              <p className="lead">Ways you can get involved in advocating for appropriate student testing</p>
            </div>
            <div className="col-lg-3">
              <div className="mx-auto mb-5 mb-lg-0 mb-lg-3">
                <a className="m-auto btn btn-primary" href="/blog">TAMSA Blog</a>
              </div>
              <p className="lead">TAMSA activities on testing policy</p>
            </div>
            <div className="col-lg-3">
              <div className="mx-auto mb-5 mb-lg-0 mb-lg-3">
                <a className="m-auto btn btn-primary" href="/#">BUTTON!</a>
              </div>
              <p className="lead">this is some placeholder text for text thats gonna be here later</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
