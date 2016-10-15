import React, { Component } from 'react'
import { Textfield,Grid,Cell } from 'react-mdl';
import LearnHeader from '../Header.js'
import LearnFooter from '../Footer.js'
import ContentHome from '../ContentHome.js'

class Logout extends Component {
  render(){
    return (  
      <div className="learn-header mdl-layout__header">
        <LearnHeader/>
        <ContentLogout/>   
        <LearnFooter/>
      </div> 
    );
  }
}

export default Logout