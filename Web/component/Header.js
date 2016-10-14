import React, { Component } from 'react'
import {Button} from 'react-mdl';

class Header extends Component {
    render(){
        return(
            
        <div className="mdl-layout__header-row">
          <span className="learn-title mdl-layout-title">
            <img className="learn-logo-image" src="images/learn_logo.png" />
          </span>
          {/* Add spacer, to align navigation to the right in desktop */}
          <div className="mdl-layout-spacer" />
          <div className="learn-search-box mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right mdl-textfield--full-width">
            <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="search-field">
              <i className="material-icons">search</i>
            </label>
            <div className="mdl-textfield__expandable-holder">
              <input className="mdl-textfield__input" type="text" id="search-field" />
            </div>
          </div>
          {/* Navigation */}
          <div className="learn-navigation-container">
            <nav className="learn-navigation mdl-navigation">
              <a className="mdl-navigation__link mdl-typography--text-uppercase" href>Courses</a>
              <a className="mdl-navigation__link mdl-typography--text-uppercase" href>Pricing</a>
              <a className="mdl-navigation__link mdl-typography--text-uppercase" href>How it works</a>
            </nav>
          </div>
          <Button raised ripple accent className="learn-signIn-button mdl-color--indigo mdl-color-text--white " >
            SIGN UP
          </Button>
          <button className="learn-signUp-button mdl-button mdl-js-button mdl-button--accent mdl-color-text--indigo ">
            SIGN IN
          </button>
        </div>
      
    );}
    
    
};

export default Header