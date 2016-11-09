import React, { Component } from 'react';
import { Textfield,Grid,Cell,Layout } from 'react-mdl';
import LearnHeader from '../Header.js'
import LearnFooter from '../Footer.js'
import ContentProfile from './ContentProfile.js'
import SideMenuProfile from './SideMenuProfile.js'

import store from '../Store.js'
import { connect } from "react-redux"
//      <LearnHeader/>

@connect((store) => {
  return {
    user: store.user
  };
})/*dont add semicolon here!*/
class SignUp extends Component {
  /**
   * Invoked immediately before a component is unmounted and destroyed, to update our state to get vendor courses
   */
    componentWillMount(){
        const {user} = this.props
        console.log(user.isLoggedIn)
    }
  /**
  * Loads the user profile
  * @return {html} - returns course, profile, sidebar
  */
  render(){
    return (
      <div>
        <LearnHeader/>
        <SideMenuProfile/>
        <ContentProfile/>
        <LearnFooter/>

      </div>
    );
  }
}



export default SignUp
