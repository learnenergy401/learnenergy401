import React, { Component } from 'react';
import {Layout,Header} from 'react-mdl';
import LearnHeader from '../Header.js'
import LearnFooter from '../Footer.js'
import { Textfield,Grid,Cell,Card,CardText, Content, CardTitle, CardActions, Button } from 'react-mdl';

import LearnLogo from '../Logo.js';
import LearnNavigation from '../Navigation.js';
import store from '../Store.js'
import {firebaseApp,firebaseAuth,firebaseDb, firebaseStorage, firebaseAuthInstance } from '../Firebase'
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import { connect } from "react-redux"
import { fetchReqEOI, storeEOIs, storeKeyRole, fetchVendorSignup, fetchPurchaserSignup, 
	fetchADSignup, getCurrentUser } from "../Actions/userActions"


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
    height:'80px'
}

@connect((store) => {
  return {
    user: store.user
  };
})

class CourseEOI extends Component {

	getCurrentUser() {
		this.props.dispatch(getCurrentUser())
	}

	storeEOIs(info) {
		this.props.dispatch(storeEOIs(info))
	}

	fetchReqEOI() {
		this.props.dispatch(fetchReqEOI())
	}

	componentWillMount() {
		this.getCurrentUser()
		this.fetchReqEOI()
	}

	requestSubmit() { // stores an EOI into the table

		const {user} = this.props
		var vendor = user.reqEOI.vendor_uid
		var uid = user.reqEOI.user_uid
		var course = user.reqEOI.course_uid

		var email = document.getElementById("email").value

        var date = document.getElementById("date").value
        var service = document.getElementById("service").value
        var text1 = document.getElementById("text1").value
        var text2 = document.getElementById("text2").value
        var closeDate = document.getElementById("closeDate").value
        var closeTime = document.getElementById("closeTime").value
        var name1 = document.getElementById("name1").value
        var title1 = document.getElementById("title1").value
        var name2 = document.getElementById("name2").value
        var title2 = document.getElementById("title2").value
        var email2 = document.getElementById("email2").value
        var phone = document.getElementById("phone").value

        var company_name = document.getElementById("company_name").value
	    var RFP_par
	    if(document.getElementById("RFP_parYes").checked) {
	        RFP_par = "yes"
	    } else if (document.getElementById("RFP_parNo").checked) {
	        RFP_par = "no"
	    }
	    var vendor_company_address = document.getElementById("vendor_company_address").value
	    var vendor_contact_title_position = document.getElementById("vendor_contact_title_position").value
	    var vendor_primary_telephone = document.getElementById("vendor_primary_telephone").value
	    var vendor_alternate_telephone = document.getElementById("vendor_alternate_telephone").value
	    var vendor_fax = document.getElementById('vendor_fax').value
	    var vendor_email = document.getElementById('vendor_email')

	    var company_approved
	    if(document.getElementById("company_approvedYes").checked) {
	        company_approved = "yes"
	    } else if (document.getElementById("company_approvedNo").checked) {
	        company_approved = "no"
	    }

	    var optional_comments = document.getElementById('optional_comments').value


    	var info = {vendor, uid, course, email1, date, service, text1, text2, closeDate, closeTime,
        name1, title1, name2, title2, email2, phone}


		this.storeEOIs(info)
	}

	return_back() {
		window.location.assign('/#/view-course')
	}

	render() {
		const {user} = this.props

		console.log(user)
		if (user.user != null) {
			var legal = user.user.legalEntity
			var address1 = user.user.address1
			var address2 = user.user.address2
			var city = user.user.card
			var country = user.user.country
			var phone = user.user.phone
			var fax = user.user.fax
			var email = user.user.email

			return (
				<div>
				<LearnHeader/>  

	          <div  className="learn-content mdl-typography--text-center">
	              <div style={spacerStyle} />
	              <Card shadow={0} style={cardStyle} >
	                <CardTitle style={cardTitleStyle} className="mdl-color--indigo mdl-color-text--white mdl-shadow--2dp">Expression of Interest Form</CardTitle>
              <div className="mdl-layout__content" style={{textAlign: 'center'}}>
        		<a name="top" />
	            <div style={{width: '80%', margin: 'auto'}}>

					<h4>Cover Letter</h4>
                        <hr/>
                        <Textfield label="date" className="form-control" ref="date"  placeholder="Date" id="date"/>
                        <br/>
	            <h6>Purchaser Details: </h6>
	            <h6>Legal Name: &nbsp; {legal}</h6>
	            <h6>Address Line 1: &nbsp; {address1}</h6>
	            <h6>Address Line 2: &nbsp; {address2}</h6>
	            <h6>City: &nbsp; {city}</h6>
	            <h6>Country: &nbsp; {country}</h6>
	            <h6>Phone: &nbsp; {phone}</h6>
	            <h6>Fax Number: &nbsp; {fax}</h6>
 				<h6>On behalf of <Textfield label="purchaser" className="form-control" ref="purchaser"  placeholder="purchaser" id="purchaser"/>
                  ("The Purchaser"), your company ("Respondent") is invited to submit a response to this Expression of Interest. The Purchaser plans
                  to issue a Request for Proposal (RFP) for the provision of <Textfield label="service" className="form-control" ref="service"  placeholder="service" id="service"/>
                  services. The current schedule is to issue the RFP <Textfield label="text1" className="form-control" ref="text1"  placeholder="text1" id="text1"/> with contract award by
                <Textfield label="text2" className="form-control" ref="text2"  placeholder="text2" id="text2"/>. Please complete the attached EOI Questionnaire and Confidentiality Agreement
                and return, via email, as detailed below:
				</h6>

                <Textfield label="closeDate" className="form-control" ref="closeDate"  placeholder="Close Date:" id="closeDate"/>
                &nbsp;
                <Textfield label="closeTime" className="form-control" ref="closeTime"  placeholder="Close Time:" id="closeTime"/>
                <h6>Response sent to:
                    &nbsp;<Textfield label="name1" className="form-control" ref="name1"  placeholder="Name" id="name1"/>
                    &nbsp;<Textfield label="title1" className="form-control" ref="title1"  placeholder="Title" id="title1"/>
                </h6>
                    <Textfield label="email1" className="form-control" ref="email1"  placeholder="Email" id="email1"/>

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
                    <Textfield label="name2" className="form-control" ref="name2"  placeholder="Name" id="name2"/>
                    <br/>
                    <Textfield label="title2" className="form-control" ref="title2"  placeholder="Title" id="title2"/>
                    <br/>
                    <Textfield label="email2" className="form-control" ref="email2"  placeholder="Email" id="email2"/>
                    <br/>
                    <Textfield label="phone" className="form-control" ref="phone"  placeholder="Phone" id="phone"/>




                <hr/>
                <h4>Appendix 1: EOI Questionnaire</h4>
                <hr/>
                <h6>Vendor's{/*'*/} Legal Company Name:</h6>
                <Textfield label="company_name" className="form-control" ref="company_name"  placeholder="Company Name" id="company_name"/>
	            <div>
	              <label>Based upon the information provided in this EOI, advise if your company would like to be considered for participation in the Request for Proposal (RFP).<br/>
	                <br/>
	                <input type="radio" name="RFP_par" value="RFP_parY" id="RFP_parYes"/>Yes, we would like to be considered for the RFP.<br/>
	                <input type="radio" name="RFP_par" value="RFP_parN" id="RFP_parNo"/>No, we do not want to be considered for the RFP.<br/>
	              </label>
	            </div>
	            <h6>If your response is in the affirmative, the Vendor is to provide the information requested in sections 1 through 4 below.</h6>
	            <h6>Company Address:&nbsp; <textarea rows="2" cols="50" id="vendor_company_address"></textarea></h6>
	            <h6>Contact Name:&nbsp; <textarea rows="2" cols="50" id="vendor_contact_name"></textarea></h6>
	            <h6>Contact's{/*'*/} Title and Position:&nbsp; <textarea rows="1" cols="50" id="vendor_contact_title_position"></textarea></h6>
	            <h6>Primary Telephone Number:&nbsp; <textarea rows="1" cols="50" id="vendor_primary_telephone"></textarea></h6>
	            <h6>Alternate Telephone Number:&nbsp; <textarea rows="1" cols="50" id="vendor_alternate_telephone"></textarea></h6>
	            <h6>Fax Number:&nbsp; <textarea rows="1" cols="50" id="vendor_fax"></textarea></h6>
	            <h6>Email:&nbsp; <textarea rows="1" cols="50" id="vendor_email"></textarea></h6>
	            
	            <div>
	              <label>Confirm your company is approved in [jurisdiction] for the work reflected in this EOI.<br/>
	                <br/>
	                <input type="radio" name="company_approved" value="company_approvedY" id="company_approvedYes"/>Yes &nbsp;
	                <input type="radio" name="company_approved" value="company_approvedN" id="company_approvedNo"/>No
	              </label>
	            </div>

				<h6>Comments (optional):&nbsp; <textarea rows="4" cols="50" id="optional_comments"></textarea></h6>
	            
	            <h6>Email: &nbsp;<Textfield label="email" className="form-control" ref="email"  placeholder="Email" id="email"/></h6>
	            <br/>


	            <CardActions>
	              <Button accent ripple className="mdl-color-text--indigo btn btn-primary" onClick={this.requestSubmit.bind(this)}>Submit</Button>
	              <Button accent ripple className="mdl-color-text--indigo btn btn-primary" onClick={this.return_back.bind(this)}>Back</Button>
	            </CardActions>
	            </div>
	            </div>
	          </Card>
	          </div>

	            <LearnFooter/>
	            </div>
			)

		} else {
		return (
				<div>
				<LearnHeader/>  

	          <div  className="learn-content mdl-typography--text-center">
	              <div style={spacerStyle} />
	              <Card shadow={0} style={cardStyle} >
	                <CardTitle className="mdl-color--indigo mdl-color-text--white mdl-shadow--2dp">Expression of Interest Form</CardTitle>
	                
	            <div style={{width: '80%', margin: 'auto'}}>
	            
	      <h4>LOADING...</h4>
	            </div>

	          </Card>
	          </div>
	            <LearnFooter/>
	            </div>
	    )
		}
	}

}

export default CourseEOI