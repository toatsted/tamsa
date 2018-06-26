import React, { Component } from 'react';

export default class Nav extends Component {
	render() {
		return (
			<div className="nav">
				<nav className="navbar navbar-light bg-light static-top">
					<div className="container">
						<a className="navbar-brand" href="">Start Bootstrap</a>
						<a className="btn btn-primary" href="">Sign In</a>
					</div>
				</nav>

			</div>
		)
	}
}
