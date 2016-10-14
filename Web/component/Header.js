import React, { Component } from 'react'
import {Button,Layout,Header} from 'react-mdl';
import ButtonSignUp from './ButtonSignUp.js'
import ButtonLogIn from './ButtonLogIn.js'
import LearnLogo from './Logo.js'
import LearnNavigation from './Navigation.js'

var headerStyle = {
    backgroundColor:'#2196F3!important' ,
    WebkitTransition: 'all', 
    msTransition: 'all' 
}




class LearnHeader extends Component {
    render(){
        return(
        
            <Header style={headerStyle} waterfall>    
              <span  className="learn-title mdl-layout-title">
                <LearnLogo to=''/>
              </span>
              {/* Add spacer, to align navigation to the right in desktop */}
              <div className="mdl-layout-spacer" />
              {/* Navigation */}
              <LearnNavigation />
              <ButtonSignUp  to='signup'>
                SIGN UP
              </ButtonSignUp>
              <ButtonLogIn  to='login'>
                LOG IN
              </ButtonLogIn>
            </Header>
    );}
    
    
};

export default LearnHeader