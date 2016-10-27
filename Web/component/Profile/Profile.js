import React, { Component } from 'react';
import { Textfield,Grid,Cell,Layout } from 'react-mdl';
import LearnHeader from '../Header.js'
import LearnFooter from '../Footer.js'
import ContentProfile from '../ContentProfile.js'
import SideMenuProfile from '../SideMenuProfile.js'
class SignUp extends Component {
  render(){
    return (
      <div>
        <Layout fixedHeader fixedDrawer>
            <LearnHeader/>
            <SideMenuProfile/>
            <ContentProfile/>   
            <LearnFooter/>
        </Layout>
      </div>    
    );
  }
}



export default SignUp
    