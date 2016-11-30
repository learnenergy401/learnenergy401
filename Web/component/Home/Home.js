import React, { Component } from 'react'
import LearnHeader from '../Header.js'
import LearnFooter from '../Footer.js'
import ContentHome from './ContentHome.js'



class Home extends Component {
  /**
  * Loads the home page and its components.
  * @return {html} - returns all components for the home page.
  */
  render(){
    return (
      <div>
        <LearnHeader/>
        <ContentHome/>
        <LearnFooter/>
      </div>
    );
  }
}




export default Home
