import React, { Component } from 'react'
import { Textfield,Grid,Cell } from 'react-mdl';
// var firebase = require('firebase');
// var config = require('../../../firebase.config.js');
// firebase.initializeApp(config);

class Login extends Component {
  render(){
    return (
      <div>    
          <div className="learn-header mdl-layout__header">
            <LoginHeader/>
          </div>
          <div className="">
            <LoginMidDiv/>   
          </div>
          <Footer/>
      </div>    
    );
  }
}

class LoginHeader extends Component {

    render(){
        return(
            
        <div className="mdl-layout__header-row">
          <span className="learn-title mdl-layout-title">
            <img className="learn-logo-image" src="images/learn_logo.png" />
          </span>
          {/* Add spacer, to align navigation to the right in desktop */}
          <div className="mdl-layout-spacer" />

          {/* Navigation */}
          <div className="learn-navigation-container">
            <nav className="learn-navigation mdl-navigation">
              <a className="mdl-navigation__link mdl-typography--text-uppercase" href>Courses</a>
              <a className="mdl-navigation__link mdl-typography--text-uppercase" href>Pricing</a>
              <a className="mdl-navigation__link mdl-typography--text-uppercase" href>How it works</a>
            </nav>
          </div>
          <button className="learn-signIn-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mdl-color--indigo mdl-color-text--white mdl-shadow--dp" >
            Login
          </button>
          <button className="learn-signUp-button mdl-button mdl-js-button mdl-button--accent mdl-color-text--indigo ">
            Login
          </button>
        </div>
      
    );};
    
};

class LoginMidDiv extends Component {

    loginSubmit() {
        var email = this.refs.email.value;
        var pw    = this.refs.pw.value;
        var self  = this;

        firebase.auth().signInWithEmailAndPassword(email, pw).then(function(result) {
            var location = self.props.location
            if (location.state && location.state.nextPathname) {
                self.context.router.replace(location.state.nextPathname)
            } else {
                self.context.router.replace('/home')
            }
            // User signed in!
            console.log('User signed in!');
            // var uid = result.user.uid;
        });
    }

    render() {
        return (
            <div>
            <h1> Login </h1>
            <form onSubmit={this.loginSubmit}>
                <label> Email </label>
                <input className="form-control" ref="email" placeholder="Email" id="email"/>
            
                <label>Password</label>
                <input ref="pw" type="password" className="form-control" placeholder="Password" id="password"/>
                {errors}
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            </div>
        );
    }

};


class Footer extends Component {
  render() {
    return (

      <footer className="android-footer mdl-mega-footer">
        <div className="mdl-mega-footer--top-section">
          <div className="mdl-mega-footer--left-section">
            <button className="mdl-mega-footer--social-btn" />
            &nbsp;
            <button className="mdl-mega-footer--social-btn" />
            &nbsp;
            <button className="mdl-mega-footer--social-btn" />
          </div>
          <div className="mdl-mega-footer--right-section">
            <a className="mdl-typography--font-light" href="#top">
              Back to Top
              <i className="material-icons">expand_less</i>
            </a>
          </div>
        </div>
        <div className="mdl-mega-footer--middle-section">
          <p className="mdl-typography--font-light">Satellite imagery: © 2014 Astrium, DigitalGlobe</p>
          <p className="mdl-typography--font-light">Some features and devices may not be available in all areas</p>
        </div>
        <div className="mdl-mega-footer--bottom-section">
          <a className="android-link mdl-typography--font-light" href>Blog</a>
          <a className="android-link mdl-typography--font-light" href>Privacy Policy</a>
        </div>
      </footer>
    );
  }
};
export default Login