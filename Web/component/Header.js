import React, { Component } from 'react';
import {Button,Layout,Header} from 'react-mdl';
import ButtonSignUp from './SignUp/ButtonSignUp.js';
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
    user: store.user.user,
    isLoggedIn: store.user.isLoggedIn
  };
})/*dont add semicolon here!*/

class LearnHeader extends Component {
  fetchUsers() {
      this.props.dispatch(fetchUsers())
  }
  
  getCurrentUser() {
      this.props.dispatch(getCurrentUser())
  }
  
  render(){   
    //console.log(this.getCurrentUser().???.user.isLoggedIn)
    const check = this.getCurrentUser()
    console.log(check)
    //console.log(this.props)
    const {isLoggedIn} = this.props;
    if (isLoggedIn) {
      console.log("IF STATEMENT")
      return (
        <Header className="mdl-color--white mdl-shadow--2dp mdl-layout__header learn-heaer" waterfall>    
          <span  className="learn-title mdl-layout-title ">
            <LearnLogo to=''/>
          </span>
          {/* Add spacer, to align navigation to the right in desktop */}
          <div className="mdl-layout-spacer" />
          {/* Navigation */}
          <LearnNavigation />
          <ButtonSignUp  to='signup'/>

          <div style={buttonSpacer}>
          </div>
          <ButtonLogIn  to='login'/>     

          <div style={buttonSpacer}>
          </div>
          <ButtonLogOut  to='logout'/>  
        
        </Header>
      );   

    } else {
      console.log("ELSE STATEMENT")
      return (
        <Header className="mdl-color--white mdl-shadow--2dp mdl-layout__header learn-header" waterfall>    
          <span  className="learn-title mdl-layout-title ">
            <LearnLogo to=''/>
          </span>
          {/* Add spacer, to align navigation to the right in desktop */}
          <div className="mdl-layout-spacer" />
          {/* Navigation */}
          <LearnNavigation />
          <ButtonSignUp  to='signup'/>

          <div style={buttonSpacer}>
          </div>
          <ButtonLogIn  to='login'/>          
        
          <div style={buttonSpacer}>
          </div>
          <ButtonLogOut  to='logout'/>  

        </Header>
      );
    }
  }
};

export default LearnHeader