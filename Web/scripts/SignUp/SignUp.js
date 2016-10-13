import React, { Component } from 'react'


class SignUp extends Component {
  render(){
    return (
      <div className="learn-header mdl-layout__header">
        <SignUpHeader/>
        <SignUpMidDiv/>
      </div>
    );
  }
}


class SignUpHeader extends Component {
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
          <button className="learn-signIn-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mdl-color--indigo mdl-color-text--white mdl-shadow--dp" >
            SIGN UP
          </button>
          <button className="learn-signUp-button mdl-button mdl-js-button mdl-button--accent mdl-color-text--indigo ">
            SIGN IN
          </button>
        </div>
      
    );}
};


class SignUpMidDiv extends Component {
    render(){
        return(
          <div className="android-content mdl-layout__content">
            <a name="top" />
            <div className="android-be-together-section mdl-typography--text-center">
              <div className="logo-font android-slogan">Learn Energy</div>
              <div className="logo-font android-sub-slogan">some introduction text here.</div>
              <a href="#screens">
              </a>
            </div>
          </div>
        );
    }
};
export default SignUp
    