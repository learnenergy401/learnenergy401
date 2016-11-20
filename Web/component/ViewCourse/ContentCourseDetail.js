import React, { Component } from 'react'
import {Content,CardText,CardActions,Card,CardTitle, Button} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { connect } from "react-redux"
import { storeReqEOI, fetchACourse, addCoursePurchaser } from "../Actions/courseActions"
import { fetchUsers } from "../Actions/userActions"
import YouTube from './Youtube.js'

var componentStyle = {
    margin: 'auto',
}

var cardStyle = {
    width: '80%',
    margin: 'auto',
    top: '50px',
    height:'550px'
}

@connect((store) => {
  return {
    user: store.user,
    profile: store.profile,
    course: store.course
  };
})

class ContentCourseDetail extends Component {
/**
 * add course purchasers
 * @param {object} info, courseID - object which contains information about the course
 */
  addCoursePurchaser(info, courseID) {
    this.props.dispatch(addCoursePurchaser(info, courseID))
  }
  /**
  * store reqEOI
  * @params {object} info - reqEOI to store
  */
  storeReqEOI(info) {
    this.props.dispatch(storeReqEOI(info))
  }
  /**
  * Fetches users
  * @returns {object} users - return users
  */
  fetchUsers() {
    this.props.dispatch(fetchUsers())
  }
  /**
   * Invoked immediately before a component is unmounted and destroyed, to update our states
   */
  componentWillMount(){
		const {course}=this.props
    this.props.dispatch(fetchACourse(course.aCourseName));
    
    this.fetchUsers()
    }
    /**
     * plays video
     */
    _onReady(event) {
    // access to player in all event handlers via event.target
        event.target.playVideo();
    }

    req_EOI() {
      const {course} = this.props
      const {user} = this.props

      var course_id = course.aCourse.courseID
      //console.log('course id is', course_id)

      var keys = Object.keys(user.users)
      //console.log('keys is', keys)

      var vendor_uid
      for (var count=0; count<keys.length;count++) {
        if (user.users[keys[count]].email == course.aCourse.courseVendorEmail) {
          vendor_uid = keys[count]
          break
        }
      }

      var info = {vendor_uid, course_id}
      //console.log('info is', info)
      this.storeReqEOI(info)
      
    }

    /**
    * purchaser course
    */
    purchase_course() {

      const {course} = this.props
      const {user} = this.props

      // purchaser purchases course, add them into the course's purchaser list
      var purchaser_uid
      var keys = Object.keys(user.users)
      for (var count=0; count<keys.length;count++) {
        if (user.user.email == user.users[keys[count]].email) {
          purchaser_uid = keys[count]
        }
      }
      
      course.aCourse.purchaserToAdd = purchaser_uid
      var courseID = course.aCourse.courseID

      // after getting the current user uid push it into the list of courses
      this.addCoursePurchaser(course.aCourse, courseID)

    }

    /**
    * display the layout for coursedetails
    * @return {html} display the layout
    */
    render(){
    	const {course}=this.props
      const {user} = this.props
        const opts = {
            height: '480',
            width: '560',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0,
                controls: 1,
            }
        }
        console.log('course is', course)
        console.log('user is', user)
        var details
        if (course.aCourse.courseDescription != null) {
          details = course.aCourse.courseDescription
        }
        var buttons = []
        if (user.role == 0) {
          buttons.push(<Button accent ripple className="mdl-color-text--indigo btn btn-primary" onClick={this.req_EOI.bind(this)}>request EOI</Button>)
          buttons.push(<Button accent ripple className="mdl-color-text--indigo btn btn-primary" onClick={this.purchase_course.bind(this)}>Purchase Course</Button> )
        }


        return(
          <div style={{height:'660px'}} className="learnContent mdl-typography--text-center">

          	  <Card  style={cardStyle} >
          	  <CardTitle className="mdl-color--indigo mdl-color-text--white mdl-shadow--2dp">{course.aCourse.courseName}</CardTitle>
          	  <div className="mdl-layout__content">
              <a name="top" />
                    <div style={{width: '80%', margin: 'auto'}}>
            {/*<CardText style={componentStyle}>{course.aCourse.courseDescription}</CardText>*/}
                        <div>
                            <YouTube style={{height:'600px'}}
                                videoId={course.aCourse.courseVideoId}
                                opts={opts}
                                onReady={this._onReady}
                            />
                        </div>
                      {details}
                    </div>
                    {buttons}           
                </div>
               </Card>

          </div>
        );
    }
};



export default ContentCourseDetail
