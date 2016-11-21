import React, { Component } from 'react'
import LearnHeader from '../Header.js'
import LearnFooter from '../Footer.js'
import ContentViewVendor from './ContentViewVendor.js'
import { Textfield,Grid,Cell,Layout } from 'react-mdl';

class ViewVendor extends Component {
  /**
  * display courses
  * @return {html} display output of viewcourse page.
  */
  render(){
    return (
      <div>
        <LearnHeader/>
        <ContentViewVendor/>
        <LearnFooter/>
      </div>
    );
  }
}




export default ViewVendor
