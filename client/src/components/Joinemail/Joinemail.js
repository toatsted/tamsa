import React, { Component } from 'react';

export default class Joinemail extends Component {
  render() {
    return (
      <div className="joinemail">
        <div className="row">
          <div className="col-4 col-md-12 my-2">
            <h6>Join our email list</h6>
            <input type="text" placeholder="Enter your email..." id="email" />
          </div>
          <div className="col-4 col-md-12 my-2">
            <input src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
              name="submit" alt="PayPal - The safer, easier way to pay online!" type="image"
              border="0" />
            <img alt="" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
              style={{ "display": "none !important", "width": "1", "hidden":"", "height":"1", "border":"0" }} />
          </div>
          <div className="col-4 col-md-12 my-2">
            <button className="btn">Legislator Look-Up</button>
          </div>
        </div>
      </div>
    )
  }
}
