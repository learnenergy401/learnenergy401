import React, { Component } from 'react';
import {Button,Layout,Header} from 'react-mdl';
import LearnHeader from '../Header.js'
import LearnFooter from '../Footer.js'

import LearnLogo from '../Logo.js';
import LearnNavigation from '../Navigation.js';
import store from '../Store.js'
import {firebaseApp,firebaseAuth,firebaseDb, firebaseStorage, firebaseAuthInstance } from '../Firebase'
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import { connect } from "react-redux"
import { removeEOI, storeEOIkey, fetchEOIs } from "../Actions/userActions"

@connect((store) => {
  return {
    user: store.user
  };
})

class ReviewEOI extends Component {

	fetchEOIs() {
		this.props.dispatch(fetchEOIs())
	}

	removeEOI(key) {
		this.props.dispatch(removeEOI(key))
	}

	storeEOIkey(info) {
		this.props.dispatch(storeEOIkey(info))
	}

	componentWillMount() {
		this.fetchEOIs()
	}

	removeEOI(key_name) {
		console.log("remove")
		var key = {key_name}
		this.removeEOI(key) // automatically reloads page

	}

	review(key_name) {
		console.log("review")

		const {user} = this.props
		var info = {key_name}
		this.storeEOIkey(info)
		window.location.assign('/#/review-eoi/details')
	}

	render() {

		const {user} = this.props

		if (user.role == 1) {
			var EOIs = []

			// grab uid of current user
			var uid
		    firebaseAuth.onAuthStateChanged((user)=>{
      			if (user){
      				uid = user.uid
      			}
      		})

      		// grab information on EOIs if they match out vendor's uid
			var keys
			if (user.eoi != null) {
				keys = Object.keys(user.eoi)
				for (var count=0; count<=keys.length-1; count++) {
					var key_name = keys[count]
					if (user.eoi[key_name].vendor == uid) {
						EOIs.push(user.eoi[key_name].email)
						EOIs.push(<br/>)
						EOIs.push(<div>
	              		<Button accent ripple onClick={this.removeEOI.bind(this,key_name)} className="mdl-color-text--indigo btn btn-primary">Remove</Button>
	              		<Button accent ripple onClick={this.review.bind(this,key_name)} className="mdl-color-text--indigo btn btn-primary">Review</Button>
	        			</div>)
	        			EOIs.push(<br/>)
	        		}
				}
			}

			// Display our EOIs if any
			if (EOIs.length != 0) {
				return (
		          <div>
		          <LearnHeader/>

		          <div className="learn-content mdl-typography--text-center">
		          <div className="logo-font learn-slogan"></div>
		          <a name="top" />
		          <div className="learn-content mdl-typography--text-center" style={{width: '80%', margin: 'auto'}}>
		            <div className="grid">
		              <div className="card mdl-shadow--2dp">
		                <div className="card__title mdl-color--indigo mdl-color-text--white">
		                  <h4 className="card__title-text">Candidates</h4>
		                </div>
		                <div className="card__supporting-text mdl-color-text--white-600" id="messagesDiv">

		                  <h4> {EOIs} </h4>

		                </div>
		                </div>
		            </div>
		          </div>
		        </div>

		          <LearnFooter/>
		        </div>
				);
			} else {
				return ( 

		        <div>
		          <LearnHeader/>

		          <div className="learn-content mdl-typography--text-center">
		          <div className="logo-font learn-slogan"></div>
		          <a name="top" />
		          <div className="learn-content mdl-typography--text-center" style={{width: '80%', margin: 'auto'}}>

		            <h4>NO EOIS CURRENTLY</h4>
		          </div>
		          </div>
		          <LearnFooter/>
		        </div>
				);

			}
		} else { 
			return ( 

	        <div>
	          <LearnHeader/>

	          <div className="learn-content mdl-typography--text-center">
	          <div className="logo-font learn-slogan"></div>
	          <a name="top" />
	          <div className="learn-content mdl-typography--text-center" style={{width: '80%', margin: 'auto'}}>

	            <h4>YOU ARE NOT A VENDOR</h4>
	          </div>
	          </div>
	          <LearnFooter/>
	        </div>
			);

		}
	}

}

export default ReviewEOI