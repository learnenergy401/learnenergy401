import firebase from 'firebase';
import {FIREBASE_CONFIG} from '../../firebase.config.js';
import FirebaseTools from './Firebase.js'
import React, { Component } from 'react'
import { Textfield,Grid,Cell,Card,CardText, CardActions, Button } from 'react-mdl';
import store from './Store.js'
import LearnHeader from './Header.js'
import LearnFooter from './Footer.js'

import { connect } from "react-redux"
import { fetchPurchaserSignup,getCurrentUser, fetchVendorSignup} from "./Actions/userActions"


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
    /*
     fetchPurchaserSignup() {
        this.props.dispatch(fetchPurchaserSignup())
    }

    componentWillMount() {
        this.fetchPurchaserSignup()
        //this.fetchRole(email) // email will be current user logged in email
    }*/
    
    approve_purchaser() { //what to do if purchaser approved button is pressed
        console.log("approved p")
    }

    reject_purchaser() { //what to do if purchaser reject button is pressed
        console.log("rejected p")
    }
    approve_vendor() { //what to do if vendor approve button is pressed
        console.log("approved v")
    }

    reject_vendor() { //what to do if vendor reject button is pressed
        console.log("rejected v")
    }
    approve_other() { //what to do if additional resource approve button is pressed
        console.log("approved o")
    }

    rejcect_other() { //what to do if additional resource reject button is pressed
        console.log("rejected o")
    }
    
    render(){
        
    }
    render() {//iterate through the purchaser list and get emails
        var EMAILS_purchaser = [];
        const {user} = this.props
        var keys
        if (user.user != null) {
            keys = Object.keys(user.user)
            for (var count=0; count<=keys.length-1; count++) {
                var key_name = keys[count]
                EMAILS_purchaser.push(user.user[key_name].email)
                EMAILS_purchaser.push(<br/>)
            }
        }
                                      //TODO: make the rendered page scrollable.  if list is too long we cant see past the bottom of the page
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
                  <h4> {EMAILS_purchaser} </h4>
                  <Button accent ripple onClick={this.approve_purchaser} type="submit" className="mdl-color-text--indigo btn btn-primary">Approve</Button>
                  <Button accent ripple onClick={this.reject_purchaser} type="submit" className="mdl-color-text--indigo btn btn-primary">Reject</Button>
                </div>
                                      
                                      
                <div className="card__title mdl-color--indigo mdl-color-text--white">
                    <h4 className="card__title-text">Vendor Candidates</h4>
                </div>
                <div className="card__supporting-text mdl-color-text--white-600" id="messagesDiv">
                  <h4> {EMAILS_purchaser} </h4>
                  <Button accent ripple onClick={this.approve_vendor} type="submit" className="mdl-color-text--indigo btn btn-primary">Approve</Button>
                  <Button accent ripple onClick={this.reject_vendor} type="submit" className="mdl-color-text--indigo btn btn-primary">Reject</Button>
                </div>                              
                                    
                                      
                <div className="card__title mdl-color--indigo mdl-color-text--white">
                    <h4 className="card__title-text">Additional Resources</h4>
                </div>
                <div className="card__supporting-text mdl-color-text--white-600" id="messagesDiv">
                  <h4> {EMAILS_purchaser} </h4>
                  <Button accent ripple onClick={this.approve_other} type="submit" className="mdl-color-text--indigo btn btn-primary">Approve</Button>
                  <Button accent ripple onClick={this.reject_other} type="submit" className="mdl-color-text--indigo btn btn-primary">Reject</Button>
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
