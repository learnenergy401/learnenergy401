import React, { Component } from 'react';
import { Textfield,Grid,Cell } from 'react-mdl';
import LearnHeader from '../Header.js'
import LearnFooter from '../Footer.js'
import ContentSignUp from './ContentSignUp.js'

class SignUp extends Component {
  render(){

    /**
    * Loads the format page for signup.
    * @return {html}
    */	
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
    