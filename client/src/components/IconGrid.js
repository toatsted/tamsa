import React, { Component } from 'react';

import Icon from './Icon';

export default class IconGrid extends Component {
	render() {
		return (
			<div className="icongrid">
				<section class="features-icons bg-light text-center">
					<div class="container">
						<div class="row">
							<div class="col-lg-4">
								<Icon 
									title="Legislation"
									disc="Stay up-to-date on testing related Legislation"
									icon="icon-screen-desktop"
								/>	
							</div>
							<div class="col-lg-4">
								<Icon 
									title="Get Involved"
									disc="Ways you can get involved in advocating for appropriate student testing"
									icon="icon-layers"
								/>	
							</div>
							<div class="col-lg-4">
								<Icon 
									title="TAMSA Blog"
									disc="TAMSA activities on testing policy"
									icon="icon-check"
								/>	
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}
