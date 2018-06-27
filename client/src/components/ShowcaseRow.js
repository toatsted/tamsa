import React, { Component } from 'react';

export default class ShowcaseRow extends Component {
  render() {
    return (
      <div className="showcaserow">
        <div class="row no-gutters">
              <div class="col-lg-6 order-lg-2 text-white showcase-img"
              	style={{"background-image": `url('${this.props.url}')`}}></div>
              <div class="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2>Fully Responsive Design</h2>
                <p class="lead mb-0">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
              </div>
            </div>
      </div>
    )
  }
}
