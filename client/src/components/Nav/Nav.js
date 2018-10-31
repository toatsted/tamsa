import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default class Nav extends Component {
  render() {
    return (
      <nav className="nav navbar navbar-fixed-top">
        <div className="container">
          <a className="navbar-header" href="mailto:boardmember@tamsatx.org">Contact: boardmember@tamsatx.org</a>
          <ul className="my-auto">
            <li>
              <a className="btn" href="http://www.twitter.com/TAMSATX"><i className="fa fa-twitter-square fa-2x"></i></a>
            </li>
            <li>
              <a className="btn" href="http://www.facebook.com/tamsatx"><i className="fa fa-facebook-square fa-2x"></i></a>
            </li>
          </ul>
          <ul className="my-auto">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/help">Get Involved</Link>
            </li>
            <li>
              <Link to="/legislature">Legislature</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/media">Media</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
