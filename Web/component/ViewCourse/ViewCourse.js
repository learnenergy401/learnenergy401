import React, { Component } from 'react'
import LearnHeader from '../Header.js'
import LearnFooter from '../Footer.js'
import ContentViewCourse from './ContentViewCourse.js'
import CourseList from './CourseList.js'
import { Textfield,Grid,Cell,Layout } from 'react-mdl';

class ViewCourse extends Component {
  /**
  * display courses
  * @return {html} display output of viewcourse page.
  */
  render(){
    return (
      <div>
        <LearnHeader/>
        <ContentViewCourse/>
      </div>
    );
  }
}




export default ViewCourse
