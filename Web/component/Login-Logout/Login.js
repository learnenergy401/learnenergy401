import React, { Component } from 'react'
import { Textfield,Grid,Cell } from 'react-mdl';
import LearnHeader from '../Header.js'
import LearnFooter from '../Footer.js'
import ContentHome from '../ContentHome.js'
import ComponentLogin from '../ComponentLogin.js'
// var firebase = require('firebase');
// var config = require('../../../firebase.config.js');
// firebase.initializeApp(config);

class Login extends Component {
  render(){
    return (
      <div>    
          <div className="learn-header mdl-layout__header">
            <LearnHeader/>
          </div>
          <div className="">
            <ComponentLogin/>   
          </div>
          <LearnFooter/>
      </div>    
    );
  }
}







export default Login