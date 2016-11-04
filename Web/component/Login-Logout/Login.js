import React, { Component } from 'react'
import { Textfield,Grid,Cell } from 'react-mdl';
import LearnHeader from '../Header.js'
import LearnFooter from '../Footer.js'
import ContentHome from '../ContentHome.js'
import ComponentLogin from '../ComponentLogin.js'
import ContentLogin from '../ContentLogin.js'

class Login extends Component {
  /**
  * Loads the login and its components.
  * @return {html} - returns all components for the home page.
  */
  render(){
    return (
      <div>
        <LearnHeader/>
        <ContentLogin/>
        <LearnFooter/>
      </div>
    );
  }
}

export default Login
