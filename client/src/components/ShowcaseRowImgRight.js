import React, { Component } from 'react';

export default class ShowcaseRowImgRight extends Component {
  render() {
    return (
      <div className="showcaserowimgright">
        <div class="row no-gutters">
              <div class="col-lg-6 order-lg-2 text-white showcase-img"
              	style={{"background-image": `url('${this.props.url}')`}}></div>
              <div class="col-lg-6 order-lg-1 my-auto showcase-text">
                {this.props.children}               
              </div>
          </div>
      </div>
    )
  }
}
