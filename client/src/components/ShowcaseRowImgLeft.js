import React, { Component } from 'react';

export default class ShowcaseRowImgLeft extends Component {
  render() {
    return (
      <div className="showcaserowimgleft">
        <div class="row no-gutters">
          <div class="col-lg-6 text-white showcase-img" style={{"background-image": `url('${this.props.url}')`}}></div>
          <div class="col-lg-6 my-auto showcase-text">
          	{this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
