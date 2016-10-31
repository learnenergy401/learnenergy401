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
<<<<<<< HEAD
import { fetchPurchaserSignup,getCurrentUser, fetchVendorSignup} from "./Actions/userActions"

=======
import { fetchVendorSignup, fetchPurchaserSignup, getCurrentUser } from "./Actions/userActions"
>>>>>>> 3017f57fe222c754291f9ed79d6a635b6f098be2

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

    fetchVendorSignup() {
      this.props.dispatch(fetchVendorSignup())
    }

    getCurrentUser() {
      this.props.dispatch(getCurrentUser())
    }

    componentWillMount() {
      this.getCurrentUser()
      this.fetchPurchaserSignup()
      this.fetchVendorSignup()
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

<<<<<<< HEAD
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
=======
    approveUser(user) {
      this.props.dispatch(approveUser(user))
    }

    rejectUser(user) {
      this.props.dispatch(rejectUser(user))
    }

    approve(key_name, role) {
      console.log("approved")

      // grab all of the information and put into { }
      // var info = {user.user[key_name].email, .... , }
      const {user} = this.props
      if (role == 0) { // approve for purchaser
        var legalEntity = user.purchasers[key_name].legalEntity;
        var operatingName = user.purchasers[key_name].operatingName;
        var address1 = user.purchasers[key_name].address1;
        var address2 = user.purchasers[key_name].address2;
        var city = user.purchasers[key_name].city;
        var province = user.purchasers[key_name].province;
        var country = user.purchasers[key_name].country;
        var postalCode = user.purchasers[key_name].postalCode;
        var phone = user.purchasers[key_name].phone;
        var fax = user.purchasers[key_name].fax;
        var email = user.purchasers[key_name].email;
        var adminContact = user.purchasers[key_name].adminContact;
        var technicalContact = user.purchasers[key_name].technicalContact;
        var ISnumber = user.purchasers[key_name].ISnumber;
        var website = user.purchasers[key_name].website;
        var password = user.purchasers[key_name].password;
        var role = user.purchasers[key_name].role;

        var info = {legalEntity, operatingName, address1, address2, city, province, country, postalCode, phone, fax, email,
        adminContact, technicalContact, ISnumber, website, password, role, key_name}
      } else if (role == 1) { // approve for vendor

        var legalEntity = user.vendors[key_name].legalEntity;
        var operatingName = user.vendors[key_name].operatingName;
        var address1 = user.vendors[key_name].address1;
        var address2 = user.vendors[key_name].address2;
        var city = user.vendors[key_name].city;
        var province = user.vendors[key_name].province;
        var country = user.vendors[key_name].country;
        var postalCode = user.vendors[key_name].postalCode;
        var phone = user.vendors[key_name].phone;
        var fax = user.vendors[key_name].fax;
        var email = user.vendors[key_name].email;
        var adminContact = user.vendors[key_name].adminContact;
        var technicalContact = user.vendors[key_name].technicalContact;
        var ISnumber = user.vendors[key_name].ISnumber;
        var website = user.vendors[key_name].website;
        var password = user.vendors[key_name].password;
        var role = user.vendors[key_name].role;

        var owners = user.vendors[key_name].owners;
        var natureBusiness = user.vendors[key_name].natureBusiness;
        var timeBusiness = user.vendors[key_name].timeBusiness;
        var proAffiliation = user.vendors[key_name].proAffiliation;
        var bank = user.vendors[key_name].bank;
        var bonding = user.vendors[key_name].bonding;
        var bondingLimit = user.vendors[key_name].bondingLimit;
        var insurance = user.vendors[key_name].insurance;
        var bankruptcy = user.vendors[key_name].bankruptcy;
        var numEmployees = user.vendors[key_name].numEmployees;


        var info = {legalEntity, operatingName, address1, address2, city, province, country, postalCode, phone, fax, email,
        adminContact, technicalContact, ISnumber, website, password, role, owners, natureBusiness, timeBusiness, proAffiliation,
        bank, bonding, bondingLimit, insurance, bankruptcy, numEmployees, key_name}



      } else if (role == 2) { // approve for additional resource

      }
      this.approveUser(info)
    }

    reject(key_name, role) {
      console.log("rejected")
      const {user} = this.props
      var info = {key_name, role}

      this.rejectUser(info)
    }

    review(key_name, role) {
      // QUICK FIX
      console.log("review")
      const {user} = this.props
      if (role == 0) {
        var legalEntity = user.purchasers[key_name].legalEntity;
        var operatingName = user.purchasers[key_name].operatingName;
        var address1 = user.purchasers[key_name].address1;
        var address2 = user.purchasers[key_name].address2;
        var city = user.purchasers[key_name].city;
        var province = user.purchasers[key_name].province;
        var country = user.purchasers[key_name].country;
        var postalCode = user.purchasers[key_name].postalCode;
        var phone = user.purchasers[key_name].phone;
        var fax = user.purchasers[key_name].fax;
        var email = user.purchasers[key_name].email;
        var adminContact = user.purchasers[key_name].adminContact;
        var technicalContact = user.purchasers[key_name].technicalContact;
        var ISnumber = user.purchasers[key_name].ISnumber;
        var website = user.purchasers[key_name].website;
        var password = user.purchasers[key_name].password;
        var role = user.purchasers[key_name].role;

        var info = {legalEntity, operatingName, address1, address2, city, province, country, postalCode, phone, fax, email,
        adminContact, technicalContact, ISnumber, website, password, role, key_name}
        alert(JSON.stringify(info))
      } else if (role == 1) {
        var legalEntity = user.vendors[key_name].legalEntity;
        var operatingName = user.vendors[key_name].operatingName;
        var address1 = user.vendors[key_name].address1;
        var address2 = user.vendors[key_name].address2;
        var city = user.vendors[key_name].city;
        var province = user.vendors[key_name].province;
        var country = user.vendors[key_name].country;
        var postalCode = user.vendors[key_name].postalCode;
        var phone = user.vendors[key_name].phone;
        var fax = user.vendors[key_name].fax;
        var email = user.vendors[key_name].email;
        var adminContact = user.vendors[key_name].adminContact;
        var technicalContact = user.vendors[key_name].technicalContact;
        var ISnumber = user.vendors[key_name].ISnumber;
        var website = user.vendors[key_name].website;
        var password = user.vendors[key_name].password;
        var role = user.vendors[key_name].role;

        var owners = user.vendors[key_name].owners;
        var natureBusiness = user.vendors[key_name].natureBusiness;
        var timeBusiness = user.vendors[key_name].timeBusiness;
        var proAffiliation = user.vendors[key_name].proAffiliation;
        var bank = user.vendors[key_name].bank;
        var bonding = user.vendors[key_name].bonding;
        var bondingLimit = user.vendors[key_name].bondingLimit;
        var insurance = user.vendors[key_name].insurance;
        var bankruptcy = user.vendors[key_name].bankruptcy;
        var numEmployees = user.vendors[key_name].numEmployees;

        var info = {legalEntity, operatingName, address1, address2, city, province, country, postalCode, phone, fax, email,
        adminContact, technicalContact, ISnumber, website, password, role, owners, natureBusiness, timeBusiness, proAffiliation,
        bank, bonding, bondingLimit, insurance, bankruptcy, numEmployees, key_name}
        alert(JSON.stringify(info))
      } else if (role == 2) {

      }
    }

    render() {
      const {user} = this.props
      if (user.role == 3) {
        var EMAILS = [];

        //console.log(user)
        console.log(user)
        var keys
        if (user.purchasers != null) {
          keys = Object.keys(user.purchasers)
          var role = 0 // pass role in for purchaser
          for (var count=0; count<=keys.length-1; count++) {
            var key_name = keys[count]
            EMAILS.push(user.purchasers[key_name].email)
            EMAILS.push(<br/>)
            EMAILS.push(<div>
              <Button accent ripple onClick={this.approve.bind(this,key_name,role)} type="submit" className="mdl-color-text--indigo btn btn-primary">Approve</Button>
              <Button accent ripple onClick={this.reject.bind(this,key_name,role)} type="submit" className="mdl-color-text--indigo btn btn-primary">Reject</Button>
              <Button accent ripple onClick={this.review.bind(this,key_name,role)} type="submit" className="mdl-color-text--indigo btn btn-primary">Review</Button>
              </div>)
            EMAILS.push(<br/>)
          }
        }

        var keys
        if (user.vendors != null) {
          keys = Object.keys(user.vendors)
          var role = 1 // role for vendor
          for (var count=0; count<=keys.length-1; count++) {
            var key_name = keys[count]
            EMAILS.push(user.vendors[key_name].email)
            EMAILS.push(<br/>)
            EMAILS.push(<div>
              <Button accent ripple onClick={this.approve.bind(this,key_name,role)} type="submit" className="mdl-color-text--indigo btn btn-primary">Approve</Button>
              <Button accent ripple onClick={this.reject.bind(this,key_name,role)} type="submit" className="mdl-color-text--indigo btn btn-primary">Reject</Button>
              <Button accent ripple onClick={this.review.bind(this,key_name,role)} type="submit" className="mdl-color-text--indigo btn btn-primary">Review</Button>
              </div>)
            EMAILS.push(<br/>)
            //console.log(user.user[key_name].email)
            //console.log(EMAILS + "here")
          }
        }

        return(

          <div>
>>>>>>> 3017f57fe222c754291f9ed79d6a635b6f098be2
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
<<<<<<< HEAD
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
=======
                  <h4 className="card__title-text">Candidates</h4>
                </div>
                <div className="card__supporting-text mdl-color-text--white-600" id="messagesDiv">

                  <h4> {EMAILS} </h4>

>>>>>>> 3017f57fe222c754291f9ed79d6a635b6f098be2
                </div>
                </div>
            </div>
          </div>
        </div>

<<<<<<< HEAD
=======
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
>>>>>>> 3017f57fe222c754291f9ed79d6a635b6f098be2
          <LearnFooter/>
        </div>
        );
    }
  }
}


export default Admin;
