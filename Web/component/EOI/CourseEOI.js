import React, { Component } from 'react';
import {Button,Layout,Header} from 'react-mdl';

import LearnLogo from '../Logo.js';
import LearnNavigation from '../Navigation.js';
import store from '../Store.js'
import {firebaseApp,firebaseAuth,firebaseDb, firebaseStorage, firebaseAuthInstance } from '../Firebase'
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

import { fetchReqEOI, storeEOIs, storeKeyRole, fetchVendorSignup, fetchPurchaserSignup, 
	fetchADSignup, getCurrentUser } from "../Actions/userActions"

@connect((store) => {
  return {
    user: store.user
  };
})

class CourseEOI extends Component {

	storeEOIs(info) {
		this.props.dispatch(storeEOIs(info))
	}

	fetchReqEOI() {
		this.props.dispatch(fetchReqEOI())
	}

	componentWillMount() {
		this.fetchReqEOI()
	}

	requestSubmit() { // stores an EOI into the table

		const {user} = this.props
		var vendor = user.reqEOI.vendor_uid
		var uid = user.reqEOI.user_uid
		var course = user.reqEOI.course_uid

		var email = document.getElementById("email").value

		var info = {vendor, uid, course, email}

		this.storeEOIs(info)
	}

	return_back() {
		window.location.assign('/#/view-course')
	}

	render() {
		return (
            <div>
            <LearnHeader/>            
            <h6>Email:</h6>
            <br/>
            <Textfield label="email" className="form-control" ref="email"  placeholder="Email" id="email"/>
            <br/>
            <CardActions>
              <Button accent ripple className="mdl-color-text--indigo btn btn-primary" onClick={this.requestSubmit.bind(this)}>Submit_EOI</Button>
              <Button accent ripple className="mdl-color-text--indigo btn btn-primary" onClick={this.return_back.bind(this)}>Back</Button>
            
            </CardActions>
            <LearnFooter/>
            </div>
		)

	}

}