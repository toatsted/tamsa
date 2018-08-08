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
           		url="http://blog.visme.co/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-02.jpg">
	           	<h2>Eliminate over-testing and under-investing in Texas students</h2><br />
                          <p class="lead mb-0">TAMSA: Nonpartisan, Grassroots, Statewide </p><br />
                          <p class="lead mb-0">TAMSA is a statewide, grassroots organization of parents and community members condered with the overemphasis on high stakes STAAR tests and the misallocation of hundreds of millions of taxpayer dollars to the tests that should be going to the classroom.</p><br />
                          <p class="lead mb-0">TAMSA's mission is to improve public education in Texas through the use of meaningful and effective student assments that allow for more productive classroom instruction and more efficient use of public funds.</p>
           	</ShowcaseRowImgRight> 

           	<ShowcaseRowImgLeft
           		url="http://blog.visme.co/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-02.jpg">
           		<h2>Updated For Bootstrap 4</h2>
           		<p class="lead mb-0">Newly improved, and full of great utility classes, Bootstrap 4 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 4!</p>
           	</ShowcaseRowImgLeft>
          </div>
        </section>
      </div>
    )
  }
}
