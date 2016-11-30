import React, { Component } from 'react'
import {Drawer,Navigation,List,ListItem,ListItemContent,Button,Card} from 'react-mdl';
import { connect } from "react-redux"
import {sortByName,sortByVendorEmail} from "../Actions/courseActions"


@connect((store) => {
  return {
    user: store.user,
    profile: store.profile,
    course: store.course
  };
})/*dont add semicolon here!*/


class SideMenuCourse extends Component {
    
    sortByName(courseList){
        this.props.dispatch(sortByName(courseList))
    }


    sortByVendorEmail(courseList){
        this.props.dispatch(sortByVendorEmail(courseList))
    }
    /**
    * Loads the user profile sidebar
    * @return {html} - returns Bookmarks, profile, sidebar, RFPs
    */
    render(){
        const {user,profile,course} = this.props

            return(
                    <div  style={{width: '100%',height:"100%", marginTop: '12px',background:"#37474F"}} >
                        <List style={{marginTop:"20px"}} >
                          <ListItem>
                            <Button onClick={()=>(this.sortByName(course.courseList))} style={{color:"white"}} >Sort From A-Z</Button>
                          </ListItem>
                          <ListItem>
                            <Button onClick={()=>(this.sortByVendorEmail(course.courseList))} style={{color:"white"}}>Sort By Vendor</Button>
                          </ListItem>
                        </List>
                    </div>

            );
        
    }
}



export default SideMenuCourse
