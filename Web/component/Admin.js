import firebase from 'firebase'
import {FIREBASE_CONFIG} from '../../firebase.config.js'
import React, { Component } from 'react'
import { Textfield,Grid,Cell,Card,CardText,CardTitle, CardActions, Button } from 'react-mdl';
import store from './Store.js'
import LearnHeader from './Header.js'
import LearnFooter from './Footer.js'

import { approveUser } from './Actions/userActions.js'
import { rejectUser } from './Actions/userActions.js'
import { connect } from "react-redux"
import { storeKeyRole, fetchVendorSignup, fetchPurchaserSignup, fetchADSignup, getCurrentUser } from "./Actions/userActions"
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
    user: store.user
  };
})

class Admin extends Component {
    /**
     * Stores information of key and role into db
     * @param {object} data - contains information about the key and role of desired user
     */
    storeKeyRole(data) {
      this.props.dispatch(storeKeyRole(data))
    }
    /**
     * Gets purchaser information for signup
     * @return {object} user - Returns purchaser into state purchaser
     */
    fetchPurchaserSignup() {
      this.props.dispatch(fetchPurchaserSignup())
    }
    /**
     * Gets vendor information for signup
     * @return {object} user - Returns vendor into state vedor
     */
    fetchVendorSignup() {
      this.props.dispatch(fetchVendorSignup())
    }
    /**
     * Gets additional resource information for signup
     * @return {object} user - Returns addition resource into state additional resource
     */
    fetchADSignup() {
      this.props.dispatch(fetchADSignup())
    }
    /**
     * Gets the current user
     * @return {object} user - Returns current user into state current user
     */
    getCurrentUser() {
      this.props.dispatch(getCurrentUser())
    }
    /**
     * Invoked immediately before a component is unmounted and destroyed, to update our states
     */
    componentWillMount() {
      this.getCurrentUser()
      this.fetchPurchaserSignup()
      this.fetchVendorSignup()
      this.fetchADSignup()
    }
    /**
     * State changes if a user is approved
     * @param {object} user - object which contains information for us to move into firebase and store in our database.
     */
    approveUser(user) {
      this.props.dispatch(approveUser(user))
    }
    /**
     * State changes if a user is rejected
     * @param {object} user - object which contains information for us to move out of firebase and remove in our database.
     */
    rejectUser(user) {
      this.props.dispatch(rejectUser(user))
    }
    /**
     * approves type of users.
     * @param {object} key_name - takes key name of user in database and approves user
     * @param {object} role - takes role to determine which user to approve
     */
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

        var owner1Name = user.vendors[key_name].owner1Name; var owner1Pos = user.vendors[key_name].owner1Pos;
        var owner2Name = user.vendors[key_name].owner2Name; var owner2Pos = user.vendors[key_name].owner2Pos;
        var owner3Name = user.vendors[key_name].owner3Name; var owner3Pos = user.vendors[key_name].owner3Pos;
        var owner4Name = user.vendors[key_name].owner4Name; var owner4Pos = user.vendors[key_name].owner4Pos;
        var owner5Name = user.vendors[key_name].owner5Name; var owner5Pos = user.vendors[key_name].owner5Pos;


        var natureBusiness = user.vendors[key_name].natureBusiness;
        var timeBusiness = user.vendors[key_name].timeBusiness;
        var proAffiliation = user.vendors[key_name].proAffiliation;
        var report = user.vendors[key_name].report;
        var bank = user.vendors[key_name].bank;
        var bankLocation = user.vendors[key_name].bankLocation;
        var bonding = user.vendors[key_name].bonding;
        var bondingLocation = user.vendors[key_name].bondingLocation;
        var insuranceCompany = user.vendors[key_name].insuranceCompany;
        var insuranceLocation = user.vendors[key_name].insuranceLocation;
        var bondingLimitDate = user.vendors[key_name].bondingLimitDate;
        var bondingLimit = user.vendors[key_name].bondingLimit;
        var grossBus = user.vendors[key_name].grossBus;
        var grossBusYear = user.vendors[key_name].grossBusYear;
        var bankruptcy = user.vendors[key_name].bankruptcy;


        var numEmployees = user.vendors[key_name].numEmployees;
        var AD1address1 = user.vendors[key_name].AD1address1; var AD1address2 = user.vendors[key_name].AD1address2; var AD1city = user.vendors[key_name].AD1city; var AD1province = user.vendors[key_name].AD1province;
        var AD1country = user.vendors[key_name].AD1country; var AD1postalCode = user.vendors[key_name].AD1postalCode; var AD1phone = user.vendors[key_name].AD1phone;
        var AD2address1 = user.vendors[key_name].AD2address1; var AD2address2 = user.vendors[key_name].AD2address2; var AD2city = user.vendors[key_name].AD2city; var AD2province = user.vendors[key_name].AD2province;
        var AD2country = user.vendors[key_name].AD2country; var AD2postalCode = user.vendors[key_name].AD2postalCode; var AD2phone = user.vendors[key_name].AD2phone;
        var AD3address1 = user.vendors[key_name].AD3address1; var AD3address2 = user.vendors[key_name].AD3address2; var AD3city = user.vendors[key_name].AD3city; var AD3province = user.vendors[key_name].AD3province;
        var AD3country = user.vendors[key_name].AD3country; var AD3postalCode = user.vendors[key_name].AD3postalCode; var AD3phone = user.vendors[key_name].AD3phone;


        var categories = user.vendors[key_name].categories;
        var specialties = user.vendors[key_name].specialties;

        var client1 = user.vendors[key_name].client1; var client1Location = user.vendors[key_name].client1Location; var client1Phone = user.vendors[key_name].client1Phone; var client1Email = user.vendors[key_name].client1Email; var client1Service = user.vendors[key_name].client1Service;
        var client2 = user.vendors[key_name].client2; var client2Location = user.vendors[key_name].client2Location; var client2Phone = user.vendors[key_name].client2Phone; var client2Email = user.vendors[key_name].client2Email; var client2Service = user.vendors[key_name].client2Service;
        var client3 = user.vendors[key_name].client3; var client3Location = user.vendors[key_name].client3Location; var client3Phone = user.vendors[key_name].client3Phone; var client3Email = user.vendors[key_name].client3Email; var client3Service = user.vendors[key_name].client3Service;
        var client4 = user.vendors[key_name].client4; var client4Location = user.vendors[key_name].client4Location; var client4Phone = user.vendors[key_name].client4Phone; var client4Email = user.vendors[key_name].client4Email; var client4Service = user.vendors[key_name].client4Service;


        var licence1 = user.vendors[key_name].licence1; var licence1Location = user.vendors[key_name].licence1Location;
        var licence2 = user.vendors[key_name].licence2; var licence2Location = user.vendors[key_name].licence2Location;
        var licence3 = user.vendors[key_name].licence3; var licence3Location = user.vendors[key_name].licence3Location;
        var licence4 = user.vendors[key_name].licence4; var licence4Location = user.vendors[key_name].licence4Location;
        var licence5 = user.vendors[key_name].licence5; var licence5Location = user.vendors[key_name].licence5Location;

        var insurer1 = user.vendors[key_name].insurer1; var policyLimit1 = user.vendors[key_name].policyLimit1; var expiry1 = user.vendors[key_name].expiry1;
        var insurer2 = user.vendors[key_name].insurer2; var policyLimit2 = user.vendors[key_name].policyLimit2; var expiry2 = user.vendors[key_name].expiry2;
        var insurer3 = user.vendors[key_name].insurer3; var policyLimit3 = user.vendors[key_name].policyLimit3; var expiry3 = user.vendors[key_name].expiry3;
        var insurer4 = user.vendors[key_name].insurer4; var policyLimit4 = user.vendors[key_name].policyLimit4; var expiry4 = user.vendors[key_name].expiry4;
        var insurer5 = user.vendors[key_name].insurer5; var policyLimit5 = user.vendors[key_name].policyLimit5; var expiry5 = user.vendors[key_name].expiry5;
        var insurer6 = user.vendors[key_name].insurer6; var policyLimit6 = user.vendors[key_name].policyLimit6; var expiry6 = user.vendors[key_name].expiry6;
        var insurer7 = user.vendors[key_name].insurer7; var policyLimit7 = user.vendors[key_name].policyLimit7; var expiry7 = user.vendors[key_name].expiry7;
        var insurer8 = user.vendors[key_name].insurer8; var policyLimit8 = user.vendors[key_name].policyLimit8; var expiry8 = user.vendors[key_name].expiry8;
        var insurer9 = user.vendors[key_name].insurer9; var policyLimit9 = user.vendors[key_name].policyLimit9; var expiry9 = user.vendors[key_name].expiry9;
        var insurer10 = user.vendors[key_name].insurer10; var policyLimit10 = user.vendors[key_name].policyLimit10; var expiry10 = user.vendors[key_name].expiry10;
        var insurer11 = user.vendors[key_name].insurer11; var policyLimit11 = user.vendors[key_name].policyLimit11; var expiry11 = user.vendors[key_name].expiry11;
        var insurer12 = user.vendors[key_name].insurer12; var policyLimit12 = user.vendors[key_name].policyLimit12; var expiry12 = user.vendors[key_name].expiry12;
        var insurer13 = user.vendors[key_name].insurer13; var policyLimit13 = user.vendors[key_name].policyLimit13; var expiry13 = user.vendors[key_name].expiry13;
        var insurer14 = user.vendors[key_name].insurer14; var policyLimit14 = user.vendors[key_name].policyLimit14; var expiry14 = user.vendors[key_name].expiry14;
        var insurer15 = user.vendors[key_name].insurer15; var policyLimit15 = user.vendors[key_name].policyLimit15; var expiry15 = user.vendors[key_name].expiry15;

        var EHWcurrentYear = user.vendors[key_name].EHWcurrentYear; var EHWpreviousYear1 = user.vendors[key_name].EHWpreviousYear1; var EHWpreviousYear2 = user.vendors[key_name].EHWpreviousYear2; var EHWpreviousYear3 = user.vendors[key_name].EHWpreviousYear3;
        var FcurrentYear = user.vendors[key_name].FcurrentYear; var FpreviousYear1 = user.vendors[key_name].FpreviousYear1; var FpreviousYear2 = user.vendors[key_name].FpreviousYear2; var FpreviousYear3 = user.vendors[key_name].FpreviousYear3;
        var LTIcurrentYear = user.vendors[key_name].LTIcurrentYear; var LTIpreviousYear1 = user.vendors[key_name].LTIpreviousYear1; var LTIpreviousYear2 = user.vendors[key_name].LTIpreviousYear2; var LTIpreviousYear3 = user.vendors[key_name].LTIpreviousYear3;
        var MAIcurrentYear = user.vendors[key_name].MAIcurrentYear; var MAIpreviousYear1 = user.vendors[key_name].MAIpreviousYear1; var MAIpreviousYear2 = user.vendors[key_name].MAIpreviousYear2; var MAIpreviousYear3 = user.vendors[key_name].MAIpreviousYear3;
        var ORCcurrentYear = user.vendors[key_name].ORCcurrentYear; var ORCpreviousYear1 = user.vendors[key_name].ORCpreviousYear1; var ORCpreviousYear2 = user.vendors[key_name].ORCpreviousYear2; var ORCpreviousYear3 = user.vendors[key_name].ORCpreviousYear3;
        var TRIcurrentYear = user.vendors[key_name].TRIcurrentYear; var TRIpreviousYear1 = user.vendors[key_name].TRIpreviousYear1; var TRIpreviousYear2 = user.vendors[key_name].TRIpreviousYear2; var TRIpreviousYear3 = user.vendors[key_name].TRIpreviousYear3;

        var industryCode = user.vendors[key_name].industryCode; var industryClassification = user.vendors[key_name].industryClassification;

        var IRcurrentYear = user.vendors[key_name].IRcurrentYear; var IRpreviousYear1 = user.vendors[key_name].IRpreviousYear1; var IRpreviousYear2 = user.vendors[key_name].IRpreviousYear2; var IRpreviousYear3 = user.vendors[key_name].IRpreviousYear3;
        var PRcurrentYear = user.vendors[key_name].PRcurrentYear; var PRpreviousYear1 = user.vendors[key_name].PRpreviousYear1; var PRpreviousYear2 = user.vendors[key_name].PRpreviousYear2; var PRpreviousYear3 = user.vendors[key_name].PRpreviousYear3;
        var PDcurrentYear = user.vendors[key_name].PDcurrentYear; var PDpreviousYear1 = user.vendors[key_name].PDpreviousYear1; var PDpreviousYear2 = user.vendors[key_name].PDpreviousYear2; var PDpreviousYear3 = user.vendors[key_name].PDpreviousYear3;
        var PScurrentYear = user.vendors[key_name].PScurrentYear; var PSpreviousYear1 = user.vendors[key_name].PSpreviousYear1; var PSpreviousYear2 = user.vendors[key_name].PSpreviousYear2; var PSpreviousYear3 = user.vendors[key_name].PSpreviousYear3;

        var drugPolicy = user.vendors[key_name].drugPolicy;
        var subcontractors = user.vendors[key_name].subcontractors;
        var stopWorkOrder = user.vendors[key_name].stopWorkOrder;



        var email = user.vendors[key_name].email;
        var adminContact = user.vendors[key_name].adminContact;
        var technicalContact = user.vendors[key_name].technicalContact;

        var ISnumber = user.vendors[key_name].ISnumber;

        var website = user.vendors[key_name].website;
        var password = user.vendors[key_name].password;


        var info = {email, password, legalEntity, operatingName, address1, address2,
          city, province, country, postalCode, phone, fax, owner1Name, owner1Pos, owner2Name, owner2Pos, owner3Name, owner3Pos, owner4Name, owner4Pos, owner5Name, owner5Pos, natureBusiness, timeBusiness, proAffiliation, report,
          adminContact, technicalContact, ISnumber, website, bank, bankLocation, bonding, bondingLocation, insuranceCompany, insuranceLocation,
          bondingLimitDate, bondingLimit, grossBus, grossBusYear, bankruptcy, numEmployees, AD1address1, AD1address2, AD1city, AD1province, AD1country, AD1postalCode, AD1phone,
          AD2address1, AD2address2, AD2city, AD2province, AD2country, AD2postalCode, AD2phone, AD3address1, AD3address2, AD3city, AD3province, AD3country, AD3postalCode, AD3phone,
          categories, specialties, client1, client1Location, client1Phone, client1Email, client1Service, client2, client2Location, client2Phone, client2Email, client2Service,
          client3, client3Location, client3Phone, client3Email, client3Service, client4, client4Location, client4Phone, client4Email, client4Service, licence1, licence1Location, licence2, licence2Location, licence3, licence3Location, licence4, licence4Location, licence5, licence5Location,
          insurer1, policyLimit1, expiry1, insurer2, policyLimit2, expiry2, insurer3, policyLimit3, expiry3, insurer4, policyLimit4, expiry4, insurer5, policyLimit5, expiry5,
          insurer6, policyLimit6, expiry6, insurer7, policyLimit7, expiry7, insurer8, policyLimit8, expiry8, insurer9, policyLimit9, expiry9, insurer10, policyLimit10, expiry10,
          insurer11, policyLimit11, expiry11, insurer12, policyLimit12, expiry12, insurer13, policyLimit13, expiry13, insurer14, policyLimit14, expiry14, insurer15, policyLimit15, expiry15,
          EHWcurrentYear, EHWpreviousYear1, EHWpreviousYear2, EHWpreviousYear3, FcurrentYear, FpreviousYear1, FpreviousYear2, FpreviousYear3, LTIcurrentYear, LTIpreviousYear1, LTIpreviousYear2, LTIpreviousYear3,
          MAIcurrentYear, MAIpreviousYear1, MAIpreviousYear2, MAIpreviousYear3, ORCcurrentYear, ORCpreviousYear1, ORCpreviousYear2, ORCpreviousYear3, TRIcurrentYear, TRIpreviousYear1, TRIpreviousYear2, TRIpreviousYear3,
          industryCode, industryClassification, IRcurrentYear, IRpreviousYear1, IRpreviousYear2, IRpreviousYear3, PRcurrentYear, PRpreviousYear1, PRpreviousYear2, PRpreviousYear3,
          PDcurrentYear, PDpreviousYear1, PDpreviousYear2, PDpreviousYear3, PScurrentYear, PSpreviousYear1, PSpreviousYear2, PSpreviousYear3, drugPolicy, subcontractors, stopWorkOrder,
          role, key_name,
        }

      } else if (role == 2) { // approve for additional resource
        var website = user.ad[key_name].website;
        var email = user.ad[key_name].email;
        var password = user.ad[key_name].password;
        var role = user.ad[key_name].role;

        var info = {website, email, password, role, key_name}
      }

      this.approveUser(info)
    }
    /**
     * reject type of users.
     * @param {object} key_name - takes key name of user in database and rejects user
     * @param {object} role - takes role to determine which user to reject
     */
    reject(key_name, role) {
      console.log("rejected")
      const {user} = this.props
      var info = {key_name, role}

      this.rejectUser(info)
    }
    /**
     * review type of users.
     * @param {object} key_name - takes key name of user in database and review user
     * @param {object} role - takes role to determine which user to review
     */
    review(key_name, role) {
      console.log("review")
      const {user} = this.props
      var data = {key_name, role}
      this.storeKeyRole(data)

      // after storing the information, we wnat to redirect into admin-review
      window.location.assign('/#/admin-review')
    }
    /**
      * Loads the emails for and buttons.
      * @return {html} - returns button and links and emails
      */
    render() {
      const {user} = this.props
      if (user.role == 3) {
        var EMAILS = [];

        //console.log(user)
        console.log(user)
        var keys
        if (user.purchasers != null) {
          keys = Object.keys(user.purchasers)
          EMAILS.push(<h4> Purchasers</h4>)
          EMAILS.push(<hr/>)
          var role = 0 // pass role in for purchaser
          for (var count=0; count<=keys.length-1; count++) {
            var key_name = keys[count]
            EMAILS.push(<h5> Email: {user.purchasers[key_name].email} <br/> Legal Name: {user.purchasers[key_name].legalEntity}</h5>)
            EMAILS.push(<div>
              <Button accent ripple onClick={this.approve.bind(this,key_name,role)} className="mdl-color-text--indigo btn btn-primary">Approve</Button>
              <Button accent ripple onClick={this.reject.bind(this,key_name,role)} className="mdl-color-text--indigo btn btn-primary">Reject</Button>
              <Button accent ripple onClick={this.review.bind(this,key_name,role)} className="mdl-color-text--indigo btn btn-primary">Review</Button>
              </div>)
            if (count<keys.length-1) {
              EMAILS.push(<hr/>)
            }
          }
        }

        var keys
        if (user.vendors != null) {
          keys = Object.keys(user.vendors)
          EMAILS.push(<h4>Vendors</h4>)
          EMAILS.push(<hr/>)
          var role = 1 // role for vendor
          for (var count=0; count<=keys.length-1; count++) {
            var key_name = keys[count]
            EMAILS.push(<h5> Email: {user.vendors[key_name].email} <br/> Legal Name: {user.vendors[key_name].legalEntity}</h5>)
            EMAILS.push(<div>
              <Button accent ripple onClick={this.approve.bind(this,key_name,role)} className="mdl-color-text--indigo btn btn-primary">Approve</Button>
              <Button accent ripple onClick={this.reject.bind(this,key_name,role)} className="mdl-color-text--indigo btn btn-primary">Reject</Button>
              <Button accent ripple onClick={this.review.bind(this,key_name,role)} className="mdl-color-text--indigo btn btn-primary">Review</Button>
              </div>)
            if (count<keys.length-1) {
              EMAILS.push(<hr/>)
            }
          }
        }

        var keys
        if (user.ad != null) {
          keys = Object.keys(user.ad)
          EMAILS.push(<h4>Additional Resource</h4>)
          EMAILS.push(<hr/>)
          var role = 2 // role for additional user
          for (var count=0; count<=keys.length-1; count++) {
            var key_name = keys[count]
            EMAILS.push(<h5> Email: {user.ad[key_name].email} <br/> Website: {user.ad[key_name].website} </h5>)
            EMAILS.push(<div>
              <Button accent ripple onClick={this.approve.bind(this,key_name,role)} className="mdl-color-text--indigo btn btn-primary">Approve</Button>
              <Button accent ripple onClick={this.reject.bind(this,key_name,role)} className="mdl-color-text--indigo btn btn-primary">Reject</Button>
              <Button accent ripple onClick={this.review.bind(this,key_name,role)} className="mdl-color-text--indigo btn btn-primary">Review</Button>
              </div>)
            if (count<keys.length-1) {
              EMAILS.push(<hr/>)
            }
          }
        }
        if (EMAILS.length == 0) {
          EMAILS.push(<h5> No users to approve </h5>)
        }

        return(

          <div>
          <LearnHeader/>

              <div className="learn-content mdl-typography--text-center">
                  <div style={spacerStyle} />
                  <Card shadow={0} style={cardStyle} >
          <div className="learn-content mdl-typography--text-center" style={{width: '100%', margin: 'auto'}}>
            <div className="grid">
              <div className="card mdl-shadow--2dp">
<CardTitle style={cardTitleStyle} className="mdl-color--indigo mdl-color-text--white mdl-shadow--2dp">Review the following Candidates</CardTitle>
                </div>
                <div className="card__supporting-text mdl-color-text--white-600" id="messagesDiv">

                  <h4> {EMAILS} </h4>

                </div>

            </div>

          </div>
          </Card>
          <div style={spacerStyle} />
        </div>

          <LearnFooter/>
        </div>

      );
    } else {
        
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
