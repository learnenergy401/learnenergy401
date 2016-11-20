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

import { storeRFPs, getCurrentUser, fetchRFPfromEOI } from "../Actions/userActions"

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
    height:'50px'
}


@connect((store) => {
  return {
    user: store.user
  };
})

class RFPfromEOI extends Component {

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

        var date = document.getElementById("date").value
        var purchaser = document.getElementById("purchaser").value
        var service = document.getElementById("service").value
        var LMRFPnum = document.getElementById("LMRFPnum").value
        var closeDate = document.getElementById("closeDate").value
        var closeTime = document.getElementById("closeTime").value
        var name1 = document.getElementById("name1").value
        var title1 = document.getElementById("title1").value
        var email1 = document.getElementById("email1").value
        var name2 = document.getElementById("name2").value
        var title2 = document.getElementById("title2").value
        var email2 = document.getElementById("email2").value
        var phone = document.getElementById("phone").value

        var info = {date, purchaser, service, LMRFPnum, closeDate, closeTime, name1, title1,  email1,
        name2, title2, email2, phone, }

        // do this X times for X vendors 
        this.storeRFPs(info)

    }

	render() {

        const {user} = this.props
        console.log('user is', user)

        if (user.user!=null && user.role == 0 &&user.rfp_from_eoi!=null) {

            console.log(user)

            var uid
            var currentUser = firebaseAuth.currentUser
            if (currentUser!=null) {
                uid = currentUser.uid
            }

            var vendor = user.rfp_from_eoi[uid].vendor

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

                  <div className="learn-content mdl-typography--text-center">
                  <div style={spacerStyle} />
                  <Card shadow={0} style={cardStyle} >
                  <CardTitle style={cardTitleStyle} className="mdl-color--indigo mdl-color-text--white mdl-shadow--2dp">Request For Proposal Form</CardTitle>
                  <div className="mdl-layout__content" style={{textAlign: 'center'}}>
                  <a name="top" />
                  <div style={{width: '80%', margin: 'auto'}}>

                    <h4>Cover Letter</h4>
                    <hr/>
                    <Textfield label="date" className="form-control" ref="date"  placeholder="Date" id="date"/>
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
                    On behalf of <Textfield label="purchaser" className="form-control" ref="purchaser"  placeholder="purchaser" id="purchaser"/>
                    ("The Purchaser"), your company ("Vendor") is invited to submit a response to this Request for Proposal. This Request for Proposal (RFP)
                    is for the provision of <Textfield label="service" className="form-control" ref="service"  placeholder="service" id="service"/>
                    services.
                    </h6>
                    <h6>
                    Please review the Request for Proposal and Attachment 1, complete the Response Form Attachment 2, add any supplemental
                    information and upload to the Purchaser&#39;s LM RFP# <Textfield label="LMRFPnum" className="form-control" ref="LMRFPnum"  placeholder="###" id="LMRFPnum"/>
                    response folder. And emailed to our contact below by the Closing Date and Time.
                    </h6>

                    <Textfield label="closeDate" className="form-control" ref="closeDate"  placeholder="Close Date:" id="closeDate"/>
                    &nbsp;
                    <Textfield label="closeTime" className="form-control" ref="closeTime"  placeholder="Close Time:" id="closeTime"/>
                    <h6>Questions sent to:
                    &nbsp;<Textfield label="name1" className="form-control" ref="name1"  placeholder="Name" id="name1"/>
                    &nbsp;<Textfield label="title1" className="form-control" ref="title1"  placeholder="Title" id="title1"/>
                    </h6>
                    <Textfield label="email1" className="form-control" ref="email1"  placeholder="Email" id="email1"/>

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
                    <Textfield label="name2" className="form-control" ref="name2"  placeholder="Name" id="name2"/>
                    <br/>
                    <Textfield label="title2" className="form-control" ref="title2"  placeholder="Title" id="title2"/>
                    <br/>
                    <Textfield label="email2" className="form-control" ref="email2"  placeholder="Email" id="email2"/>
                    <br/>
                    <Textfield label="phone" className="form-control" ref="phone"  placeholder="Phone" id="phone"/>


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
