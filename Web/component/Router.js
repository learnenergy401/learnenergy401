import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'


// import mdl
import "../extra/material.js"
import "../../firebase.config.js"


// import your js component here
import Home from "./Home/Home.js"
import SignUp from "./SignUp/SignUp.js"
import Login from "./Login-Logout/Login.js"
import Logout from "./ButtonLogOut.js"
import Admin from "./Admin.js"
import Profile from "./Profile/Profile.js"
import Scripts from "./Scripts"
import SignUpPurchaser from "./SignUp/SignUpPurchaser.js"
import SignUpVendor from "./SignUp/SignUpVendor.js"
import SignUpAD from "./SignUp/SignUpAD.js"
import Upload from "./Vendor/Upload.js"
import ViewCourse from "./ViewCourse/ViewCourse.js"
import CourseDetail from "./ViewCourse/CourseDetail.js"
import AdminReview from "./AdminReview.js"
import CourseEOI from "./EOI-RFP/CourseEOI.js"
import ReviewEOI from "./EOI-RFP/ReviewEOI.js"
import EOIdetails from "./EOI-RFP/EOIdetails.js"
import ContentCourseUpdate from "./Profile/ContentCourseUpdate.js"
import RFP from "./EOI-RFP/RFP.js"
import RFPdetails from "./EOI-RFP/RFPdetails.js"
import RFPfromEOI from "./EOI-RFP/RFPfromEOI.js"
import ADpage from "./ADpage.js"
import ViewVendor from "./ViewVendor/ViewVendor.js"


class ReactRouter extends Component {
  /**
  * Loads the routes for each page
  * @return {html} - returns a specific path for our pages
  */
  render() {
    return (
      <Router history={hashHistory}>

        {/* Add routes below but above 404 */}
        <Route path='/' component={Home} />
        <Route path='/signup' component={SignUp} />
        <Route path='/login' component={Login} />
        <Route path='/logout' component={Logout} />
        <Route path='/admin'component={Admin}/>
        <Route path='/upload' component={Upload} />
        <Route path='/profile' component={Profile} />
        <Route path='/scripts' component={Scripts} />
        <Route path='/signup-purchaser' component={SignUpPurchaser} />
        <Route path='/signup-vendor' component={SignUpVendor} />
        <Route path='/view-course' component={ViewCourse} />
        <Route path='/view-course-detail' component={CourseDetail} />
        <Route path='/signup-ad' component={SignUpAD} />
        <Route path='/admin-review' component={AdminReview} />
        <Route path='/course-eoi' component={CourseEOI} />
        <Route path='/review-eoi-rfp' component={ReviewEOI} />
        <Route path='/review-eoi-details' component={EOIdetails} />
        <Route path='/course-update' component={ContentCourseUpdate}/>
        <Route path='/rfp' component={RFP} />
        <Route path='/edit-rfp-details' component={RFPdetails} />
        <Route path='/rfp-from-eoi' component={RFPfromEOI} />
        <Route path='/ad-page' component={ADpage} />
        <Route path='/view-vendor' component={ViewVendor} />
        {/* 404 not fond page, make sure it stay at bottom */}
        <Route path='*' component={NotFound} />
      </Router>
    )
  }
}

// Hard coded pages (TEMP!)
const NotFound = () => <h1>404.. This page is not found!</h1>

// Export Router for compile use
export default ReactRouter
