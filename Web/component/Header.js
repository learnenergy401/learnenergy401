import React, { Component } from 'react'
import {Button,Layout,Header} from 'react-mdl';
import ButtonSignUp from './ButtonSignUp.js'
import ButtonLogIn from './ButtonLogIn.js'
import LearnLogo from './Logo.js'
import LearnNavigation from './Navigation.js'


var buttonSpacer={
    padding:'4px'
}


class LearnHeader extends Component {
    render(){
        return(
        
            <Header className="mdl-color--white mdl-shadow--2dp mdl-layout__header learn-header" waterfall>    
              <span  className="learn-title mdl-layout-title ">
                <LearnLogo to=''/>
              </span>
              {/* Add spacer, to align navigation to the right in desktop */}
              <div className="mdl-layout-spacer" />
              {/* Navigation */}
              <LearnNavigation />
              <ButtonSignUp  to='signup'>
                SIGN UP
              </ButtonSignUp>
              <div style={buttonSpacer}>
              </div>
              <ButtonLogIn  to='login'>
                LOG IN
              </ButtonLogIn>
            </Header>
    );}
    
    
};

export default LearnHeader