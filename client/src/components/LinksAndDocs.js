import React, { Component } from 'react';

import { Document, Page } from 'react-pdf';

export default class LinksAndDocs extends Component {
	constructor(props) {
		super(props);
		this.state = {
			numPages: null,
			pageNumber: 1
		}
	}

	onDocumentLoad = ({numPages}) => {
		this.setState({numPages});
	}


  render() {
    return (
      <div className="linksanddocs">
        <section class="link-dropdowns bg-light text-center">
		      <div class="container">
		      	<div class="row">
		      		<div class="col">
		      			<h3>Important links & Key Documents</h3>	
		      		</div>
		      	</div>
		        <div class="row">
		          <div class="col-lg-6">
		          	<div class="dropdown-show">
		          		<a href="#" class="btn btn-primary dropdown-toggle"
		          		role="button" id="linksDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		          			Links
		          		</a>

		          		<div class="dropdown-menu" aria-labelledby="linksDropdown">
		          			<a href="http://www.tamsatx.org/uploads/3/4/4/6/34460330/85th_legislative_asks_final.pdf" class="dropdown-item" target="_blank">
		          				TAMSA Recommendations for 85th Legislative Session
		          			</a>
		          			<a href="http://www.tamsatx.org/uploads/3/4/4/6/34460330/i_cant_answer_these_test_questions_about_my_own_poem_final2.pdf" class="dropdown-item" target="_blank">
		          				I Can't Answer These Test Questions About My Own Poem 
		          			</a>
		          			<a href="http://www.tamsatx.org/uploads/3/4/4/6/34460330/igc_stories_leg_handout_feb_2017_final.pdf" class="dropdown-item" target="_blank">
		          				Individual Graduation Committee Stories
		          			</a>

		          			<a href="file:///C:/Users/Rebecca/Downloads/Commission%20MembersContact%20Info.pdf" class="dropdown-item" target="_blank">
		          				TCNGAA Member Contact Information
		          			</a>
		          			
		          			<a href="http://tea.texas.gov/WorkArea/linkit.aspx?LinkIdentifier=id&ItemID=25769825550&libID=25769825646" class="dropdown-item" target="_blank">
		          				Commission Framework 
		          			</a>
		          			<a href="http://www.tamsatx.org/uploads/3/4/4/6/34460330/tamsa_enough_enough_final.pdf" class="dropdown-item" target="_blank">
		          				Enough is Enough - Recent Problems with STAAR Administration
		          			</a>
		          			<a href="http://www.tamsatx.org/uploads/3/4/4/6/34460330/sboe_survey_results_final.pdf" class="dropdown-item" target="_blank">
		          				SBOE Report: Summary of the SBOE Survey Findings
		          			</a>
		          			<a href="http://www.tamsatx.org/uploads/3/4/4/6/34460330/pr_515_mtt_cvedit.pdf" class="dropdown-item" target="_blank">
		          				​Press Release Regarding HB 515
		          			</a>
		          		</div>
		          	</div>
		          </div>
		          <div class="col-lg-6">
		          	<div class="dropdown-show">
		          		<a href="#" class="btn btn-primary dropdown-toggle"
		          		role="button" id="linksDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		          			Documents
		          		</a>

		          		<div class="dropdown-menu" aria-labelledby="linksDropdown">
		          			<a href="http://www.tamsatx.org/uploads/3/4/4/6/34460330/legislative_asks_final.pdf" class="dropdown-item" target="_blank">
											Recommended Changes to Testing in Texas
		          			</a>
		          			<a href="http://www.tamsatx.org/uploads/3/4/4/6/34460330/tamsa_2017_legislator_letter_final.pdf" class="dropdown-item" target="_blank">
											TAMSA 2017 Legislator Letter
		          			</a>
		          			<a href="http://www.tamsatx.org/uploads/3/4/4/6/34460330/igc_fact_sheet_final.pdf" class="dropdown-item" target="_blank">
		          				Individual Graduation Committee Fact Sheet
		          			</a>
		          			<a href="http://www.tamsatx.org/uploads/3/4/4/6/34460330/states_with_high-stakes__2017.pdf" class="dropdown-item" target="_blank">
		          				States with High Stakes
		          			</a>
		          			<a href="http://www.tamsatx.org/uploads/3/4/4/6/34460330/bipartisan-support-to-reduce-tests-tamsa-09-2014.pdf" class="dropdown-item" target="_blank">
											Bipartisan Support to Reduce Tests
		          			</a>
		          			<a href="http://www.tamsatx.org/uploads/3/4/4/6/34460330/input_output_final_091814-1.pdf" class="dropdown-item" target="_blank">
		          				Texas Should Build, Not Test, Quality in Schools
		          			</a>
		          			<a href="http://www.tamsatx.org/uploads/3/4/4/6/34460330/tamsa-parent-pocket-reference-final-dec-2013.pdf" class="dropdown-item" target="_blank">
		          				Parent Brochure - 2013
		          			</a>
		          			<a href="http://www.tamsatx.org/uploads/3/4/4/6/34460330/tamsa_2013-02-05-nation-vs-state-tests.pdf" class="dropdown-item" target="_blank">
		          				National vs State Tests 
		          			</a>
		          			<a href="http://www.tamsatx.org/uploads/3/4/4/6/34460330/advocacy_at_the_capitol-2.docx" class="dropdown-item" target="_blank">
		          				Advocacy at the Capital 
		          			</a>
		          		</div>
		          	</div>
		          </div>
		        </div>
		      </div>
		    </section>

		    <Document
		    	file=""
		    	onLoadSuccess={this.onDocumentLoad}
	    	>
	    		<Page pageNumber={this.state.pageNumber} />
	    	</Document>	
      </div>
    )
  }
}
