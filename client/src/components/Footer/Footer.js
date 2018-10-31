import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small blue">
        <div className="footer-copyright text-center py-3">© 2018 Copyright:
          <a href="https://www.tamsatx.com">TAMSA</a>
        </div>
      </footer>
    )
  }
}
