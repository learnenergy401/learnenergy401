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

import { storeRFPs, getCurrentUser, fetchRFPfromEOI, removeEOI } from "../Actions/userActions"

var spacerStyle = {
    height: '50px',
    backgroundColor: '#f3f3f3',
    backgroundSize: 'cover'
}

var buttonStyle = {
    position: "fixed",
    right: "0",
    bottom: "0",
    marginRight: "40px",
    marginBottom:"40px",
    zIndex: "900"
}

var cardStyle = {
    width: '80%',
    margin: 'auto',
    paddingBottom: "80px"
}

var cardTitleStyle = {
}


@connect((store) => {
  return {
    user: store.user
  };
})

class RFPfromEOI extends Component {
    /**
     * Removes EOIs
     * @params {object} info - key to remove
     */
    removeEOI(info) {
        this.props.dispatch(removeEOI(info))
    }
    getCurrentUser() {
        this.props.dispatch(getCurrentUser())
    }

    storeRFPs(info) {
        this.props.dispatch(storeRFPs(info))
    }

    fetchRFPfromEOI() {
        this.props.dispatch(fetchRFPfromEOI())
    }

    componentWillMount() {
        this.getCurrentUser()
        this.fetchRFPfromEOI()
    }

    requestSubmit() {
        const {user} = this.props
        var date = document.getElementById("date").value
        var purchaser1 = document.getElementById("purchaser").value
        var service = document.getElementById("service").value

        var closeDate = document.getElementById("closeDate").value
        var closeTime = document.getElementById("closeTime").value
        var name1 = document.getElementById("name1").value
        var title1 = document.getElementById("title1").value
        var email1 = document.getElementById("email1").value
        var name2 = document.getElementById("name2").value
        var title2 = document.getElementById("title2").value
        var email2 = document.getElementById("email2").value
        var phone = document.getElementById("phone").value

        var TSissue_date = document.getElementById("TSissue_date").value
        var TSclosing_date = document.getElementById("TSclosing_date").value
        var company_background = document.getElementById("company_background").value
        var rfp_overview = document.getElementById("rfp_overview").value
        var rfp_title = document.getElementById("rfp_title").value
        var rfp_contact = document.getElementById("rfp_contact").value
        var rfp_closing_date = document.getElementById("rfp_closing_date").value
        var rfp_question_close = document.getElementById("rfp_question_close").value
        var conflict_interest = document.getElementById("conflict_interest").value
        var attachment1 = document.getElementById("attachment1").value
        var description1 = document.getElementById("description1").value
        var daily_rate1 = document.getElementById("daily_rate1").value
        var package_rate1 = document.getElementById("package_rate1").value
        var details1 = document.getElementById("details1").value

        var description2 = document.getElementById("description2").value
        var daily_rate2 = document.getElementById("daily_rate2").value
        var package_rate2 = document.getElementById("package_rate2").value
        var details2 = document.getElementById("details2").value

        var description3 = document.getElementById("description3").value
        var daily_rate3 = document.getElementById("daily_rate3").value
        var package_rate3 = document.getElementById("package_rate3").value
        var details3 = document.getElementById("details3").value

        var description4 = document.getElementById("description4").value
        var daily_rate4 = document.getElementById("daily_rate4").value
        var package_rate4 = document.getElementById("package_rate4").value
        var details4 = document.getElementById("details4").value

        var markup_dollar = document.getElementById("markup_dollar").value
        var markup_percent = document.getElementById("markup_percent").value

        var schedule_start = document.getElementById("schedule_start").value
        var schedule_completion = document.getElementById("schedule_completion").value

        var sub1 = document.getElementById("sub1").value
        var sub_description1 = document.getElementById("sub_description1").value
        var sub2 = document.getElementById("sub2").value
        var sub_description2 = document.getElementById("sub_description2").value
        var sub3 = document.getElementById("sub3").value
        var sub_description3 = document.getElementById("sub_description3").value
        var sub4 = document.getElementById("sub4").value
        var sub_description4 = document.getElementById("sub_description4").value

        var ref1 = document.getElementById("ref1").value
        var ref_company1 = document.getElementById("ref_company1").value
        var ref_contact1 = document.getElementById("ref_contact1").value
        var ref_phone1 = document.getElementById("ref_phone1").value
        var ref_email1 = document.getElementById("ref_email1").value

        var ref2 = document.getElementById("ref2").value
        var ref_company2 = document.getElementById("ref_company2").value
        var ref_contact2 = document.getElementById("ref_contact2").value
        var ref_phone2 = document.getElementById("ref_phone2").value
        var ref_email2 = document.getElementById("ref_email2").value

        var ref3 = document.getElementById("ref3").value
        var ref_company3 = document.getElementById("ref_company3").value
        var ref_contact3 = document.getElementById("ref_contact3").value
        var ref_phone3 = document.getElementById("ref_phone3").value
        var ref_email3 = document.getElementById("ref_email3").value

        var additional_info = document.getElementById("additional_info").value

        var LMRFPnum = user.rfp_from_eoi.LMRFPnum
        var vendor = user.rfp_from_eoi.vendor
        var purchaser = user.rfp_from_eoi.purchaser

        var info = {date, purchaser1, service, LMRFPnum, closeDate, closeTime, name1, title1,  email1,
        name2, title2, email2, phone, TSissue_date, TSclosing_date, company_background, rfp_overview,
        rfp_title, rfp_contact, rfp_closing_date, rfp_question_close, conflict_interest, attachment1,
        description1, daily_rate1, package_rate1, details1, description2, daily_rate2, package_rate2, details2,
        description3, daily_rate3, package_rate3, details3, description4, daily_rate4, package_rate4, details4,
        markup_dollar, markup_percent, schedule_start, schedule_completion, sub1, sub_description1,
        sub2, sub_description2, sub3, sub_description3, sub4, sub_description4, ref1, ref_company1, ref_contact1, ref_phone1, ref_email1,
        ref2, ref_company2, ref_contact2, ref_phone2, ref_email2, ref3, ref_company3, ref_contact3, ref_phone3, ref_email3,
        additional_info, vendor, purchaser}

        // do this X times for X vendors
        this.storeRFPs(info)

        var key_name = user.eoiKey.key_name
        var key = {key_name}

        this.removeEOI(key)
        window.location.assign("/#/review-eoi-rfp")

    }

	render() {

        const {user} = this.props
        console.log('user is', user)

        if (user.user!=null && user.role == 0 &&user.rfp_from_eoi!=null) {

            console.log(user)

            var vendor = user.rfp_from_eoi.vendor
            var LMRFPnum = user.rfp_from_eoi.LMRFPnum

            console.log(vendor)

            var purchaser_legal = user.user.legalEntity
            var purchaser_address1 = user.user.address1
            var purchaser_address2 = user.user.address2
            var purchaser_city = user.user.city
            var purchaser_country = user.user.country
            var purchaser_phone = user.user.phone
            var purchaser_fax = user.user.fax

    		return(

              <div>
                <LearnHeader/>

                  <div className="learn-content mdl-typography--text-left">
                  <div style={spacerStyle} />
                  <Card shadow={0} style={cardStyle} >
                  <CardTitle style={cardTitleStyle} className="mdl-color--indigo mdl-color-text--white mdl-shadow--2dp">Request For Proposal Form</CardTitle>
                  <div className="mdl-layout__content" style={{textAlign: 'left'}}>
                  <a name="top" />
                  <div style={{width: '80%', margin: 'auto'}}>

                    <u><h4>Cover Letter</h4></u>
                    <hr/>
                    <Textfield floatingLabel style={{width:'200px'}} type="date" label="Date" id="date"/>
                    <br/>

                    <h6>Purchaser Details: </h6>
                    <h6>Legal Name: &nbsp; {purchaser_legal}</h6>
                    <h6>Address Line 1: &nbsp; {purchaser_address1}</h6>
                    <h6>Address Line 2: &nbsp; {purchaser_address2}</h6>
                    <h6>City: &nbsp; {purchaser_city}</h6>
                    <h6>Country: &nbsp; {purchaser_country}</h6>
                    <h6>Phone: &nbsp; {purchaser_phone}</h6>
                    <h6>Fax Number: &nbsp; {purchaser_fax}</h6>
                    <h6>
                    On behalf of
                    &nbsp;<Textfield floatingLabel style={{width:'300px'}} label="Purchaser" id="purchaser"/>&nbsp;
                    ("The Purchaser"), your company ("Vendor") is invited to submit a response to this Request for Proposal. This Request for Proposal (RFP)
                    is for the provision of
                    &nbsp;<Textfield floatingLabel style={{width:'300px'}} label="Service" id="service"/>&nbsp;
                    services.
                    </h6>
                    <hr/>

                    <h6>
                    Please review the Request for Proposal and Attachment 1, complete the Response Form Attachment 2, add any supplemental
                    information and upload to the Purchaser&#39;s LM RFP# {LMRFPnum} &nbsp;
                    response folder. And emailed to our contact below by the Closing Date and Time.
                    </h6>

                    <hr/>
                    <Textfield floatingLabel style={{width:'300px'}} label="Close Date:" id="closeDate"/>
                    &nbsp;
                    <Textfield floatingLabel style={{width:'300px'}} label="Close Time:" id="closeTime"/>
                    <hr/>

                    <h6>Questions sent to:<br/>
                    <Textfield floatingLabel style={{width:'300px'}} label="Name" id="name1"/>
                    &nbsp;<Textfield floatingLabel style={{width:'300px'}} label="Title" id="title1"/>
                    </h6>
                    <Textfield floatingLabel style={{width:'300px'}} label="Email" id="email1"/>
                    <hr/>

                    <h6>
                    Vendor assumes full responsibility for delivery of the completed Response to the Request for Proposal
                    before the Closing Date and time. The Purchaser is not responsible for any loss or delay with respect to
                    the delivery of these documents. In addition, any and all costs incurred in responding to this RFP,
                    meetings, or any other related activities are the sole responsibility of the Vendor.
                    </h6>
                    <h6>
                    This Request for Proposal will be issued to multiple companies and the Purchaser reserves the right to reject any or all responses provided.
                    </h6>
                    <h6>
                    Should you require additional information, please contact the undersigned.
                    </h6>
                    <h6> With Best Regards,</h6>
                    <Textfield floatingLabel style={{width:'300px'}} label="Name" id="name2"/>
                    <br/>
      							<Textfield floatingLabel style={{width:'300px'}} label="Title" id="title2"/>
                    <br/>
      							<Textfield floatingLabel style={{width:'300px'}} label="Email" id="email2"/>
                    <br/>
      							<Textfield floatingLabel style={{width:'300px'}} label="Phone" id="phone"/>
                    <hr/>

      							<br/><br/><br/>
                    <hr/>
                    <h4>Training Services Request for Proposal</h4>
                    <h6>LM RFP#: &nbsp; {LMRFPnum}</h6>
                    <h6>Issue Date:&nbsp;<Textfield floatingLabel style={{width:'200px'}} type="date" label="" id="TSissue_date"/></h6>
                    <h6>Closing Date:&nbsp;<Textfield floatingLabel style={{width:'200px'}} type="date" label="" id="TSclosing_date"/> at 14:00 (Local Time)</h6>
                    <hr/>

                    <h5>1. Introduction</h5>
                    <h6><u>1.1 Company Background</u></h6>
                    <textarea rows="4" cols="100" id="company_background"></textarea>
                    <h6><u>1.2 RFP Overview</u></h6>
                    <h7>The intent of this RFP is to find successful Vendors capable of providing the following Training Services:</h7>
                    <textarea rows="4" cols="100" id="rfp_overview"></textarea>
                    <hr/>

                    <h5>2. Response Guidelines</h5>
                    <h6><u>2.1 RFP Details</u></h6>
                    <h6>RFP Title:&nbsp;<Textfield floatingLabel style={{width:'300px'}} label="" id="rfp_title"/></h6>
                    <h6>RFP Number: &nbsp; {LMRFPnum}</h6>
                    <h6>RFP Contact:&nbsp;<Textfield floatingLabel style={{width:'300px'}} label="" id="rfp_contact"/></h6>
                    <h6>Closing Date:&nbsp;<Textfield floatingLabel style={{width:'200px'}} type="date" label="" id="rfp_closing_date"/></h6>
                    <h6>Closing of Questions:&nbsp;<Textfield floatingLabel style={{width:'200px'}} type="date" label="" id="rfp_question_close"/></h6>
                    <h6><u>2.2 Submission of Response</u></h6>
                    <h6>
                    Replies must uploaded to the {purchaser_legal}s LM RFP# {LMRFPnum} folder and be received by the email inbox of the RFP Contact on or before the Closing Date.
                    {purchaser_legal} ("The Purchaser") takes no responsibility for Replies that are undeliverable due to incorrect email address, filters, hardware and/or software outages,
                    file size estrictions or similar issues. Vendors should confirm receipt of its response with the RFP Contact prior to the Closing Date.
                    </h6>
                    <h6><u>2.3 Vendors Qualifications</u></h6>
                    <h6>
                    The Purchaser reserves the right to interview Vendors, contact references provided and request security clearance checks to assess Vendor’s suitability for a contract.
                    </h6>
                    <h6><u>2.4 Inquiries</u></h6>
                    <h6>
                    Should any additional details be required, Vendors are request clarification prior to submitting a response. Questions regarding this RFP are to be submitted in writing prior to the closing date.
                    </h6>
                    <h6><u>2.5 Permits, Licenses, Authorizations and Approvals</u></h6>
                    <h6>
                    If required, the successful Vendor(s) will obtain permits, licenses and approvals required in connection with the scope of work and include the cost of obtaining these in their response.
                    </h6>
                    <h6><u>2.6 Policies, Procedures and Other Requirements for Contractors (as applicable)</u></h6>
                    <h6>
                    The successful Vendor will be required to adhere to all applicable legislation and regulations governing the site of the Services and all applicable Purchaser policies,
                    procedures and other requirements for contractors including, but not limited to, Health, Safety and Environment Policies and Requirements. It is the responsibility of Vendors to
                    familiarize themselves with all associated policies and requirements prior to submitting a response.
                    </h6>
                    <h6><u>2.7 Modification or Cancellation of RFP</u></h6>
                    <h6>
                    The Purchaser reserves the right to modify, cancel or withdraw this RFP, and/or to issue a subsequent RFP at Purchaser’s sole discretion.
                    </h6>
                    <h6><u>2.8 Confidentiality</u></h6>
                    <h6>
                    Information in this RFP, or information obtained by a Vendor in related discussions is confidential and shall not be disclosed unless authorized by Purchaser in writing. Vendor’s responses
                    shall become the property of Purchaser subject to claims of confidentiality.
                    </h6>
                    <h6><u>2.8 Governing Law</u></h6>
                    <h6>
                    All matters in connection with this RFP shall be governed by and construed in accordance with the laws of {purchaser_city}. In submitting a response the Vendor agrees to submit to the
                    jurisdiction of the Courts of {purchaser_city} and be governed by the laws of {purchaser_city}.
                    </h6>
                    <hr/>

                    <h5>3. Format of Response</h5>
                    <h6><u>3.1 Instructions</u></h6>
                    <h6>
                    Vendors are to use the attached Response Forms and clearly label all supplementary information. The Purchaser will not be bound by any disclaimer in a response.
                    </h6>
                    <h6><u>3.2 Contract Form</u></h6>
                    <h6>
                    The Contract between the Purchaser and a successful Vendor will include the terms and conditions that will govern the services between the parties. The Purchaser reserves the
                    right to negotiate the final terms of any Contract.
                    </h6>
                    <h6><u>3.3 Vendor Pricing and Assumptions</u></h6>
                    <h6>
                    Vendors are to conform to the pricing requirements identified in the Response Forms.
                    </h6>
                    <h6><u>3.4 Vendor Pricing and Assumptions</u></h6>
                    <h6>
                    Conflict of Interest (insert company policies as applicable)
                    </h6>
                    <textarea rows="4" cols="100" id="conflict_interest"></textarea>
                    <hr/>

                    <h5>4. Evaluation Criteria</h5>
                    <h6><u>4.1 Vendor Pricing and Assumptions</u></h6>
                    <h6>
                    Each response will be evaluated based upon the quality of the response and scored in accordance with pre-established criteria.
                    </h6>
                    <h6><u>4.2 Demonstrations and Presentations</u></h6>
                    <h6>
                    The Purchaser may choose to conduct face-to- face meetings to interview Vendors and allow them to present qualifications or demonstrate
                    qualifications that are the same as, or similar to that sought by the Purchaser.
                    </h6>
                    <hr/>

                    <br/><br/><br/>
                    <hr/>
                    <h4>LM RFP# {LMRFPnum} ATTACHMENT 1 – SCOPE OF SERVICES</h4>
                    <hr/>
                    <h6><u>1.0 General</u></h6>
                    <h6>
                    Vendors are invited to submit a Reply to this Request for Proposals (RFP) to provide Training Services to {purchaser_legal}.
                    The scope of Training services includes the Training requirements stated below.
                    </h6>
                    <h6><u>Considerations to include in the scope:</u>&nbsp;Purchasers Detailed description Schedule OR may be replaced with Vendors recommended solution and timelines</h6>
                    <h6><u>Key items/requirements for the Purchaser to consider when developing the scope of services:</u></h6>
                    <ul>
                    <li>Continuity of Key Project Resources</li>
                    <li>Regulatory Requirements</li>
                    </ul>

                    <ul type="circle">
                    <li>Site Access</li>
                    <li>Orientation(s)</li>
                    <li>Security clearance</li>
                    <li>Workers compensation requirements (jurisdiction specific)</li>
                    <li>Insurance</li>
                    </ul>

                    <ul>
                    <li>HSE (jurisdiction specific):</li>
                    <li>Personal Protective Equipment (PPE)</li>
                    <li>COR / CSTS (Canada only)</li>
                    <li>Hazard Identification</li>
                    <li>Hazardous goods</li>
                    <li>WHMIS / GHS</li>
                    <li>Emergency preparedness and response</li>
                    <li>Incident management</li>
                    <li>Worker health & hygiene</li>
                    </ul>

                    <ul>
                    <li>Objectives and Targets</li>
                    <li>Communication / Reporting / Documentation</li>
                    <li>Performance Measurement</li>
                    </ul>

                    <ul type="circle">
                    <li>Legislated requirements:</li>
                    <li>Codes</li>
                    <li>Standards</li>
                    <li>Laws</li>
                    <li>Foreign Worker permits</li>
                    </ul>

                    <ul>
                    <li>Payment</li>
                    <li>Holdbacks</li>
                    <li>Local, Regional and Federal Taxes</li>
                    <li>Non-Resident Withholding Taxes for foreign service providers</li>
                    </ul>

                    <h6>Attachement 1:</h6>
                    <textarea rows="50" cols="120" id="attachment1"></textarea>
                    <hr/>

                    <br/><br/><br/>
                    <hr/>
                    <h4>LM RFP# {LMRFPnum} ATTACHMENT 2 – RESPONSE FORMS</h4>
                    <hr/>
                    <h5>1. Pricing</h5>
                    <h6>1.1 Pricing is to be in [selected currency] currency and all duties, taxes, and levies will be deemed to be included. All taxes are to be shown separately.</h6>
                    <h6>1.2 Pricing is to be inclusive of wages, travel, expenses, materials, tools and equipment, company overheads, etc..</h6>
                    <h6>1.3 Provide pricing and details which will cover all training requirements and sessions listed in the RFP Document Article 1.2 in the table below:</h6>

                    <h6>Description 1: <textarea rows="4" cols="100" id="description1"></textarea></h6>
                    <h6>Daily Rate 1: &nbsp; <Textfield label="daily_rate1" className="form-control" ref="daily_rate1"  placeholder="Daily Rate 1" id="daily_rate1"/></h6>
                    <h6>Package Rate 1: &nbsp; <Textfield label="package_rate1" className="form-control" ref="package_rate1"  placeholder="Package Rate 1" id="package_rate1"/></h6>
                    <h6>Details 1: <textarea rows="4" cols="100" id="details1"></textarea></h6>
                    <hr/>
                    <h6>Description 2: <textarea rows="4" cols="100" id="description2"></textarea></h6>
                    <h6>Daily Rate 2: &nbsp; <Textfield label="daily_rate2" className="form-control" ref="daily_rate2"  placeholder="Daily Rate 2" id="daily_rate2"/></h6>
                    <h6>Package Rate 2: &nbsp; <Textfield label="package_rate2" className="form-control" ref="package_rate2"  placeholder="Package Rate 2" id="package_rate2"/></h6>
                    <h6>Details 2: <textarea rows="4" cols="100" id="details2"></textarea></h6>
                    <hr/>
                    <h6>Description 3: <textarea rows="4" cols="100" id="description3"></textarea></h6>
                    <h6>Daily Rate 3: &nbsp; <Textfield label="daily_rate3" className="form-control" ref="daily_rate3"  placeholder="Daily Rate 3" id="daily_rate3"/></h6>
                    <h6>Package Rate 3: &nbsp; <Textfield label="package_rate3" className="form-control" ref="package_rate3"  placeholder="Package Rate 3" id="package_rate3"/></h6>
                    <h6>Details 3: <textarea rows="4" cols="100" id="details3"></textarea></h6>
                    <hr/>
                    <h6>Description 4: <textarea rows="4" cols="100" id="description4"></textarea></h6>
                    <h6>Daily Rate 4: &nbsp; <Textfield label="daily_rate4" className="form-control" ref="daily_rate4"  placeholder="Daily Rate 4" id="daily_rate4"/></h6>
                    <h6>Package Rate 4: &nbsp; <Textfield label="package_rate4" className="form-control" ref="package_rate4"  placeholder="Package Rate 4" id="package_rate4"/></h6>
                    <h6>Details 4: <textarea rows="4" cols="100" id="details4"></textarea></h6>
                    <hr/>

                    <h6>1.4 Provide (where applicable), the Vendors markup applied to the actual cost of travel and living expenses:</h6>
                    <h6>$: &nbsp; <Textfield label="markup_dollar" className="form-control" ref="markup_dollar"  placeholder="$$$" id="markup_dollar"/></h6>
                    <h6>OR</h6>
                    <h6>%: &nbsp; <Textfield label="markup_percent" className="form-control" ref="markup_percent"  placeholder="%%%" id="markup_percent"/></h6>

                    <h6>NOTE: Travel expenses will be reimbursed by {purchaser_legal} upon submission of receipts or satisfactory proof of payment for reimbursement of expenses. Receipts or satisfactory proof of payment is required for:</h6>

                    <ul>
                    <li>Air fare</li>
                    <li>Automobile: Fuel, Claims for mileage shall not exceed the rates stipulated in [state applicable government agency]</li>
                    <li>Automobile Allowance rates for the applicable period</li>
                    <li>Fares: Rail, Taxi Fares, Bus Fares</li>
                    <li>Accommodation: Consistent with pricing for a typical mid-tier establishment in the area</li>
                    <li>Meals: consistent with typical pricing for a mid-tier restaurant in the area</li>
                    </ul>

                    <hr/>
                    <h5>2. Schedule</h5>
                    <h6>2.1 Provide details of the Vendor’s schedule to meet the requirements as stated in Attachment 1 – Scope of Services.</h6>
                    <h6>Start Date: &nbsp; <Textfield label="schedule_start" className="form-control" ref="schedule_start" type="date" style={{width:'200px'}} placeholder="Start Date" id="schedule_start"/></h6>
                    <h6>Completion Date: &nbsp; <Textfield label="schedule_completion" className="form-control" ref="schedule_completion" type="date" style={{width:'200px'}} placeholder="Completion Date" id="schedule_completion"/></h6>

                    <hr/>
                    <h5>3. Subcontractors</h5>
                    <h6>3.1 Provide the names of any Subcontractors proposed to be used:</h6>
                    <hr/>
                    <h6>Name 1: &nbsp; <Textfield label="sub1" className="form-control" ref="sub1"  placeholder="Name" id="sub1"/></h6>
                    <h6>Task / Description of Work Performed: <textarea rows="4" cols="100" id="sub_description1"></textarea></h6>
                    <hr/>
                    <h6>Name 2: &nbsp; <Textfield label="sub2" className="form-control" ref="sub2"  placeholder="Name" id="sub2"/></h6>
                    <h6>Task / Description of Work Performed: <textarea rows="4" cols="100" id="sub_description2"></textarea></h6>
                    <hr/>
                    <h6>Name 3: &nbsp; <Textfield label="sub3" className="form-control" ref="sub3"  placeholder="Name" id="sub3"/></h6>
                    <h6>Task / Description of Work Performed: <textarea rows="4" cols="100" id="sub_description3"></textarea></h6>
                    <hr/>
                    <h6>Name 4: &nbsp; <Textfield label="sub4" className="form-control" ref="sub4"  placeholder="Name" id="sub4"/></h6>
                    <h6>Task / Description of Work Performed: <textarea rows="4" cols="100" id="sub_description4"></textarea></h6>

                    <hr/>
                    <h5>4. References</h5>
                    <h6>4.1 Provide names and contact information for Vendor’s clients who had the same, or similar requirements to the Services requested in Attachment 1 – Scope of Services in the last 2 years.</h6>
                    <hr/>
                    <h6>Reference 1: &nbsp; <Textfield label="ref1" className="form-control" ref="ref1"  placeholder="Name" id="ref1"/></h6>
                    <h6>Company: &nbsp; <Textfield label="ref_company1" className="form-control" ref="ref_company1"  placeholder="Company" id="ref_company1"/>
                    &nbsp;Contact: &nbsp; <Textfield label="ref_contact1" className="form-control" ref="ref_contact1"  placeholder="Contact" id="ref_contact1"/></h6>
                    <h6>Phone: &nbsp; <Textfield label="ref_phone1" className="form-control" ref="ref_phone1"  placeholder="Phone" id="ref_phone1"/>
                    &nbsp;Email: &nbsp; <Textfield label="ref_email1" className="form-control" ref="ref_email1"  placeholder="Company" id="ref_email1"/></h6>

                    <hr/>
                    <h6>Reference 2: &nbsp; <Textfield label="ref2" className="form-control" ref="ref2"  placeholder="Name" id="ref2"/></h6>
                    <h6>Company: &nbsp; <Textfield label="ref_company2" className="form-control" ref="ref_company2"  placeholder="Company" id="ref_company2"/>
                    &nbsp;Contact: &nbsp; <Textfield label="ref_contact2" className="form-control" ref="ref_contact2"  placeholder="Contact" id="ref_contact2"/></h6>
                    <h6>Phone: &nbsp; <Textfield label="ref_phone2" className="form-control" ref="ref_phone2"  placeholder="Phone" id="ref_phone2"/>
                    &nbsp;Email: &nbsp; <Textfield label="ref_email2" className="form-control" ref="ref_email2"  placeholder="Company" id="ref_email2"/></h6>

                    <hr/>
                    <h6>Reference 3: &nbsp; <Textfield label="ref3" className="form-control" ref="ref3"  placeholder="Name" id="ref3"/></h6>
                    <h6>Company: &nbsp; <Textfield label="ref_company3" className="form-control" ref="ref_company3"  placeholder="Company" id="ref_company3"/>
                    &nbsp;Contact: &nbsp; <Textfield label="ref_contact3" className="form-control" ref="ref_contact3"  placeholder="Contact" id="ref_contact3"/></h6>
                    <h6>Phone: &nbsp; <Textfield label="ref_phone3" className="form-control" ref="ref_phone3"  placeholder="Phone" id="ref_phone3"/>
                    &nbsp;Email: &nbsp; <Textfield label="ref_email3" className="form-control" ref="ref_email3"  placeholder="Company" id="ref_email3"/></h6>

                    <hr/>
                    <hr/>
                    <h5>5. Additional Information</h5>
                    <h6>5.1 Advise of any suggestions, recommendations, options or additional opportunities toimproving training results.</h6>
                    <textarea rows="4" cols="100" id="additional_info"></textarea>
                    <hr/>

                  </div>
                  </div>
                  </Card>
                  <Button raised ripple accent className="mdl-color--indigo mdl-color-text--white" style={buttonStyle} onClick={this.requestSubmit.bind(this)}>Submit</Button>
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
                    <CardTitle className="mdl-color--indigo mdl-color-text--white mdl-shadow--2dp">Request for Proposal Form</CardTitle>

                <div style={{width: '80%', margin: 'auto'}}>

          <h4>NOT A VALID USER</h4>
                </div>

              </Card>
              </div>
                <LearnFooter/>
                </div>
        )
        }
    }

}

export default RFPfromEOI
