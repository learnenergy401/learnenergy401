import React, { Component } from 'react'
import {Button,Layout} from 'react-mdl';
import ButtonSignUp from './ButtonSignUp.js'
import ButtonLogIn from './ButtonLogIn.js'
import LearnLogo from './Logo.js'

var divStyle = {
    order: 3,
    WebkitTransition: 'all', 
    msTransition: 'all' 
}

var divStyle2 = {
    order: 2,
    WebkitTransition: 'all', 
    msTransition: 'all' 
}


var divStyle1 = {
    order: 1,
    WebkitTransition: 'all', 
    msTransition: 'all' 
}
var divStyle4 = {
    order: 4,
    WebkitTransition: 'all', 
    msTransition: 'all' 
}


class Header extends Component {
    render(){
        return(
            
        <div className="mdl-layout__header-row">
          <span className="learn-title mdl-layout-title">
            <LearnLogo to=''/>
          </span>
          {/* Add spacer, to align navigation to the right in desktop */}
          <div className="mdl-layout-spacer" />
          <div style={divStyle2} className="learn-search-box mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right mdl-textfield--full-width">
            <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="search-field">
              <i className="material-icons">search</i>
            </label>
            <div className="mdl-textfield__expandable-holder">
              <input className="mdl-textfield__input" type="text" id="search-field" />
            </div>
          </div>
          {/* Navigation */}
          <div style={divStyle1} className="learn-navigation-container">
            <nav className="learn-navigation mdl-navigation">
              <a className="mdl-navigation__link mdl-typography--text-uppercase" href>Courses</a>
              <a className="mdl-navigation__link mdl-typography--text-uppercase" href>Pricing</a>
              <a className="mdl-navigation__link mdl-typography--text-uppercase" href>How it works</a>
            </nav>
          </div>
          <ButtonSignUp style={divStyle} to='signup'>
            SIGN UP
          </ButtonSignUp>
          <ButtonLogIn style={divStyle4} to='login'>
            LOG IN
          </ButtonLogIn>
        </div>
      
    );}
    
    
};

export default Header