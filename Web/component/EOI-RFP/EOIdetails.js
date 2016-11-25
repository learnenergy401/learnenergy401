import React, { Component } from 'react';
import { Header, Layout, Textfield,Grid,Cell,Card,CardText, Content, CardTitle, CardActions, Button } from 'react-mdl';

import LearnHeader from '../Header.js'
import LearnFooter from '../Footer.js'
import LearnLogo from '../Logo.js';
import LearnNavigation from '../Navigation.js';
import store from '../Store.js'
import {firebaseApp,firebaseAuth,firebaseDb, firebaseStorage, firebaseAuthInstance } from '../Firebase'
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import { connect } from "react-redux"
import { fetchEOIs, fetchEOIkey, submitRFPfromEOI } from "../Actions/userActions"

var spacerStyle = {
    height: '50px',
    backgroundColor: '#f3f3f3',
    backgroundSize: 'cover'
}

var cardStyle = {
    width: '80%',
    margin: 'auto',
    height:'500px'
}

var cardTitleStyle = {
    height:'200px'
}

@connect((store) => {
  return {
    user: store.user
  };
})

class EOIdetails extends Component {

    /**
     * Fetches EOIs
     * @returns {object} EOI - return EOIs
     */
	fetchEOIs() {
		this.props.dispatch(fetchEOIs())
	}

    /**
     * Fetches EOIkey
     * @returns {object} EOIkey - return EOIs
     */
	fetchEOIkey() {
		this.props.dispatch(fetchEOIkey())
	}

    /**
     * Prompts RFP page from EOI details page
     * @params {object} info - sends information of vendor
     */
	submitRFPfromEOI(info) {
		this.props.dispatch(submitRFPfromEOI(info))
	}

    /**
     * Invoked immediately before a component is unmounted and destroyed, to update our states
     */
	componentWillMount() {
		this.fetchEOIs()
		this.fetchEOIkey()
	}

    /**
     * submit rfp from eoi
     * @param {object} vendor - object which contains information about the vendor
     */
	submit_rfp(vendor, LMRFPnum, purchaser) {
		// user is a purchaser and they want to submit a rfp
		// store information needed and then go to rfp page
		var info = {vendor, LMRFPnum, purchaser}

		this.submitRFPfromEOI(info)

		window.location.assign('/#/rfp-from-eoi')
	}

    /**
     * returns back to previous page
     */
	return_back() {
		window.location.assign('/#/review-eoi-rfp')
	}
    /**
     * Loads the details
     * @return {html} - returns html details
     */
	render() {

		const {user} = this.props
		console.log(user)
		if ((user.eoi != null)&&(user.eoiKey != null)&&((user.role==1)||(user.role==0))) {

			var purchaser_legal = user.eoi[user.eoiKey.key_name].purchaser_legal
			var purchaser_address1 = user.eoi[user.eoiKey.key_name].purchaser_address1
			var purchaser_address2 = user.eoi[user.eoiKey.key_name].purchaser_address2
			var purchaser_city = user.eoi[user.eoiKey.key_name].purchaser_city
			var purchaser_country = user.eoi[user.eoiKey.key_name].purchaser_country
			var purchaser_phone = user.eoi[user.eoiKey.key_name].purchaser_phone
			var purchaser_fax = user.eoi[user.eoiKey.key_name].purchaser_fax


			var vendor = user.eoi[user.eoiKey.key_name].vendor
			var purchaser = user.eoi[user.eoiKey.key_name].purchaser
			var course = user.eoi[user.eoiKey.key_name].course
			var email = user.eoi[user.eoiKey.key_name].email

			var email1 = user.eoi[user.eoiKey.key_name].email1

      var date = user.eoi[user.eoiKey.key_name].date
      var service = user.eoi[user.eoiKey.key_name].service
      var text1 = user.eoi[user.eoiKey.key_name].text1
      var text2 = user.eoi[user.eoiKey.key_name].text2
      var closeDate = user.eoi[user.eoiKey.key_name].closeDate
      var closeTime = user.eoi[user.eoiKey.key_name].closeTime
      var name1 = user.eoi[user.eoiKey.key_name].name1
      var title1 = user.eoi[user.eoiKey.key_name].title1
      var name2 = user.eoi[user.eoiKey.key_name].name2
      var title2 = user.eoi[user.eoiKey.key_name].title2
      var email2 = user.eoi[user.eoiKey.key_name].email2
      var phone = user.eoi[user.eoiKey.key_name].phone

      var company_name = user.eoi[user.eoiKey.key_name].company_name
	    var RFP_par = user.eoi[user.eoiKey.key_name].RFP_par

	    var vendor_company_address = user.eoi[user.eoiKey.key_name].vendor_company_address
	    var vendor_contact_name = user.eoi[user.eoiKey.key_name].vendor_contact_name
	    var vendor_contact_title_position = user.eoi[user.eoiKey.key_name].vendor_contact_title_position
	    var vendor_primary_telephone = user.eoi[user.eoiKey.key_name].vendor_primary_telephone
	    var vendor_alternate_telephone = user.eoi[user.eoiKey.key_name].vendor_alternate_telephone
	    var vendor_fax = user.eoi[user.eoiKey.key_name].vendor_fax
	    var vendor_email = user.eoi[user.eoiKey.key_name].vendor_email

	    var company_approved = user.eoi[user.eoiKey.key_name].company_approved
	    var optional_comments = user.eoi[user.eoiKey.key_name].optional_comments

			var scope = user.eoi[user.eoiKey.key_name].scope
			var qualificationA = user.eoi[user.eoiKey.key_name].qualificationA
			var qualificationB = user.eoi[user.eoiKey.key_name].qualificationB
			var qualificationC = user.eoi[user.eoiKey.key_name].qualificationC
			var qualificationD = user.eoi[user.eoiKey.key_name].qualificationD
			var response_date = user.eoi[user.eoiKey.key_name].response_date
			var email3 = user.eoi[user.eoiKey.key_name].email3
			var LMRFPnum = user.eoi[user.eoiKey.key_name].LMRFPnum
			var selection_date = user.eoi[user.eoiKey.key_name].selection_date

			var buttons = []
			if (user.role == 1) {
				buttons.push(<Button accent ripple className="mdl-color-text--indigo btn btn-primary" onClick={this.return_back.bind(this)}>Back</Button>)
			} else if (user.role == 0) {
				buttons.push(<Button accent ripple className="mdl-color-text--indigo btn btn-primary" onClick={this.return_back.bind(this)}>Back</Button>)
				buttons.push(<Button accent ripple className="mdl-color-text--indigo btn btn-primary" onClick={this.submit_rfp.bind(this, vendor, LMRFPnum, purchaser)}>Submit RFP</Button>)

			}

		    return (
			<div>
				<LearnHeader/>
	        <div className="learn-content mdl-typography--text-center">
	          <div style={spacerStyle} />
	            <Card shadow={0} style={cardStyle} >
	              <CardTitle style={cardTitleStyle} className="mdl-color--indigo mdl-color-text--white mdl-shadow--2dp">Expression of Interest Form</CardTitle>
             	    <div className="mdl-layout__content" style={{textAlign: 'center'}}>
        		        <a name="top" />
	                     <div style={{width: '80%', margin: 'auto'}}>

			                    <h4>Cover Letter</h4>
                          <hr/>
                          {date}
                          <br/>
            	            <h6>Purchaser Details: </h6>
            	            <h6>Legal Name: &nbsp; {purchaser_legal}</h6>
            	            <h6>Address Line 1: &nbsp; {purchaser_address1}</h6>
            	            <h6>Address Line 2: &nbsp; {purchaser_address2}</h6>
            	            <h6>City: &nbsp; {purchaser_city}</h6>
            	            <h6>Country: &nbsp; {purchaser_country}</h6>
            	            <h6>Phone: &nbsp; {purchaser_phone}</h6>
            	            <h6>Fax Number: &nbsp; {purchaser_fax}</h6>

 				                  <h6>On behalf of {purchaser_legal}
                          ("The Purchaser"), your company ("Respondent") is invited to submit a response to this Expression of Interest. The Purchaser plans
                          to issue a Request for Proposal (RFP) for the provision of {service}
                          services. The current schedule is to issue the RFP {text1} with contract award by
                          {text2}. Please complete the attached EOI Questionnaire and Confidentiality Agreement
                          and return, via email, as detailed below:
				                  </h6>

                          {closeDate}
                          &nbsp;
                          {closeTime}
                          <h6>Response sent to:
                          &nbsp;{name1}
                          &nbsp;{title1}
                          </h6>
                          {email1}

                          <h6>
                          Respondent assumes full responsibility for delivery of the completed EOI Questionnaire and Confidentiality
                          Agreement before the Closing Date and time. The Purchaser is not responsible for any loss or delay with
                          respect to the delivery of these documents. In addition, any and all costs incurred in responding to this EOI,
                          meetings, or any other related activities are the sole responsibility of the Respondent.
                          </h6>
                          <h6>
                          This Expression of Interest will be issued to multiple companies and the Purchaser reserves the right to
                          reject any or all responses provided. Issuance of this EOI does not constitute any representation or
                          commitment by the Purchaser that your company will receive a Request for Proposal.
                          </h6>
                          <h6>
                          Should you require additional information, please contact the undersigned.
                          </h6>

                          <h6> With Best Regards,</h6>
                          {name2}
                          <br/>
                          {title2}
                          <br/>
                          {email2}
                          <br/>
                          {phone}

                          <hr/>
                          <h4>Appendix 1: EOI Questionnaire</h4>
                          <hr/>
                          <h6>Vendor's{/*'*/} Legal Company Name:</h6>
                          {company_name}
            	            <div>
            	              <label>Based upon the information provided in this EOI, advise if your company would like to be considered for participation in the Request for Proposal (RFP).<br/>
            	                <br/>
            	                {RFP_par}
            	              </label>
            	            </div>
            	            <h6>If your response is in the affirmative, the Vendor is to provide the information requested in sections 1 through 4 below.</h6>
            	            <h6>Company Address:&nbsp; {vendor_company_address}</h6>
            	            <h6>Contact Name:&nbsp; {vendor_contact_name}</h6>
            	            <h6>Contact's{/*'*/} Title and Position:&nbsp; {vendor_contact_title_position}</h6>
            	            <h6>Primary Telephone Number:&nbsp; {vendor_primary_telephone}</h6>
            	            <h6>Alternate Telephone Number:&nbsp; {vendor_alternate_telephone}</h6>
            	            <h6>Fax Number:&nbsp; {vendor_fax}</h6>
            	            <h6>Email:&nbsp; {vendor_email}</h6>

            	            <div>
            	              <label>Confirm your company is approved in [jurisdiction] for the work reflected in this EOI.<br/>
            	                <br/>
            	                {company_approved}
            	              </label>
            	            </div>

				                  <h6>Comments (optional):&nbsp; {optional_comments}</h6>

                					<hr/>
                					<h4>Appendix 3</h4>
                					<hr/>

                					<h6>Description of Scope / Requirements: &nbsp; {scope}</h6>

                					<h6>
                					During the evaluation process, the Purchaser&#39;s Evaluation Committee reserves the right to
                					request additional information or clarifications. The Evaluation Committee will evaluate
                					Vendors based on the answers to the following questions as well as any additional material
                					provided with the expression of interest (i.e. presentations, brochures, background
                					information, experience etc.):
                					</h6>

                					<h6>
                					A. Qualification levels of staff, including experience and/or certifications. Please
                					include the qualifications and experience of the Vendor’s Project Manager in addition
                					to the following details:
                					<br/>i. Familiarity with above noted categories
                					<br/>ii. Number of years’ experience
                					<br/>iii. Experience with [specific requirements, ie. pipeline integrity]
                					<br/>iv. Related experience
                					</h6>
                					{qualificationA}

                					<h6>
                					B. Vendor to describe how it will ensure requirements are satisfied and are in
                					compliance with the Description of Scope / Requirements.
                					</h6>
                					{qualificationB}

                					<h6>
                					C. How often, and what methods does the Vendor propose to provide updates and
                					reports to the Purchaser?
                					</h6>
                					{qualificationC}

                					<h6>
                					D. Does the Vendor have an office in [jurisdiction]?
                					</h6>
                					{qualificationD}

                					<h6>
                					Interested Vendors must respond to the Purchaser by Noon (12:00 pm local time) on
                					&nbsp;{response_date}
                					Any requests for information, including the response for this expression of interest, can be emailed to the Purchaser at
                					&nbsp;{email3}.
                					The response including Appendices 1, 2, and 3 and any supplemental information must be uploaded to the Purchaser LM RFP#
                					&nbsp;{LMRFPnum}
                					folder prior to the above noted time. The Purchasers selection is anticipated to be completed by
                					&nbsp;{selection_date}
                					and will be announced via email. Once the selection has been announced, the Purchaser may forward a Request for Proposal (RFP)
                					to those Vendors selected by the Evaluation Committee.
                					</h6>

                					<h6>
                					NOTE: The Purchaser will not reimburse Vendors for any expenses incurred in responding
                					to this Expression of Interest. The Purchaser will not be obliged to provide reasons for
                					accepting or rejecting any Expression of Interest.
                					</h6>
                					<hr/>


                					<h6> For further discussion with purchaser, fill out and email Appendix2 Form to: {email} </h6>
                					<br/>
                	      </div>
                	    </div>
                	  </Card>
	                   {buttons}
	          	    </div>
                <LearnFooter/>
	            </div>
		    )

		} else {

			return (
		      <div>
		      <LearnHeader/>
		      <h4>NOT A VALID USER</h4>
		      <LearnFooter/>
		      </div>
		    )
		}
	}
}

export default EOIdetails
