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

        var info = {vendor, uid, course, email, date, service}



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
                        to issue a Request for Proposal (RFP) for the provision of


                        </h6>





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