import React, { Component } from 'react';
import {Button,Layout,Header} from 'react-mdl';
import ButtonSignUp from './ButtonSignUp.js';
import ButtonLogIn from './ButtonLogIn.js';
import LearnLogo from './Logo.js';
import LearnNavigation from './Navigation.js';

import { connect } from "react-redux"
import { fetchUsers } from "./Actions/userActions"


var buttonSpacer={
    padding:'4px'
};


@connect((store) => {
  return {
    user: store.user.user
  };
})




class LearnHeader extends Component {
    fetchUsers() {
        this.props.dispatch(fetchUsers())
    }
    
    render(){   
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
              <button onClick={this.fetchUsers.bind(this)}>load tweets</button>
                
            </Header>
        );
    }
};

export default LearnHeader