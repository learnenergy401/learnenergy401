import React, { Component } from 'react';
import {Button,Layout,Header} from 'react-mdl';
import ButtonSignUp from './SignUp/ButtonSignUp.js';
import ButtonLogIn from './ButtonLogIn.js';
import ButtonProfile from './ButtonProfile.js';
import ButtonLogOut from './ButtonLogOut.js';
import ButtonAdmin from './ButtonAdmin.js';
import ButtonReviewEOI from './EOI-RFP/ButtonReviewEOI.js';
import ButtonRFP from './EOI-RFP/ButtonRFP.js';
import LearnLogo from './Logo.js';
import LearnNavigation from './Navigation.js';
import store from './Store.js'
import {firebaseApp,firebaseAuth,firebaseDb, firebaseStorage, firebaseAuthInstance } from './Firebase'
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

import { connect } from "react-redux"
import { fetchVendorSignup, fetchPurchaserSignup, fetchADSignup, getCurrentUser, fetchNotificationAdmin, setNotificationAdmin } from "./Actions/userActions"


var buttonSpacer={
    padding:'4px'
};

@connect((store) => {
  return {
    user: store.user
  };
})/*dont add semicolon here!*/

class LearnHeader extends Component {
    /**
    * Sets notification
    */
    setNotificationAdmin() {
      this.props.dispatch(setNotificationAdmin())
    }
    /**
    * Gets Notification
    * @return {object} notification - Returns notification object
    */
    fetchNotificationAdmin() {
      this.props.dispatch(fetchNotificationAdmin())
    }
    /**
    * Gets current user
    * @return {object} user - Returns current user logged in
    */
    getCurrentUser() {
        this.props.dispatch(getCurrentUser())
    }
    /**
     * Gets purchaser information for signup
     * @return {object} user - Returns purchaser into state purchaser
     */
    fetchPurchaserSignup() {
      this.props.dispatch(fetchPurchaserSignup())
    }
    /**
     * Gets vendor information for signup
     * @return {object} user - Returns vendor into state vedor
     */
    fetchVendorSignup() {
      this.props.dispatch(fetchVendorSignup())
    }
    /**
     * Gets additional resource information for signup
     * @return {object} user - Returns addition resource into state additional resource
     */
    fetchADSignup() {
      this.props.dispatch(fetchADSignup())
    }
    /**
     * Invoked immediately before a component is unmounted and destroyed, to update our states
     */
    componentWillMount(){
      this.fetchNotificationAdmin()
      this.getCurrentUser()
      this.fetchPurchaserSignup()
      this.fetchVendorSignup()
      this.fetchADSignup()
      
    }
    /**
    * Loads the header with different buttons depending on if user is logged in. Or an admin
    * @return {html} - returns head with specific buttons depending on user
    */
    render(){
        const {user} = this.props
        if (!user.isLoggedIn){
            return (
                <Header className="mdl-color--white mdl-shadow--2dp mdl-layout__header learn-header" waterfall>
                  <span  className="learn-title mdl-layout-title ">
                    <LearnLogo to=''/>
                  </span>
                  {/* Add spacer, to align navigation to the right in desktop */}
                  <div className="mdl-layout-spacer" />
                  {/* Navigation */}
                  <LearnNavigation />
                  <div style={buttonSpacer}>
                  </div>
                  <ButtonLogIn to='login'/>
                  <ButtonSignUp to='signup' />
                </Header>
            );

        } else { // you are logged in!

          if (user.role == 3) {
            if (user.purchasers != null || user.vendors != null || user.ad != null) {
              if (user.notification != null) {
                console.log('notified is', user.notification.notified)

                if (user.notification.notified == false) {
                  console.log('notifying')
                  this.setNotificationAdmin()
                  this.fetchNotificationAdmin()
                  alert("There are users to be approved")

                }
              }
            } 
          }

          if (user.role == 0) { // vendor can see review EOI
            return(
                <Header className="mdl-color--white mdl-shadow--2dp mdl-layout__header learn-header" waterfall>
                      <span  className="learn-title mdl-layout-title ">
                        <LearnLogo to=''/>
                      </span>
                      {/* Add spacer, to align navigation to the right in desktop */}
                      <div className="mdl-layout-spacer" />
                      {/* Navigation */}
                      <LearnNavigation />
                      <div style={buttonSpacer}>
                      </div>
                      <ButtonRFP to='rfp' />

                      <ButtonReviewEOI to='review-eoi-rfp'/>

                      <ButtonProfile to='profile' />
                      <ButtonLogOut/>
                </Header>
                );
          } else if (user.role == 1) {
            return(
                <Header className="mdl-color--white mdl-shadow--2dp mdl-layout__header learn-header" waterfall>
                      <span  className="learn-title mdl-layout-title ">
                        <LearnLogo to=''/>
                      </span>
                      {/* Add spacer, to align navigation to the right in desktop */}
                      <div className="mdl-layout-spacer" />
                      {/* Navigation */}
                      <LearnNavigation />
                      <div style={buttonSpacer}>
                      </div>
                      <ButtonReviewEOI to='review-eoi-rfp'/>

                      <ButtonProfile to='profile' />
                      <ButtonLogOut/>
                </Header>
                );

          } else if (user.role == 3) {
            return (
                <Header className="mdl-color--white mdl-shadow--2dp mdl-layout__header learn-header" waterfall>
                      <span  className="learn-title mdl-layout-title ">
                        <LearnLogo to=''/>
                      </span>
                      {/* Add spacer, to align navigation to the right in desktop */}
                      <div className="mdl-layout-spacer" />
                      {/* Navigation */}
                      <LearnNavigation />
                      <div style={buttonSpacer}>
                      </div>
                      <ButtonAdmin to='admin'/>
                      <ButtonLogOut/>
                </Header>
            );
          } else {

            return (
                <Header className="mdl-color--white mdl-shadow--2dp mdl-layout__header learn-header" waterfall>
                      <span  className="learn-title mdl-layout-title ">
                        <LearnLogo to=''/>
                      </span>
                      {/* Add spacer, to align navigation to the right in desktop */}
                      <div className="mdl-layout-spacer" />
                      {/* Navigation */}
                      <LearnNavigation />
                      <div style={buttonSpacer}>
                      </div>
                      <ButtonProfile to='profile' />

                      <ButtonLogOut/>
                </Header>
        );
      }
    }
  }
};

export default LearnHeader
