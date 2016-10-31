import firebase from 'firebase';
import {FIREBASE_CONFIG} from '../../firebase.config.js';
import FirebaseTools from './Firebase.js'
import React, { Component } from 'react'
import { Textfield,Grid,Cell,Card,CardText, CardActions, Button } from 'react-mdl';
import store from './Store.js'
import LearnHeader from './Header.js'
import LearnFooter from './Footer.js'

import { approveUser } from './Actions/userActions.js'
import { connect } from "react-redux"
import { fetchPurchaserSignup,getCurrentUser } from "./Actions/userActions"

@connect((store) => {
  return {
    user: store.user
  };
})

class Admin extends Component {

    fetchRole() { // pass email to fetchRole for it to see role
      this.props.dispatch(fetchRole(email))
    }

    fetchPurchaserSignup() {
      this.props.dispatch(fetchPurchaserSignup())
    }

    componentWillMount() {
      this.fetchPurchaserSignup()
      //this.fetchRole(email) // email will be current user logged in email
    }

    approveUser(user) {
      this.props.dispatch(approveUser(user))
    }

    rejectUser(user) {
      this.props.dispatch(rejectUser(user))
    }

    approve(key_name) {
      console.log("approved")

      // grab all of the information and put into { }
      // var info = {user.user[key_name].email, .... , }
      var email = "JIMMY123@gmail.com"
      var password = '123456'
      var role = 0
      var firstName = 'test'
      var key_name = '-KVMg8Dj4KiZmG-8ahd7'
      var user = {email, password, role, firstName, key_name}

      this.approveUser(user)
    }

    reject(key_name) {
      console.log("rejected")
    }

    review(key_name) {
      console.log(key_name)

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
          EMAILS.push(<div>
            <Button accent ripple onClick={this.approve.bind(this,key_name)} type="submit" className="mdl-color-text--indigo btn btn-primary">Approve</Button>
            <Button accent ripple onClick={this.reject.bind(this,key_name)} type="submit" className="mdl-color-text--indigo btn btn-primary">Reject</Button>
            <Button accent ripple onClick={this.review.bind(this,key_name)} type="submit" className="mdl-color-text--indigo btn btn-primary">Review</Button>
            </div>)
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
                <h4 className="card__title-text">Purchaser Candidates</h4>
              </div>
              <div className="card__supporting-text mdl-color-text--white-600" id="messagesDiv">

                <h4> {EMAILS} </h4>

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
