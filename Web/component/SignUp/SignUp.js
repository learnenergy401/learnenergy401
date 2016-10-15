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
      <div>    
        <Header/>
        <ContentSignUp/>   
        <Footer/>
      </div>    
    );
  }
}



export default SignUp
    