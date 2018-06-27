import React, { Component } from 'react';

import ShowcaseRowImgRight from './ShowcaseRowImgRight';
import ShowcaseRowImgLeft from './ShowcaseRowImgLeft';

export default class ImgShowcase extends Component {
  render() {
    return (
      <div className="imgshowcase">
        <section class="showcase">
          <div class="container-fluid p-0">
           	<ShowcaseRowImgRight 
           		url="https://steamcdn-a.akamaihd.net/steam/apps/570940/header.jpg?t=1527581043">
	           	<h2>Fully Responsive Design</h2>
	            <p class="lead mb-0">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
           	</ShowcaseRowImgRight> 

           	<ShowcaseRowImgLeft
           		url="https://steamcdn-a.akamaihd.net/steam/apps/570940/header.jpg?t=1527581043">
           		<h2>Updated For Bootstrap 4</h2>
           		<p class="lead mb-0">Newly improved, and full of great utility classes, Bootstrap 4 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 4!</p>
           	</ShowcaseRowImgLeft>

           	<ShowcaseRowImgRight 
           		url="https://steamcdn-a.akamaihd.net/steam/apps/570940/header.jpg?t=1527581043">
           		<h2>Easy to Use &amp; Customize</h2>
           		<p class="lead mb-0">Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
           	</ShowcaseRowImgRight> 
          </div>
        </section>
      </div>
    )
  }
}
