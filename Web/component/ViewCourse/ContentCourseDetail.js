import React, { Component } from 'react'
import {Content,CardText,CardActions,Card,CardTitle, Button,Navigation,Grid,Cell} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { connect } from "react-redux"
import { fetchACourse, addCoursePurchaser } from "../Actions/courseActions"
import { fetchUsers, storeReqEOI } from "../Actions/userActions"
import YouTube from './Youtube.js'

var componentStyle = {
    margin: 'auto',
}

var cardStyle = {
    width: '100%',
    margin: 'auto',
    top: '0px',
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

    var courseid = course.aCourse.courseID
    //console.log('course id is', course_id)

    var keys = Object.keys(user.users)
    //console.log('keys is', keys)

    var vendor
    for (var count=0; count<keys.length;count++) {
      if (user.users[keys[count]].email == course.aCourse.courseVendorEmail) {
        vendor = keys[count]
        break
      }
    }
    var email = course.aCourse.courseVendorEmail

    var info = {vendor, courseid, email}
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
            height: '320',
            width: '570',
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
        var buttons1 = []
        var buttons2 = []
        if (user.role == 0) {
          buttons1.push(<Button accent ripple className="mdl-color--indigo mdl-color-text--white btn btn-primary mdl-shadow--2dp" style={{width:'150px'}} onClick={this.req_EOI.bind(this)}>Request EOI</Button>)
          buttons2.push(<Button accent ripple className="mdl-color--indigo mdl-color-text--white btn btn-primary mdl-shadow--2dp" style={{width:'150px'}} onClick={this.purchase_course.bind(this)}>Buy Now</Button> )
        }


        return(
          <div>
            <div style= {{height:"400px",background:"url(../../images/course.jpg)",padding:"40px",paddingBottom:"0px" }} >
              <div style= {{height:"400px",width:"55%", background:"white",bottom:"0px" }}>
                <div style= {{padding:"80px",paddingBottom:"0px" }}>
                  <div style={{color:"#08287D"}} className="mdl-typography--display-2 ">
                    {course.aCourse.courseName}
                  </div>
                  <p style= {{marginTop:"20px" }} className="mdl-typography--headline mdl-typography--font-thin">
                    {details}
                  </p>
                  <Grid style={{padding:"0px",marginTop:"40px"}} >
                    <Cell style={{margin:"0px"}} col={7}>
                      <p className="mdl-typography--font-regular">
                        Want custom training?
                      </p>
                        {buttons1}
                    </Cell>
                    <Cell style={{margin:"0px"}} col={5}>
                      <p className="mdl-typography--font-regular">
                          Purchase this course?
                      </p>
                      {buttons2}
                    </Cell>
                  </Grid>
                </div>
              </div>
            </div>

            <div style= {{height:"360px",background:"#F8F8F8",margin:"40px",marginTop:"0px" }}>
              <Grid style={{padding:"0px",paddingTop:"20px",margin:"20px",marginLeft:"20px",marginTop:"0px"}}>
                  <Cell style={{margin:"0px", background:"#F8F8F8",height:"320px"}} col={7}>
                      <YouTube 
                                videoId={course.aCourse.courseVideoId}
                                opts={opts}
                                onReady={this._onReady}
                            />
                    </Cell>
                    <Cell className="mdl-shadow--2dp" style={{margin:"0px",marginLeft:"70px",padding:"20px",paddingTop:"40px", background:"#F3F3F3",borderRadius: "5px"}} col={4}>
                      <div >
                      <center>
                        <div className="mdl-typography--headline">
                          About The Vendor
                        </div>
                        <p className="mdl-typography--headline mdl-typography--font-thin ">
                            {course.aCourse.courseVendorEmail}
                        </p>
                      </center>
                      </div>
                    </Cell>
              </Grid>
            </div>
          </div>
        );
    }
};



export default ContentCourseDetail
