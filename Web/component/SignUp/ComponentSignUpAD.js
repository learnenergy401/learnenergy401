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

    if(website==""){alert("Website missing.")}
    if(email==""){alert("Email missing.")}
    if(password==""){alert("Password missing.")}
    if(password.length<6){alert("Password must be at least 6 character long.")}
    if(website!="" && email!="" && password!="" &&password.length>=6){
      this.signUpAD(user);
    }

  }

  /**
   * Loads the signup page for additional resource.
   * @return {html} - displays sign up page for additional resource
   */
  render() {
    return(

      <div className="mdl-layout__content" style={{textAlign: 'left'}}>
        <a name="top" />
        <div style={{width: '80%', margin: 'auto'}}>

            <br/><br/><br/>
            <u><h4>Login Information</h4></u>
            <hr/>
            <Textfield floatingLabel style={{width:'300px'}} label="Email" id="email"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} type="password" label="Password" id="password"/>
            <br/>
            <u><h4>Website Information</h4></u>
            <hr/>
            <Textfield floatingLabel style={{width:'300px'}} label="Website" id="website"/>


            <hr/>
            <CardActions>
              <Button raised ripple className="mdl-color-text--indigo btn btn-primary" onClick={this.requestSubmit.bind(this)}>Register</Button>
            </CardActions>

        </div>
      </div>
    );
  }
};

export default ComponentSignUpAD
