import React, { Component } from 'react'
import { Textfield,Grid,Cell,Card,CardText, CardActions, Button } from 'react-mdl';
import { signUpAD } from "../Actions/userActions.js"
import { connect } from "react-redux"

var componentStyle = {
    margin: 'auto',
}

var formStyle = {
    marginTop: '5%'
}

@connect((store) => {
  return {
    user: store.user
  };
})/*dont add semicolon here!*/

/**
 * 
 */
class ComponentSignUpAD extends Component {

  /**
   * Sends information about AD and adds it to ADsignup list
   * @param {user} user - object which contains information about the AD.
   */
  signUpAD(user) {
    this.props.dispatch(signUpAD(user));
  }

  /**
   * Sends information to signUpAD(user)
   * @return {Object} user - sends information about additional resource.
   */
  requestSubmit() {
    // Add signup event
    var website = document.getElementById("website").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var user = {website, email, password}

    this.signUpAD(user);

  }

  /**
   * Loads the signup page for additional resource.
   * @return {html} - displays sign up page for additional resource
   */
  render() {
    return(

      <div className="android-content mdl-layout__content">
        <a name="top" />
        <div style={{width: '80%', margin: 'auto'}}>

            <Textfield label="website" className="form-control" ref="website"  placeholder="Website" id="website"/>
            <br/>
            <Textfield label="email" className="form-control" ref="email"  placeholder="Email" id="email"/>
            <br/>
            <Textfield label="password" ref="pw" type="password" className="form-control" placeholder="Password" id="password"/>

            <CardActions>
              <Button accent ripple className="mdl-color-text--indigo btn btn-primary" onClick={this.requestSubmit.bind(this)}>Register</Button>
            </CardActions>
        </div>
      </div>
    );
  }
};

export default ComponentSignUpAD
