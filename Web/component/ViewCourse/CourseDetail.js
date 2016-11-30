import React, { Component } from 'react'
import LearnHeader from '../Header.js'
import LearnFooter from '../Footer.js'
import ContentCourseDetail from './ContentCourseDetail.js'



/**
* class to display course details
* @return {html} display course details
*/
class CourseDetail extends Component {
  /**
  * class to display course details
  * @return {html} display course details
  */
  render(){
    return (
      <div>
        <LearnHeader/>
        <ContentCourseDetail/>
      </div>
    );
  }
}




export default CourseDetail
