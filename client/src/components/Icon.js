import React, { Component } from 'react';

export default class Icon extends Component {
	render() {
		return (
			<div className="icon">
				  <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
				    <div class="features-icons-icon d-flex">
				      <i class={this.props.icon + " m-auto text-primary"}></i>
				    </div>
				    <h3>{ this.props.title }</h3>
				    <p class="lead mb-0">{ this.props.disc }</p>
				</div>
			</div>
		)
	}
}
