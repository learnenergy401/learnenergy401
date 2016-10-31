import React, { Component } from 'react'
import {Content, Card,CardTitle,List,ListItem,ListItemContent,Layout} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import { connect } from "react-redux"


import "../../extra/material.js"
import ContentProfileUpload from "./ContentProfileUpload.js"
import ContentCourseDisplay from "../ContentCourseDisplay.js"
@connect((store) => {
  return {
    user: store.user,
    profile: store.profile
  };
})/*dont add semicolon here!*/


class ContentProfile extends Component {
    render(){
        
        const {profile} = this.props
        
        if (profile.menu == 0){
            return(
                  <Content className="learn-content">
                        <List>
                          <ListItem>
                            <ListItemContent icon="person">gg1</ListItemContent>
                          </ListItem>
                        </List>
                    </Content>
            );
        }else if (profile.menu == 1){
            return(
                <ContentCourseDisplay/>
            )
        }else{
            return(
                <ContentProfileUpload/>
            )
        }
    }
};



export default ContentProfile