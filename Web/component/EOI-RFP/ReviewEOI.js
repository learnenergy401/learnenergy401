import React, { Component } from 'react';
import { Header, Layout, Textfield,Grid,Cell,Card,CardText, Content, CardTitle, CardActions, Button } from 'react-mdl';
import LearnHeader from '../Header.js'
import LearnFooter from '../Footer.js'

import LearnLogo from '../Logo.js';
import LearnNavigation from '../Navigation.js';
import store from '../Store.js'
import {firebaseApp,firebaseAuth,firebaseDb, firebaseStorage, firebaseStorageNorm, firebaseAuthInstance } from '../Firebase'
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import { connect } from "react-redux"
import { removeEOI, removeRFP, storeEOIkey, fetchUsers, fetchEOIs, fetchRFPs, storeRFPkey } from "../Actions/userActions"

var spacerStyle = {
    height: '50px',
    backgroundColor: '#f3f3f3',
    backgroundSize: 'cover'
}
var cardStyle = {
    width: '80%',
    margin: 'auto',
    paddingBottom: '80px'
}

var cardTitleStyle = {
}
@connect((store) => {
  return {
    user: store.user
  };
})

class ReviewEOI extends Component {
    /**
     * Fetches EOIs
     * @returns {object} EOI - return EOIs
     */
	fetchEOIs() {
		this.props.dispatch(fetchEOIs())
	}
    /**
     * Fetches RFPs
     * @returns {object} RFP - return RFPs
     */
	fetchRFPs() {
		this.props.dispatch(fetchRFPs())
	}
    /**
     * Removes EOIs
     * @params {object} info - key to remove
     */
	removeEOI(info) {
		this.props.dispatch(removeEOI(info))
	}
    /**
     * Removes RFPs
     * @params {object} key - key to remove
     */
	removeRFP(key) {
		this.props.dispatch(removeRFP(key))
	}
    /**
     * store EOIkey
     * @params {object} EOIkey - EOIkey to store
     */
	storeEOIkey(info) {
		this.props.dispatch(storeEOIkey(info))
	}
    /**
     * store RFPkey
     * @params {object} RFPkey - RFPkey to store
     */
	storeRFPkey(info) {
		this.props.dispatch(storeRFPkey(info))
	}
    /**
     * fetches users
     */
    fetchUsers() {
        this.props.dispatch(fetchUsers())
    }
    /**
     * Invoked immediately before a component is unmounted and destroyed, to update our states
     */
	componentWillMount() {
		this.fetchEOIs()
		this.fetchRFPs()
		this.fetchUsers()
	}
    /**
     * Removes EOIs
     * @params {object} key - key to remove
     */
	callremoveEOI(key_name) {
		console.log("remove", key_name)
		var info = {key_name}
		console.log('info is', info)
		this.removeEOI(info) // automatically reloads page

	}
    /**
     * review EOIs
     * @params {object} key - key to review
     */
	reviewEOI(key_name) {
		console.log("review")

		const {user} = this.props
		var info = {key_name}
		this.storeEOIkey(info)
		window.location.assign('/#/review-eoi-details')
	}
    /**
     * Removes RFPs
     * @params {object} key - key to remove
     */
	callremoveRFP(key_name) {
		console.log("remove")
		var key = {key_name}
		this.removeRFP(key) // automatically reloads page

	}
    /**
     * RFP edit
     * @params {object} key - key to edit
     */
	editRFP(key_name) {
		const {user} = this.props
		var info = {key_name}
		this.storeRFPkey(info)

		window.location.assign('/#/edit-rfp-details')

	}

  	download_appendix() {
    	var storageRef = firebaseStorageNorm.ref("Appendix_2_EOI.pdf");
    	storageRef.getDownloadURL().then(function(url) {
    	window.location.assign(url)
    	});
  	}

    /**
	 * Loads the details
	 * @return {html} - returns html details
	 */
	render() {

		const {user} = this.props

		if (user.role == 1) {
			var EOIs = []
			var RFPs = []
			// grab uid of current user
			var uid
			var currentUser = firebaseAuth.currentUser
			if (currentUser!=null){
				uid = currentUser.uid
			}
			// grab information on EOIs if they match out vendor's uid
			var keys
			if (user.eoi != null && uid!=null) {
				keys = Object.keys(user.eoi)
				if (keys.length > 0) { // there exists some EOIs
					EOIs.push(<h4>Expression Of Interests</h4>)
					EOIs.push(<hr/>)
				}
				for (var count=0; count<=keys.length-1; count++) {
					var key_name = keys[count]
					if (user.eoi[key_name].vendor == uid) {
						EOIs.push(<h5>RFP NUM: {user.eoi[key_name].LMRFPnum}<br/> Email: {user.users[user.eoi[key_name].purchaser].email}</h5>)
						EOIs.push(<div>
	              		<Button accent ripple onClick={this.callremoveEOI.bind(this,key_name)} className="mdl-color-text--indigo btn btn-primary">Remove</Button>
	              		<Button accent ripple onClick={this.reviewEOI.bind(this,key_name)} className="mdl-color-text--indigo btn btn-primary">Review</Button>
	        			</div>)
	        			EOIs.push(<br/>)
	        		}
				}
			}
			// grab information on RFP now and add them to RFP list
			if (user.rfp != null && uid!=null) {
				keys = Object.keys(user.rfp)
				if (keys.length > 0) { // there exists some RFPs
					RFPs.push(<hr/>)
					RFPs.push(<h4>Request for Proposals</h4>)
					RFPs.push(<hr/>)
				}
				for (var count=0; count<=keys.length-1; count++) {
					var key_name = keys[count]
					if (user.rfp[key_name].vendor == uid) {
						RFPs.push(<h5>RFP NUM: {user.rfp[key_name].LMRFPnum}<br/> Email: {user.users[user.rfp[key_name].purchaser].email}</h5>)
						RFPs.push(<div>
	              		<Button accent ripple onClick={this.callremoveRFP.bind(this,key_name)} className="mdl-color-text--indigo btn btn-primary">Remove</Button>
	              		<Button accent ripple onClick={this.editRFP.bind(this,key_name)} className="mdl-color-text--indigo btn btn-primary">Edit</Button>
	        			</div>)
	        			RFPs.push(<br/>)
	        		}
				}
			}

			// Display our EOIs if any
			if (EOIs.length != 0 || RFPs.length != 0) {
				return (
		          <div>
		          <LearnHeader/>

		          <div className="learn-content mdl-typography--text-center">
                	<div style={spacerStyle} />
                	<Card shadow={0} style={cardStyle} >
		          <div className="mdl-layout__content mdl-typography--text-center" style={{width: '100%', margin: 'auto'}}>
		            <div className="grid">
		              <div className="card mdl-shadow--2dp">
<CardTitle style={cardTitleStyle} className="mdl-color--indigo mdl-color-text--white mdl-shadow--2dp">Review EOIs/RFPs</CardTitle>
		                </div>

                    <Button accent ripple onClick={this.download_appendix} className="mdl-color-text--indigo btn btn-primary">Download Appendix 2</Button>
                    <hr/>

		                <div className="card__supporting-text mdl-color-text--white-600" id="messagesDiv">

		                   {EOIs}
		                   {RFPs}

		                </div>
		            </div>
		          </div>
		          </Card>
		          <div style={spacerStyle} />
		        </div>


		          <LearnFooter/>
		        </div>
				);
			} else {
				return (

		        <div>
		          <LearnHeader/>

		          <div className="learn-content mdl-typography--text-center">
                	<div style={spacerStyle} />
                	<Card shadow={0} style={cardStyle} >
		          <div className="mdl-layout__content mdl-typography--text-center" style={{width: '100%', height: '50%', margin: 'auto'}}>
		            <div className="grid">
		              <div className="card mdl-shadow--2dp">
<CardTitle style={cardTitleStyle} className="mdl-color--indigo mdl-color-text--white mdl-shadow--2dp">Review EOIs/RFPs</CardTitle>
		                </div>


                    <h4>NO EOIs or RFPs CURRENTLY</h4>


		            </div>
		          </div>
		          </Card>
		          <div style={spacerStyle} />
		        </div>
		          <LearnFooter/>
		        </div>
				);

			}

		} else if (user.role == 0) { // you are a purchaser

			var EOIs = []
			var RFPs = []
			// grab uid of current user
			var uid
			var currentUser = firebaseAuth.currentUser
			if (currentUser!=null){
				uid = currentUser.uid
			}
			// grab information on EOIs if they match out purchaer's uid
			var keys
			if (user.eoi != null && uid!=null) {
				keys = Object.keys(user.eoi)
				if (keys.length > 0) { // there exists some EOIs
					EOIs.push(<h4>Expression Of Interests</h4>)
					EOIs.push(<hr/>)
				}
				for (var count=0; count<=keys.length-1; count++) {
					var key_name = keys[count]
					if (user.eoi[key_name].purchaser == uid) {
						EOIs.push(<h5>RFP NUM: {user.eoi[key_name].LMRFPnum}<br/> Email: {user.users[user.eoi[key_name].vendor].email}</h5>)
						EOIs.push(<div>
	              		<Button accent ripple onClick={this.callremoveEOI.bind(this,key_name)} className="mdl-color-text--indigo btn btn-primary">Remove</Button>
	              		<Button accent ripple onClick={this.reviewEOI.bind(this,key_name)} className="mdl-color-text--indigo btn btn-primary">Review</Button>
	        			</div>)
	        			EOIs.push(<br/>)
	        		}
				}
			}
			// grab information on RFP now and add them to RFP list
			if (user.rfp != null && uid!=null) {
				keys = Object.keys(user.rfp)
				if (keys.length > 0) { // there exists some RFPs
					RFPs.push(<hr/>)
					RFPs.push(<h4>Request for Proposals</h4>)
					RFPs.push(<hr/>)
				}
				for (var count=0; count<=keys.length-1; count++) {
					var key_name = keys[count]
					if (user.rfp[key_name].purchaser == uid) {
						RFPs.push(<h5>RFP NUM: {user.rfp[key_name].LMRFPnum} <br/> Email: {user.users[user.rfp[key_name].vendor].email}</h5>)
						RFPs.push(<div>
	              		<Button accent ripple onClick={this.callremoveRFP.bind(this,key_name)} className="mdl-color-text--indigo btn btn-primary">Remove</Button>
	              		<Button accent ripple onClick={this.editRFP.bind(this,key_name)} className="mdl-color-text--indigo btn btn-primary">Edit</Button>
	        			</div>)
	        			RFPs.push(<br/>)
	        		}
				}
			}

			// Display our EOIs if any
			if (EOIs.length != 0 || RFPs.length != 0) {
				return (
		          <div>
		          <LearnHeader/>

		          <div className="learn-content mdl-typography--text-center">
                	<div style={spacerStyle} />
                	<Card shadow={0} style={cardStyle} >
		          <div className="mdl-layout__content mdl-typography--text-center" style={{width: '100%', margin: 'auto'}}>
		            <div className="grid">
		              <div className="card mdl-shadow--2dp">
<CardTitle style={cardTitleStyle} className="mdl-color--indigo mdl-color-text--white mdl-shadow--2dp">Review EOIs/RFPs</CardTitle>
		                </div>

                    <Button accent ripple onClick={this.download_appendix} className="mdl-color-text--indigo btn btn-primary">Download Appendix 2</Button>
                    <hr/>

		                <div className="card__supporting-text mdl-color-text--white-600" id="messagesDiv">

		                   {EOIs}
		                   {RFPs}

		                </div>
		            </div>
		          </div>
		          </Card>
		          <div style={spacerStyle} />
		        </div>


		          <LearnFooter/>
		        </div>
				);
			} else {
				return (

		        <div>
		          <LearnHeader/>

		          <div className="learn-content mdl-typography--text-center">
                	<div style={spacerStyle} />
                	<Card shadow={0} style={cardStyle} >
		          <div className="mdl-layout__content mdl-typography--text-center" style={{width: '100%', height: '50%', margin: 'auto'}}>
		            <div className="grid">
		              <div className="card mdl-shadow--2dp">
<CardTitle style={cardTitleStyle} className="mdl-color--indigo mdl-color-text--white mdl-shadow--2dp">Review EOIs/RFPs</CardTitle>
		                </div>

                    <h4>NO EOIs or RFPs CURRENTLY</h4>


		            </div>
		          </div>
		          </Card>
		          <div style={spacerStyle} />
		        </div>
		          <LearnFooter/>
		        </div>
				);

			}


		} else if (user.role == 3) {
			var EOIs = []
			var RFPs = []
			// grab uid of current user
			var uid
			var currentUser = firebaseAuth.currentUser
			if (currentUser!=null){
				uid = currentUser.uid
			}
			// grab information on EOIs if they match out vendor's uid
			var keys
			if (user.eoi != null && uid!=null && user.users!=null) {
				keys = Object.keys(user.eoi)
				if (keys.length > 0) { // there exists some EOIs
					EOIs.push(<h4>Expression Of Interests</h4>)
					EOIs.push(<hr/>)
				}
				for (var count=0; count<=keys.length-1; count++) {
					var key_name = keys[count]
					
					EOIs.push(<h5>RFP NUM: {user.eoi[key_name].LMRFPnum}<br/> Email: {user.users[user.eoi[key_name].vendor].email}</h5>)
					EOIs.push(<div>
              		<Button accent ripple onClick={this.callremoveEOI.bind(this,key_name)} className="mdl-color-text--indigo btn btn-primary">Remove</Button>
              		<Button accent ripple onClick={this.reviewEOI.bind(this,key_name)} className="mdl-color-text--indigo btn btn-primary">Review</Button>
        			</div>)
        			EOIs.push(<br/>)
	        		
				}
			}
			// grab information on RFP now and add them to RFP list
			if (user.rfp != null && uid!=null && user.users!=null) {
				keys = Object.keys(user.rfp)
				if (keys.length > 0) { // there exists some RFPs
					RFPs.push(<hr/>)
					RFPs.push(<h4>Request for Proposals</h4>)
					RFPs.push(<hr/>)
				}
				for (var count=0; count<=keys.length-1; count++) {
					var key_name = keys[count]
					RFPs.push(<h5>RFP NUM: {user.rfp[key_name].LMRFPnum}<br/> Email: {user.users[user.rfp[key_name].vendor].email}</h5>)
					RFPs.push(<div>
              		<Button accent ripple onClick={this.callremoveRFP.bind(this,key_name)} className="mdl-color-text--indigo btn btn-primary">Remove</Button>
              		<Button accent ripple onClick={this.editRFP.bind(this,key_name)} className="mdl-color-text--indigo btn btn-primary">Edit</Button>
        			</div>)
        			RFPs.push(<br/>)
	        		
				}
			}
// Display our EOIs if any
			if (EOIs.length != 0 || RFPs.length != 0) {
				return (
		          <div>
		          <LearnHeader/>

		          <div className="learn-content mdl-typography--text-center">
                	<div style={spacerStyle} />
                	<Card shadow={0} style={cardStyle} >
		          <div className="mdl-layout__content mdl-typography--text-center" style={{width: '100%', margin: 'auto'}}>
		            <div className="grid">
		              <div className="card mdl-shadow--2dp">
<CardTitle style={cardTitleStyle} className="mdl-color--indigo mdl-color-text--white mdl-shadow--2dp">Review EOIs/RFPs</CardTitle>
		                </div>

                    <Button accent ripple onClick={this.download_appendix} className="mdl-color-text--indigo btn btn-primary">Download Appendix 2</Button>
                    <hr/>

		                <div className="card__supporting-text mdl-color-text--white-600" id="messagesDiv">

		                   {EOIs}
		                   {RFPs}

		                </div>
		            </div>
		          </div>
		          </Card>
		          <div style={spacerStyle} />
		        </div>


		          <LearnFooter/>
		        </div>
				);
			} else {
				return (

		        <div>
		          <LearnHeader/>

		          <div className="learn-content mdl-typography--text-center">
                	<div style={spacerStyle} />
                	<Card shadow={0} style={cardStyle} >
		          <div className="mdl-layout__content mdl-typography--text-center" style={{width: '100%', height: '50%', margin: 'auto'}}>
		            <div className="grid">
		              <div className="card mdl-shadow--2dp">
<CardTitle style={cardTitleStyle} className="mdl-color--indigo mdl-color-text--white mdl-shadow--2dp">Review EOIs/RFPs</CardTitle>
		                </div>

                    <h4>NO EOIs or RFPs CURRENTLY</h4>


		            </div>
		          </div>
		          </Card>
		          <div style={spacerStyle} />
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
                	<div style={spacerStyle} />
                	<Card shadow={0} style={cardStyle} >
		          <div className="mdl-layout__content mdl-typography--text-center" style={{width: '100%', height:'50%', margin: 'auto'}}>
		            <div className="grid">
		              <div className="card mdl-shadow--2dp">
<CardTitle style={cardTitleStyle} className="mdl-color--indigo mdl-color-text--white mdl-shadow--2dp">Review EOIs/RFPs</CardTitle>
		                </div>

                    <h4>YOU ARE NOT A VALID USER</h4>


		            </div>
		          </div>
		          </Card>
		          <div style={spacerStyle} />
		        </div>
		          <LearnFooter/>
		        </div>
			);

		}

	}

}

export default ReviewEOI
