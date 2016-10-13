import React, { Component } from 'react'
import { Textfield,Grid,Cell } from 'react-mdl';

class SignUp extends Component {
  render(){
    return (
      <div>    
          <div className="learn-header mdl-layout__header">
            <SignUpHeader/>
          </div>
          <div className="">
            <SignUpMidDiv/>   
          </div>
          <Footer/>
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
      
    );};
    
};

// template for text field
class SignUpTextfield extends Component {
    propTypes:{
        text: React.PropTypes.string.isRequired,
    }
    render(){
        return(
            <Cell col={5}>
                <p>{this.props.text}</p>
                <Textfield
                    onChange={() => {}}
                    label="Text.."
                    style={{width: '200px'}}
                />
            </Cell>
        )  
    }
};


class SignUpMidDiv extends Component {
    // *todo* add database logic here
    render(){
    // *todo* 1. add more text field 
    //        2. add change it to form
    //        3. add a submit button
    //        4. adjust layout
        return(
          <div className="android-content mdl-layout__content">
            <a name="top" />
            <div style={{width: '80%', margin: 'auto'}}>
                <Grid className="demo-grid-3">
                        <SignUpTextfield text = "First Name"/>
                        <SignUpTextfield text = "Last Name"/>
                </Grid>
                
                <Grid className="demo-grid-3">
                        <SignUpTextfield text = "Operation Name"/>
                        <SignUpTextfield text = "City"/>
                </Grid>
            
                <Grid className="demo-grid-3">
                        <SignUpTextfield text = "Address Line 1"/>
                        <SignUpTextfield text = "Provence"/>
                </Grid>
            
                <Grid className="demo-grid-3">
                        <SignUpTextfield text = "Address Line 2"/>
                        <SignUpTextfield text = "Postal Code"/>
                </Grid>
            </div>
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
export default SignUp
    