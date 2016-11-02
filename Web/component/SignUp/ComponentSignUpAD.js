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

  signUpPurchaser(user) {
    this.props.dispatch(signUpAD(user));
  }

  requestSubmit() {
    // Add signup event
    var website = document.getElementById("website").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var user = {website, email, password}

    this.signUpPurchaser(user);
    alert("Thank you for registering as an Additional User for LearnEnergy Marketplace." +"\n" + "We will be in contact with you shortly.");

  }

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