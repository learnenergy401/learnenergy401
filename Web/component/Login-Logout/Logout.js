import React, { Component } from 'react'
import { Textfield,Grid,Cell } from 'react-mdl';
import LearnHeader from '../Header.js'
import LearnFooter from '../Footer.js'
import ContentHome from '../ContentHome.js'
import ContentLogout from '../ContentLogout.js'

class Logout extends Component {
  /**
  * Loads the logout and its components.
  * @return {html} - returns all components for the home page.
  */
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
