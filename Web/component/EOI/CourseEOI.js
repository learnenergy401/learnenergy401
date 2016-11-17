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
    center:'true'
}

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

          <div  className="learn-content mdl-typography--text-center">
              <div style={spacerStyle} />
              <Card shadow={0} style={cardStyle} >
                <CardTitle className="mdl-color--indigo mdl-color-text--white mdl-shadow--2dp">Expression of Interest Form</CardTitle>
                
            <div style={{width: '80%', margin: 'auto'}}>

            <h6>Email: &nbsp;<Textfield label="email" className="form-control" ref="email"  placeholder="Email" id="email"/></h6>
            <br/>


            <CardActions>
              <Button accent ripple className="mdl-color-text--indigo btn btn-primary" onClick={this.requestSubmit.bind(this)}>Submit_EOI</Button>
              <Button accent ripple className="mdl-color-text--indigo btn btn-primary" onClick={this.return_back.bind(this)}>Back</Button>
            </CardActions>
            </div>

          </Card>
          </div>
            <LearnFooter/>
            </div>
		)

	}

}

export default CourseEOI