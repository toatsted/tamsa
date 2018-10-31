import React, { Component } from 'react';
import './Titlecard.css';

export default class Titlecard extends Component {
  render() {
    return (
      <section className="titlecard">
        <div className="text-white text-center">
          <div className="container">
            <div className="row slogan">
              <div className="col-12 col-md-4"><p>Nonpartisan</p></div>
              <div className="col-12 col-md-4"><p>Grassroots</p></div>
              <div className="col-12 col-md-4"><p>Statewide</p></div>
            </div>
            <div className="row">
              <div className="col-12 mx-auto">
                <h1 className="my-5">{ this.props.children }</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
