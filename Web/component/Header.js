import React, { Component } from 'react';
import {Button,Layout,Header} from 'react-mdl';
import ButtonSignUp from './SignUp/ButtonSignUp.js';
import ButtonLogIn from './ButtonLogIn.js';
import ButtonLogOut from './ButtonLogOut.js';
import LearnLogo from './Logo.js';
import LearnNavigation from './Navigation.js';
import store from './Store.js'

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
    fetchUsers() {
        this.props.dispatch(fetchUsers())
    }
    
    getCurrentUser() {
        this.props.dispatch(getCurrentUser())
    }

    fetchPurchaserSignup() {
      this.props.dispatch(fetchPurchaserSignup())
    }

    fetchVendorSignup() {
      this.props.dispatch(fetchVendorSignup())
    }

    fetchADSignup() {
      this.props.dispatch(fetchADSignup())
    }

    componentWillMount(){
        this.getCurrentUser()
        this.fetchPurchaserSignup()
        this.fetchVendorSignup()
        this.fetchADSignup()
    }

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
        }
        else{
          console.log(user)
          if (user.role == 3) {
            if (user.purchasers != null || user.vendors != null || user.ad != null) {
              alert("there are users to be approved")
            }
          }
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
                      <ButtonLogOut/>
                </Header>
        );}
    }
};

export default LearnHeader