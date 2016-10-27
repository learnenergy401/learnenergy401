import React, { Component } from 'react';
import {Button,Layout,Header} from 'react-mdl';
import ButtonSignUp from './ButtonSignUp.js';
import ButtonLogIn from './ButtonLogIn.js';
import ButtonLogOut from './ButtonLogOut.js';
import LearnLogo from './Logo.js';
import LearnNavigation from './Navigation.js';

import { connect } from "react-redux"
import { fetchUsers,getCurrentUser } from "./Actions/userActions"


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
    componentWillMount(){
        this.getCurrentUser()
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
        )}
    }
};

export default LearnHeader