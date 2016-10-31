import firebase from 'firebase';
import {FIREBASE_CONFIG} from '../../firebase.config.js';
import FirebaseTools from './Firebase.js'
import React, { Component } from 'react'
import { Textfield,Grid,Cell,Card,CardText, CardActions, Button } from 'react-mdl';
import store from './Store.js'
import LearnHeader from './Header.js'
import LearnFooter from './Footer.js'

import { approveUser } from './Actions/userActions.js'
import { rejectUser } from './Actions/userActions.js'
import { connect } from "react-redux"
import { fetchPurchaserSignup, getCurrentUser } from "./Actions/userActions"

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

    getCurrentUser() {
      this.props.dispatch(getCurrentUser())
    }

    componentWillMount() {
      this.getCurrentUser()
      this.fetchPurchaserSignup()
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
      const {user} = this.props
      if (user.user[key_name].role == 0) {
        var legalEntity = user.user[key_name].legalEntity;
        var operatingName = user.user[key_name].operatingName;
        var address1 = user.user[key_name].address1;
        var address2 = user.user[key_name].address2;
        var city = user.user[key_name].city;
        var province = user.user[key_name].province;
        var country = user.user[key_name].country;
        var postalCode = user.user[key_name].postalCode;
        var phone = user.user[key_name].phone;
        var fax = user.user[key_name].fax;
        var email = user.user[key_name].email;
        var adminContact = user.user[key_name].adminContact;
        var technicalContact = user.user[key_name].technicalContact;
        var ISnumber = user.user[key_name].ISnumber;
        var website = user.user[key_name].website;
        var password = user.user[key_name].password;
        var role = user.user[key_name].role;

        var info = {legalEntity, operatingName, address1, address2, city, province, country, postalCode, phone, fax, email,
        adminContact, technicalContact, ISnumber, website, password, role, key_name}
      } else if (user.user[key_name].role == 1) {

      } else if (user.user[key_name].role == 2) {

      }
      this.approveUser(info)
    }

    reject(key_name) {
      console.log("rejected")
      const {user} = this.props
      var role = user.user[key_name].role
      var info = {key_name, role}

      this.rejectUser(info)
    }

    review(key_name) {
      // QUICK FIX
      console.log("review")
      const {user} = this.props
      if (user.user[key_name].role == 0) {
        var legalEntity = user.user[key_name].legalEntity;
        var operatingName = user.user[key_name].operatingName;
        var address1 = user.user[key_name].address1;
        var address2 = user.user[key_name].address2;
        var city = user.user[key_name].city;
        var province = user.user[key_name].province;
        var country = user.user[key_name].country;
        var postalCode = user.user[key_name].postalCode;
        var phone = user.user[key_name].phone;
        var fax = user.user[key_name].fax;
        var email = user.user[key_name].email;
        var adminContact = user.user[key_name].adminContact;
        var technicalContact = user.user[key_name].technicalContact;
        var ISnumber = user.user[key_name].ISnumber;
        var website = user.user[key_name].website;
        var password = user.user[key_name].password;
        var role = user.user[key_name].role;

        var info = {legalEntity, operatingName, address1, address2, city, province, country, postalCode, phone, fax, email,
        adminContact, technicalContact, ISnumber, website, password, role, key_name}
        alert(JSON.stringify(info))
      } else if (user.user[key_name].role == 1) {

      } else if (user.user[key_name].role == 2) {

      }
    }

    render() {
      const {user} = this.props
      if (user.role == 3) {
        var EMAILS = [];
        
        //console.log(user)
        console.log(user)
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
                  <h4 className="card__title-text">Candidates</h4>
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
    } else {
        console.log(user.role)
        return(
        <div>
          <LearnHeader/>

          <div className="learn-content mdl-typography--text-center">
          <div className="logo-font learn-slogan"></div>
          <a name="top" />
          <div className="learn-content mdl-typography--text-center" style={{width: '80%', margin: 'auto'}}>
          
            <h4>YOU ARE NOT AN ADMIN</h4>
          </div>
          </div>
          <LearnFooter/>
        </div>
        );
    }
  }
}


export default Admin;
