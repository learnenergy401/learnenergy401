import React, { Component } from 'react';
import { Textfield,Grid,Cell } from 'react-mdl';
import LearnHeader from '../Header.js'
import LearnFooter from '../Footer.js'
import ContentSignUp from './ContentSignUp.js'

class SignUp extends Component {
  /**
  * Loads the format page for signup.
  * @return {html} - returns header, signup, footer
  */
  render(){
    return (
      <div>
        <LearnHeader/>
        <ContentSignUp/>
        <LearnFooter/>
      </div>
    );
  }
}



export default SignUp
    
