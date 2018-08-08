import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <nav class="navbar navbar-default navbar-static-top">
          <div class="container">
            <a class="navbar-header" href="#"><img src="https://placehold.it/50x50" alt="tamsa logo" /></a>
            <p class="">Nonpartisan.    Grassroots.    Statewide.</p>
            <ul>
              <a class="btn" href="#">Home</a>
              <a class="btn" href="#">Legislature</a>
              <a class="btn" href="#">Blog</a>
              <a class="btn" href="#">Media</a>
              <a class="btn" href="#">etc</a>
            </ul>
          </div> 
        </nav>
      </div>
    )
  }
}
