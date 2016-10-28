import React, { Component } from 'react'
import { Textfield,Grid,Cell,Card,CardText, CardActions, Button } from 'react-mdl';
import FirebaseTools from './Firebase.js'
import { signUpUser } from "./Actions/userActions"
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

class ComponentSignUp extends Component {

  signUpUser(user,profile) {
    this.props.dispatch(signUpUser(user,profile));
  };
    
  requestSubmit() {
    // Add signup event

    var email = document.getElementById("email").value;
    var pw = document.getElementById("pw").value;
    console.log(email);
    console.log(pw);
    var role = 0;
    // *TODO*
    // sample code here, add more attributes and wrapped in {}
    // then drop it in this.signUpUser() as second parameter
    var firstName = "John";
    
    this.signUpUser({email, pw},{role,firstName});
    
  }

  render() {
    return(

      <div className="android-content mdl-layout__content">
        <a name="top" />
        <div style={{width: '80%', margin: 'auto'}}>
            <CardText style={componentStyle}> 
                <Textfield label="email" className="form-control" ref="email" placeholder="Email" id="email" />
            </CardText>
            <CardText style={componentStyle}> 
                <Textfield label="password" ref="pw" type="password" className="form-control" placeholder="Password" id="pw"/>
            </CardText>
            {/*form submit will trigger refresh of the page, will wipe all data so i removed it*/}
            <CardActions>
                <Button accent ripple onClick={this.requestSubmit.bind(this)} className="mdl-color-text--indigo btn btn-primary">Register</Button>
            </CardActions>
        </div>
      </div>
    );
  }
};

export default ComponentSignUp
    