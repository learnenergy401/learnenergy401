import React, { Component } from 'react';
import { Textfield,Grid,Cell,Layout } from 'react-mdl';
import LearnHeader from '../Header.js'
import LearnFooter from '../Footer.js'
import ContentProfile from '../ContentProfile.js'
import SideMenuProfile from '../SideMenuProfile.js'
import store from '../Store.js'
import { connect } from "react-redux"
//      <LearnHeader/>

@connect((store) => {
  return {
    user: store.user
  };
})/*dont add semicolon here!*/
class SignUp extends Component {
    
    componentWillMount(){
        const {user} = this.props
        console.log(user.isLoggedIn)
    }
  render(){
    return (
      <div>

        <Layout fixedHeader fixedDrawer>
      
            <SideMenuProfile/>
            <ContentProfile/>   
            <LearnFooter/>
        </Layout>
      </div>    
    );
  }
}



export default SignUp
    