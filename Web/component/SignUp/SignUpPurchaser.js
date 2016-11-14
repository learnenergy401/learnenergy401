import React, { Component } from 'react';
import { Textfield,Grid,Cell } from 'react-mdl';
import LearnHeader from '../Header.js'
import LearnFooter from '../Footer.js'
import ContentSignUpPurchaser from './ContentSignUpPurchaser.js'

class SignUpPurchaser extends Component {

    /**
    * Loads the format page for signupPurchaser.
    * @return {html}
    */	
  render(){
    return (
      <div>    
        <LearnHeader/>
        <ContentSignUpPurchaser/>   
        <LearnFooter/>
      </div>    
    );
  }
}

export default SignUpPurchaser
    