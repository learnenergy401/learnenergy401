import React, { Component } from 'react';
import { Textfield,Grid,Cell } from 'react-mdl';
import Header from '../Header.js'
import Footer from '../Footer.js'
import ContentSignUp from '../ContentSignUp.js'

var firebase = require('firebase');
var config = require('../../../firebase.config.js');
firebase.initializeApp(config);

class SignUp extends Component {
  render(){
    return (
      <div className="learn-header mdl-layout__header">    
        <Header/>
        <ContentSignUp/>   
        <Footer/>
      </div>    
    );
  }
}





class SignUpContent extends Component {

  requestSubmit() {
    // Add signup event
    console.log(email.value);
    console.log(password.value);
    firebase.database().ref('SignUpList').push({
      email: email.value,
      password: password.value
    });
  }

  render() {
    return(

      <div className="android-content mdl-layout__content">
        <a name="top" />
        <div style={{width: '80%', margin: 'auto'}}>
          <form onSubmit={this.requestSubmit}>
            <label> Email </label>
            <input className="form-control" ref="email" placeholder="Email" id="email"/>
            <label>Password</label>
            <input ref="pw" type="password" className="form-control" placeholder="Password" id="password"/>
            <button type="submit" className="btn btn-primary">Register</button>
          </form>
        </div>
      </div>
    );
  }
};


export default SignUp
    