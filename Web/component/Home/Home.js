import React, { Component } from 'react'
import LearnHeader from '../Header.js'
import LearnFooter from '../Footer.js'
import ContentHome from '../ContentHome.js'


class Home extends Component {
  render(){
    return (
      <div className="mdl-layout__header">
        <LearnHeader/>
        <ContentHome/>
        <LearnFooter/>
      </div>
    );
  }
}




export default Home