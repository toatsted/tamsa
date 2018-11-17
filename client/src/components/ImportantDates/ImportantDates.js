import React, { Component } from 'react';
import './ImportantDates.css';

export default class ImportantDates extends Component {
  render() {
    return (
      <div className="importantdates">
        <h4>Important Dates</h4>
        <ul>
          <li>November 6, 2018 - General Election</li>
          <li>November 12, 2018 - First day to pre-file legislation</li>
          <li>January 8, 2019 - First day of legislative session</li>
          <li>March 8, 2019 - Last day to file unrestricted legislation</li>
          <li>May 27, 2019 - Last day of the 86th Regular Session</li>
          <li>June 16, 2019 - Last day the governor may sign or veto bills passed
            during the regular session</li>
          <li>August 26, 2019 - Date bills without specific effective dates/immediate
              effect become law</li>
        </ul>
      </div>
    )
  }
}
