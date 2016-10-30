import firebase from 'firebase';
import {FIREBASE_CONFIG} from '../../firebase.config.js';
import FirebaseTools from './Firebase.js'
import React, { Component } from 'react'
import { Textfield,Grid,Cell,Card,CardText, CardActions, Button } from 'react-mdl';
import store from './Store.js'
import LearnHeader from './Header.js'
import LearnFooter from './Footer.js'

import { connect } from "react-redux"
import { fetchUsers,getCurrentUser } from "./Actions/userActions"

@connect((store) => {
  return {
    user: store.user
  };
})

class Admin extends Component {

    fetchRole() { // pass email to fetchRole for it to see role
        this.props.dispatch(fetchRole(email))
    }

    fetchUsers() {
        this.props.dispatch(fetchUsers())
    }

    componentWillMount() {
        this.fetchUsers()
        //this.fetchRole(email) // email will be current user logged in email
    }

    approve() {
        console.log("approved")
    }

    reject() {
        console.log("rejected")
    }

    render() {
        var EMAILS = [];
        const {user} = this.props
        //console.log(user)
        //console.log(user.user)
        var keys
        if (user.user != null) {
            keys = Object.keys(user.user)
            for (var count=0; count<=keys.length-1; count++) {
                var key_name = keys[count]
                EMAILS.push(user.user[key_name].email)
                EMAILS.push(<br/>)
                //console.log(user.user[key_name].email)
                //console.log(EMAILS + "here")
            }
        }
        return(

        <div>
          <LearnHeader/>

          <div className="learn-content mdl-typography--text-center">
          <div className="logo-font learn-slogan"></div>
          <a name="top" />
          <div className="learn-content mdl-typography--text-center" style={{width: '80%', margin: 'auto'}}>
            <div className="grid">
              <div className="card mdl-shadow--2dp">
                <div className="card__title mdl-color--indigo mdl-color-text--white">
                  <h4 className="card__title-text">Vendor Candidates</h4>
                </div>
                <div className="card__supporting-text mdl-color-text--white-600" id="messagesDiv">

                  <h4> {EMAILS} </h4>

                  <Button accent ripple onClick={this.approve} type="submit" className="mdl-color-text--indigo btn btn-primary">Approve</Button>
                  <Button accent ripple onClick={this.reject} type="submit" className="mdl-color-text--indigo btn btn-primary">Reject</Button>
                </div>

                </div>
            </div>
          </div>
        </div>



          <LearnFooter/>
        </div>

        );
    }
}


export default Admin;
