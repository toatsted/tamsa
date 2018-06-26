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
									title="Fully Responsive"
									disc="This theme will look great on any device, no matter the size!"
									icon="icon-screen-desktop"
								/>	
							</div>
							<div class="col-lg-4">
								<Icon 
									title="Bootstrap 4 Ready"
									disc="Featuring the latest build of the new Bootstrap 4 framework!"
									icon="icon-layers"
								/>	
							</div>
							<div class="col-lg-4">
								<Icon 
									title="Easy to Use"
									disc="Ready to use with your own content, or customize the source files!"
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
