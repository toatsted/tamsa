import React, { Component } from 'react';

import Titlecard from '../components/Titlecard/Titlecard';

export default class About extends Component {
  render() {
    return (
      <div className="aboutPage">
        <Titlecard>About TAMSA</Titlecard>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <p>
                &emsp;TAMSA is a nonpartisan grassroots organization open to everyone who shares TAMSA's
                interests and goals. TAMSA works cooperatively with school ldistricts, state legislators,
                and other key policy makers to develop meaningful student assessment for Texas students.
              </p>
              <p>
                &emsp;TAMSA started in 2011 as a statewide, grassroots organization of concerned parents
                who support a more reasoned approach to student testing. We see what is happening in our
                children's classroom: too much time spent on standardized tests; too little time left
                for instruction, exploring and creating. Our mission is to improve public education in
                Texas through the use of meaningful and effective student assessments that allow for a
                more productive classroom instuction and more efficient use of public funds.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <h3>TAMSA Board Members</h3>
              <ul>
                <li>Dr. Theresa Trevino-President</li>
                <li>Chris Vierra-Vice President</li>
                <li>Kim Cook-Treasurer</li>
                <li>Tiffany Hatch-Secretary</li>
                <li>Nancy McKeon Andrus-Board Member</li>
                <li>Kristi Hassett-Board Member</li>
                <li>Sheri Hicks-Board Member</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
