import firebase from 'firebase'
import {FIREBASE_CONFIG} from '../../firebase.config.js'
import React, { Component } from 'react'
import { Textfield,Grid,Cell,Card,CardText, CardActions, Button } from 'react-mdl';
import store from './Store.js'
import LearnHeader from './Header.js'
import LearnFooter from './Footer.js'

import { approveUser } from './Actions/userActions.js'
import { rejectUser } from './Actions/userActions.js'
import { connect } from "react-redux"
import { fetchVendorSignup, fetchPurchaserSignup, fetchADSignup, getCurrentUser } from "./Actions/userActions"

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

    fetchADSignup() {
      this.props.dispatch(fetchADSignup())
    }

    getCurrentUser() {
      this.props.dispatch(getCurrentUser())
    }

    componentWillMount() {
      this.getCurrentUser()
      this.fetchPurchaserSignup()
      this.fetchVendorSignup()
      this.fetchADSignup()
    }

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

        var gstReg = user.purchasers[key_name].gstReg;
        var billAddress1 = user.purchasers[key_name].billAddress1;
        var billAddress2 = user.purchasers[key_name].billAddress2;
        var billCity = user.purchasers[key_name].billCity;
        var billProvince = user.purchasers[key_name].billProvince;
        var billCountry = user.purchasers[key_name].billCountry;
        var billPostalCode = user.purchasers[key_name].billPostalCode;
        var accntRec = user.purchasers[key_name].accntRec;
        var bank = user.purchasers[key_name].bank;

        var ISnumber = user.purchasers[key_name].ISnumber;
        var website = user.purchasers[key_name].website;

        var jointVenture = user.purchasers[key_name].jointVenture;
        var categories = user.purchasers[key_name].categories;

        var password = user.purchasers[key_name].password;
        var role = user.purchasers[key_name].role;

        var info = {email, password, legalEntity, operatingName, address1, address2,
          city, province, country, postalCode, phone, fax, adminContact, technicalContact,
          gstReg, billAddress1, billAddress2, billCity, billProvince, billCountry, billPostalCode,
          accntRec, bank, ISnumber, website, jointVenture, categories, role, key_name}
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
        var website = user.ad[key_name].website;
        var email = user.ad[key_name].email;
        var password = user.ad[key_name].password;
        var role = user.ad[key_name].role;

        var info = {website, email, password, role, key_name}
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

        var gstReg = user.purchasers[key_name].gstReg;
        var billAddress1 = user.purchasers[key_name].billAddress1;
        var billAddress2 = user.purchasers[key_name].billAddress2;
        var billCity = user.purchasers[key_name].billCity;
        var billProvince = user.purchasers[key_name].billProvince;
        var billCountry = user.purchasers[key_name].billCountry;
        var billPostalCode = user.purchasers[key_name].billPostalCode;
        var accntRec = user.purchasers[key_name].accntRec;
        var bank = user.purchasers[key_name].bank;

        var ISnumber = user.purchasers[key_name].ISnumber;
        var website = user.purchasers[key_name].website;

        var jointVenture = user.purchasers[key_name].jointVenture;
        var categories = user.purchasers[key_name].categories;

        var password = user.purchasers[key_name].password;
        var role = user.purchasers[key_name].role;

        var info = {email, password, legalEntity, operatingName, address1, address2,
          city, province, country, postalCode, phone, fax, adminContact, technicalContact,
          gstReg, billAddress1, billAddress2, billCity, billProvince, billCountry, billPostalCode,
          accntRec, bank, ISnumber, website, jointVenture, categories, role, key_name}
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
        var website = user.ad[key_name].website;
        var email = user.ad[key_name].email;
        var password = user.ad[key_name].password;
        var role = user.ad[key_name].role;

        var info = {website, email, password, role, key_name}
        alert(JSON.stringify(info))
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
              <Button accent ripple onClick={this.approve.bind(this,key_name,role)} className="mdl-color-text--indigo btn btn-primary">Approve</Button>
              <Button accent ripple onClick={this.reject.bind(this,key_name,role)} className="mdl-color-text--indigo btn btn-primary">Reject</Button>
              <Button accent ripple onClick={this.review.bind(this,key_name,role)} className="mdl-color-text--indigo btn btn-primary">Review</Button>
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
              <Button accent ripple onClick={this.approve.bind(this,key_name,role)} className="mdl-color-text--indigo btn btn-primary">Approve</Button>
              <Button accent ripple onClick={this.reject.bind(this,key_name,role)} className="mdl-color-text--indigo btn btn-primary">Reject</Button>
              <Button accent ripple onClick={this.review.bind(this,key_name,role)} className="mdl-color-text--indigo btn btn-primary">Review</Button>
              </div>)
            EMAILS.push(<br/>)
          }
        }

        var keys
        if (user.ad != null) {
          keys = Object.keys(user.ad)
          var role = 2 // role for additional user
          for (var count=0; count<=keys.length-1; count++) {
            var key_name = keys[count]
            EMAILS.push(user.ad[key_name].email)
            EMAILS.push(<br/>)
            EMAILS.push(<div>
              <Button accent ripple onClick={this.approve.bind(this,key_name,role)} className="mdl-color-text--indigo btn btn-primary">Approve</Button>
              <Button accent ripple onClick={this.reject.bind(this,key_name,role)} className="mdl-color-text--indigo btn btn-primary">Reject</Button>
              <Button accent ripple onClick={this.review.bind(this,key_name,role)} className="mdl-color-text--indigo btn btn-primary">Review</Button>
              </div>)
            EMAILS.push(<br/>)
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
