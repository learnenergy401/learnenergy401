import React, { Component } from 'react';
import { Textfield,Grid,Cell } from 'react-mdl';
import LearnHeader from '../Header.js'
import LearnFooter from '../Footer.js'
import ContentSignUpVendor from '../ContentSignUpVendor.js'

class SignUpVendor extends Component {
  render(){
    return (
      <div>    
        <LearnHeader/>
        <ContentSignUpVendor/>   
        <LearnFooter/>
      </div>    
    );
  }
}



export default SignUpVendor
    