import React, { Component } from 'react'
import LearnHeader from '../Header.js'
import LearnFooter from '../Footer.js'

class Home extends Component {
  render(){
    return (
      <div className="learn-header mdl-layout__header">
        <LearnHeader/>
        <HomeIntroDiv/>
        <LearnFooter/>
      </div>
    );
  }
}



class HomeIntroDiv extends Component {
    render(){
        return(
          <div className="android-content mdl-layout__content">
            <a name="top" />
            <div className="android-be-together-section mdl-typography--text-center">
              <div className="logo-font android-slogan">Learn Energy</div>
              <div className="logo-font android-sub-slogan">some introduction text here.</div>
              <a href="#screens">
              </a>
            </div>
          </div>
        );
    }
};






export default Home