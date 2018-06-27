import React, { Component } from 'react';

import ShowcaseRow from './ShowcaseRow';

export default class ImgShowcase extends Component {
  render() {
    return (
      <div className="imgshowcase">
        <section class="showcase">
          <div class="container-fluid p-0">
           	<ShowcaseRow
           		url="https://steamcdn-a.akamaihd.net/steam/apps/570940/header.jpg?t=1527581043"
           	/> 
           	
            <div class="row no-gutters">
              <div class="col-lg-6 text-white showcase-img"></div>
              <div class="col-lg-6 my-auto showcase-text">
                <h2>Updated For Bootstrap 4</h2>
                <p class="lead mb-0">Newly improved, and full of great utility classes, Bootstrap 4 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 4!</p>
              </div>
            </div>
            <div class="row no-gutters">
              <div class="col-lg-6 order-lg-2 text-white showcase-img"></div>
              <div class="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2>Easy to Use &amp; Customize</h2>
                <p class="lead mb-0">Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
