import React, { Component } from 'react'
import {Content, Card,CardTitle,CardText,Layout,Textfield,CardActions,Button,Chip} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import { connect } from "react-redux"
import {findDOMNode, render} from 'react-dom'
import { changeMenu } from "../Actions/profileActions"

import "../../extra/material.js"
import { fetchBookmarks, setBookmarks, fetchUsers, removeBookmark } from "../Actions/userActions.js"
import Toast from "../Toast.js"

var componentStyle = {
    margin: 'auto',
}
var formStyle = {
    marginTop: '5%'
}
var spacerStyle = {
    height: '50px',
    backgroundColor: '#f3f3f3',
    backgroundSize: 'cover'
}
var cardStyle = {
    width: '80%',
    margin: 'auto',
}

var cardTitleStyle = {
}

@connect((store) => {
  return {
    user: store.user,
  };
})/*dont add semicolon here!*/


class ContentBookmarks extends Component {
    /**
     * fetches users
     */
    fetchUsers() {
        this.props.dispatch(fetchUsers())
    }
    /**
     * fetches bookmarks
     */
    fetchBookmarks() {
        this.props.dispatch(fetchBookmarks())
    }
    /**
     * sets bookmarks
     * {params} bookmarks - information of bookmarks
     */    
    setBookmarks(bookmarks) {
        this.props.dispatch(setBookmarks(bookmarks))
    }
    /**
     * removes bookmarks
     * {params} bookmarks - information of bookmarks
     */    
    removeBookmark(bookmarks) {
        this.props.dispatch(removeBookmark(bookmarks))
    }

    /**
     * called before dom elements are mounted, to get current user
     */
    componentWillMount() {
        this.fetchBookmarks()
        this.fetchUsers()
    }
    /**
     * removes bookmarks
     * {params} bookmarks - information of bookmarks
     */   
    removebookmark(key) {
        // grab information of bookmarks and remove the bookmark of the key_name
        var bookmarks = {key: key}
        console.log('bookmarks is', bookmarks)
        this.removeBookmark(bookmarks)
        this.props.dispatch(changeMenu(3))
        location.reload()
    }

    /**
    * Loads the bookmarks profile
    * @return {html} - returns course profile depending on type of user
    */
    render(){
        const {user} = this.props

        if (user.bookmarks !=null && user.userID !=null && user.users!=null) {
            var bookmarks = []
            var userID = user.userID
            var bookmarkKeys = Object.keys(user.bookmarks)
            var userKeys = Object.keys(user.users)
            console.log(bookmarkKeys)
            for (var i=0; i<bookmarkKeys.length; i++) {
                for (var j=0; j<userKeys.length; j++) {
                    if (user.bookmarks[bookmarkKeys[i]].key == userKeys[j]) {
                        bookmarks.push(<h4>{user.users[userKeys[j]].email}</h4>)
                        bookmarks.push(<div>
                        <Button accent ripple onClick={this.removebookmark.bind(this,bookmarkKeys[i])} className="mdl-color-text--indigo btn btn-primary">Remove</Button>
                        </div>)
                        if (i<bookmarkKeys.length) {
                            bookmarks.push(<hr/>)
                        }
                    }
                }
            }

            
            return(
                <Content className="learn-content">

                  <div className="learn-content mdl-typography--text-center">
                    <div style={spacerStyle} />
                    <Card shadow={0} style={cardStyle} >
                  <div className="mdl-layout__content mdl-typography--text-center" style={{width: '100%', margin: 'auto'}}>
                    <div className="grid">
                      <div className="card mdl-shadow--2dp">
<CardTitle style={cardTitleStyle} className="mdl-color--indigo mdl-color-text--white mdl-shadow--2dp">Bookmarks</CardTitle>
                        </div>
                                {bookmarks}

                        </div>
                    </div>
                  
                  </Card>
                  </div>
                  <div style={spacerStyle} />

                </Content>

        )
        } else {
            return(
                <Content className="learn-content">
                    <div className="android-content mdl-layout__content">

                                <CardText>No vendors bookmarked</CardText>

                        </div>

                </Content>

        )       
        }
    }
};


export default ContentBookmarks
