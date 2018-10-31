import React, { Component } from 'react';
import { Timeline } from 'react-twitter-widgets';
import './Showcase.css';

export default class Showcase extends Component {
  render() {
    return (
      <section className="showcase">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="text-center heads">
                <h2><span className="tamsa">TAMSA</span></h2>
              </div>
              <ul className="points">
                <li>
                  <p className="text-center">
                    Nonpartian. Grassroots. Statewide.
                  </p>
                </li>
                <li>
                  <p>
                    TAMSA is a statewide, grassroots
                    organization of parents and community members condered with the
                    overemphasis on high stakes STAAR tests and the misallocation
                    of hundreds of millions of taxpayer dollars to the tests that
                    should be going to the classroom.
                  </p>
                </li>
                <li>
                  <p>
                    TAMSA's mission is to improve public
                    education in Texas through the use of meaningful and effective
                    student assments that allow for more productive classroom
                    instruction and more efficient use of public funds.
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-12 col-lg-6 text-center">
              <Timeline
                dataSource={{
                  sourceType: "profile",
                  screenName: "tamsatx"
                }}
                options={{
                  height: "600"
                }}
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
}
