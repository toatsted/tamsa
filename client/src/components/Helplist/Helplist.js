import React, { Component } from 'react';
import './Helplist.css';

export default class Helplist extends Component {
  render() {
    return (
      <div className="helplist">
        <h3>How can I help?</h3>
        <ol>
          <li>
            <h6>SIGN UP ONLINE</h6>
            <ul>
              <li>Get regular email updates and action alerts by signing up with the TAMSA email alert system. If you work for a school district, please use a PERSONAL email</li>
              <li>Follow us on Facebook</li>
              <li>Follow us on Twitter</li>
            </ul>
          </li>
          <li>
            <h6>SPREAD THE WORD</h6>
            <ul>
              <li>Ask your family members, friends, and colleagues to join TAMSA.</li>
              <li>Ask your local PTA to include an overview of TAMSA in their next
                newsletter.</li>
            </ul>
          </li>
          <li>
            <h6>CONTACT POLICYMAKERS</h6>
            <ul>
              <li>Voice your concern regarding meaningful student assesment to the</li>
              <ul>
                <li><a href="https://tea.texas.gov/About_TEA/Contact/">Texas Education Agency (TEA)</a></li>
                <li>Your 
                  <a href="https://fyi.capitol.texas.gov/Home.aspx"> State Board of Education (SBOE) Representative</a>
                </li>
                <li>Your 
                  <a href="https://fyi.capitol.texas.gov/Home.aspx">State Legislators</a>, 
                  <a href="https://gov.texas.gov/contact">Governor Greg Abbot</a>, and 
                  <a href="https://www.ltgov.state.tx.us/contact/"> Lt. Governor Dan Patrick</a>
                </li> 
              </ul>
              
              <li>Please ask them to stop the wasteful expenditures on high stakes
                testing and allow for more productive classroom instruction time.</li>
              <li>Share your personal stories with education leaders and your elected
                representatives, and let them know that testing reform legislation
                must be implemented quickly and smoothly without negatively affecting
                students.</li>
            </ul>
          </li>
        </ol>
      </div>
    )
  }
}
