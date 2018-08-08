import React, { Component } from 'react';

export default class Contact extends Component {
	render() {
		return (
			<div className="contact">
				<nav className="navbar navbar-light bg-light static-top">
					<div className="container">
						<a className="navbar-left" href="#">Contact: boardmember@tamsatx.org</a>
						<ul>
							<li>
								<a href="#"><i className="fab fa-twitter-square fa-2x"></i></a>
							</li>
							<li>
								<a href="#"><i className="fab fa-facebook-square fa-2x"></i></a>
							</li>
							<li>
								<a href="#"><i className="fas fa-rss-square fa-2x"></i></a>
							</li>
						</ul>
					</div>
				</nav>

			</div>
		)
	}
}