import React, { Component } from 'react';
import { Textfield,Grid,Cell } from 'react-mdl';
import LearnHeader from '../Header.js'
import LearnFooter from '../Footer.js'
import ContentSignUpAD from './ContentSignUpAD.js'

class SignUpAD extends Component {
  render(){
    return (
      <div>
        <LearnHeader/>
        <ContentSignUpAD/>
        <LearnFooter/>
      </div>
    );
  }
}

export default SignUpAD
