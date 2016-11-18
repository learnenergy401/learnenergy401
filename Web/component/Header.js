import React, { Component } from 'react';
import {Button,Layout,Header} from 'react-mdl';
import ButtonSignUp from './SignUp/ButtonSignUp.js';
import ButtonLogIn from './ButtonLogIn.js';
import ButtonProfile from './ButtonProfile.js';
import ButtonLogOut from './ButtonLogOut.js';
import ButtonAdmin from './ButtonAdmin.js';
import LearnLogo from './Logo.js';
import LearnNavigation from './Navigation.js';
import store from './Store.js'
import {firebaseApp,firebaseAuth,firebaseDb, firebaseStorage, firebaseAuthInstance } from './Firebase'
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

import { connect } from "react-redux"
import { fetchVendorSignup, fetchPurchaserSignup, fetchADSignup, getCurrentUser } from "./Actions/userActions"


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
        const {user} = this.props
        this.getCurrentUser()
        if (user.role == 3){
          this.fetchPurchaserSignup()
          this.fetchVendorSignup()
          this.fetchADSignup()
        }
        
        
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

        } else {

          var notified
          var currentUser = firebaseAuth.currentUser

          if (currentUser!=null) {
            firebaseDb.ref('Notifications/'+currentUser.uid).once('value')
            .then((snapshot) => {
              notified = snapshot.val().notified
              if (user.role == 3) {
                if ((user.purchasers != null || user.vendors != null || user.ad != null)&&(notified==false)) {
                  alert("There are users to be approved")
                  firebaseDb.ref('Notifications/'+currentUser.uid).set({
                    notified: true
                  })
                }
              }
            })
          }
          if (user.role ==3) {
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
