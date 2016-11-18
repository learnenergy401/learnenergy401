import {firebaseApp,firebaseAuth,firebaseDb, firebaseStorage, firebaseAuthInstance } from './Firebase'
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
import { fetchKeyRole, fetchVendorSignup, fetchPurchaserSignup, fetchADSignup, getCurrentUser } from "./Actions/userActions"

//the styling for the div showing all the information.  Too long to display on the div itself, so i put it here
var info_div_style={
    margin: 'auto',
    width: '80%',
    height: '80%',
    overflowY:'auto',
    position:'relative',
    border: '2px solid blue',
}

@connect((store) => {
  return {
    user: store.user
  };
})

class AdminReview extends Component {

    /**
    * Gets current user
    * @return {object} user - Returns current user logged in
    */
    getCurrentUser() {
        this.props.dispatch(getCurrentUser())
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
     * Gets information for review
     * @return {object} keys_roles - Returns keys roles state
     */
    fetchKeyRole() {
      this.props.dispatch(fetchKeyRole())
    }

    /**
     * Invoked immediately before a component is unmounted and destroyed, to update our states
     */
    componentWillMount(){
        // this.getCurrentUser() header already does these
        // this.fetchPurchaserSignup()
        // this.fetchVendorSignup()
        // this.fetchADSignup()
        this.fetchKeyRole()
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

    approve(key_name, role) {
      console.log('approve')
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
          client3, client3Location, client3Phone, client3Email, client3Service, client4, client4Location, client4Phone, client4Email, client4Service, licence1, licence1Location,licence2, licence2Location, licence3, licence3Location, licence4, licence4Location, licence5, licence5Location,
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

      window.location.assign('/#/admin')
    }

    reject(key_name, role) {
      console.log('reject')
      const {user} = this.props
      var info = {key_name, role}

      this.rejectUser(info)

      window.location.assign('/#/admin')
    }

    return_back() {
      window.location.assign('/#/admin')
    }
    
    render() {
      const {user} = this.props
      if (user.keys_roles != null) {
        console.log("user is", user)
        var key_name = user.keys_roles.key
        var role = user.keys_roles.role
        //GIVE proper display for role:  not jsut number
        var string_role = {0:'Purchaser', 1:'Vendor', 2:'Admin'}
        if (role==0) {
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
          //var role = user.purchasers[key_name].role;
        

          // make the page here
          return (
            <div>
            <LearnHeader/>
            <div className="learn-content mdl-typography--text-center" >
                <div className="grid">
                  <div className="card mdl-shadow--2dp">
                    <div className="card__title mdl-color--indigo mdl-color-text--white" style={{width: '80%', margin: 'auto'}}>
                      <h4 className="card__title-text">Purchaser Information</h4>
                    </div>
                    <div className="card__supporting-text mdl-color-text--white-600" id="messagesDiv" style={info_div_style}>
              
                      <p>Legal Name: {legalEntity}</p>
                      <p>Operating Name: {operatingName}</p>
                      <p>Role: {string_role[role]}</p>
                      <p>Address 1: {address1}</p>
                      <p>Address 2: {address2}</p>
                      <p>City: {city}</p>
                      <p>Province:{province} </p>
                      <p>Country: {country}</p>
                      <p>Postal Code:{postalCode}</p>
                      <p>Phone:{phone} </p>
                      <p>Fax:{fax}</p>
                      <p>Email:{email}</p>
                      <p>Admin Contact:{adminContact}</p>
                      <p>Techncal Contact:{technicalContact}</p>

                      <p>GST Registration: {gstReg}</p>
                      <p>Bank: {bank}</p>
                      <p>Accounts Recieveable: {accntRec}</p>
                      <p>IS Number:{ISnumber}</p>
                      <p>Website:<a href={website}target="_blank">{website}</a></p>
                      <p>Password:{password}</p>

                      <p>Address 1:{billAddress1}</p>
                      <p>Address 2:{billAddress2}</p>
                      <p>City:{billCity}</p>
                      <p>Province:{billProvince}</p>
                      <p>Country:{billCountry}</p>
                      <p>Postal Code:{billPostalCode}</p>
                      <p>Joint Venture:{jointVenture}</p>
                      <p>Categories:{categories}</p>
              
                    </div>
                <div>
                    <Button accent ripple onClick={this.approve.bind(this,key_name,role)} className="mdl-color-text--indigo btn btn-primary">Approve</Button>
                    <Button accent ripple onClick={this.reject.bind(this,key_name,role)} className="mdl-color-text--indigo btn btn-primary">Reject</Button>
                    <Button accent ripple onClick={this.return_back.bind(this)} className="mdl-color-text--indigo btn btn-primary">Back</Button>
                </div>
                <br/>
              </div>
              </div>
              
            </div>

            <LearnFooter/>
            </div>
        	)
        } else if (role == 1) { // vendor
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

          // make the page here with our info
          return (
            <div>
            <LearnHeader/>
            <div className="learn-content mdl-typography--text-center" >
                <div className="grid">
                  <div className="card mdl-shadow--2dp">
                    <div className="card__title mdl-color--indigo mdl-color-text--white" style={{width: '80%', margin: 'auto'}}>
                      <h4 className="card__title-text">Purchaser Information</h4>
                    </div>
                    <div className="card__supporting-text mdl-color-text--white-600" id="messagesDiv" style={info_div_style}>
              
                      <p>Legal Name: {legalEntity}</p>
                      <p>Operating Name: {operatingName}</p>
                      <p>Role: {string_role[role]}</p>
                      <p>Address 1: {address1}</p>
                      <p>Address 2: {address2}</p>
                      <p>City: {city}</p>
                      <p>Province:{province} </p>
                      <p>Country: {country}</p>
                      <p>Postal Code:{postalCode}</p>
                      <p>Phone:{phone} </p>
                      <p>Fax:{fax}</p>
                      <p>Email:{email}</p>
                      <p>Admin Contact:{adminContact}</p>
                      <p>Techncal Contact:{technicalContact}</p>
                      <p>IS Number:{ISnumber}</p>
                      <p>Website:<a href={website}target="_blank">{website}</a></p>
                      <p>Owner 1:{owner1Name}</p>
                      <p>Owner 2:{owner2Name}</p>
                      <p>Owner 3:{owner3Name}</p>
                      <p>Owner 4: {owner4Name}</p>
                      <p>Owner 5: {owner5Name}</p>
                      <p>Nature Buisness : {natureBusiness}</p>
                      <p>Length of Time in Buisness :{timeBusiness}</p>
                      <p>Professional Affiliations:{proAffiliation}</p>
                      <p>Annual Report :{report}</p>
                      <p>Bank :{bank}</p>
                      <p>Bank Location:{bankLocation}</p>
                      <p>Bonding Company:{bonding}</p>
                      <p>Bonding Company Location:{bondingLocation}</p>
                      <p>Insurance Company :{insuranceCompany}</p>
                      <p>Insurance Company Location :{insuranceLocation}</p>
                      <p>Bonding Limit as of {bondingLimitDate}</p>
                      <p> is:{bondingLimit}</p>
                      <p>Annual Gross Buisness:{grossBus}</p>
                      <p>Bancruptcy:{bankruptcy}</p>              
                      <p>Number of Employees:{numEmployees}</p>
                      <p>Additional Address 1 :{AD1address1}</p>
                      <p>Additional Address Country 1:{AD1country}</p>
                      <p>Additional Phone Number 1:{categories}</p>
                      <p>Additional Address 2:{AD2address1}</p>
                      <p>Additional Address Country 2:{AD2country}</p>
                      <p>Additional Phone Number 2:{categories}</p>
                      <p>Additional Address 3:{AD3address1}</p>
                      <p>Additional Address Country 3:{AD3country}</p>
                      <p>Additional Phone Number 3:{categories}</p>
              
                      
                      <p>Categories of Service:{categories}</p>
                      <p>Specialities:{categories}</p>
                      <p>Client 1 Name:{categories}</p>
                      <p>Location:{categories}</p>
                      <p>Phone:{categories}</p>
                      <p>Emails:{categories}</p>
                      <p>Details:{categories}</p>
                      <p>Client 2 Name:{categories}</p>
                      <p>Location:{categories}</p>
                      <p>Phone:{categories}</p>
                      <p>Emails:{categories}</p>
                      <p>Details:{categories}</p>
                      <p>Client 3 Name:{categories}</p>
                      <p>Location:{categories}</p>
                      <p>Phone:{categories}</p>
                      <p>Emails:{categories}</p>
                      <p>Details:{categories}</p>
                      <p>Client 4 Name:{categories}</p>
                      <p>Location:{categories}</p>
                      <p>Phone:{categories}</p>
                      <p>Emails:{categories}</p>
                      <p>Details:{categories}</p>
              
                      <p>Licence Type 1:{categories}</p>
                      <p>Location:{categories}</p>
                      <p>Licence Type 2:{categories}</p>
                      <p>Location:{categories}</p>
                      <p>Licence Type 3:{categories}</p>
                      <p>Location:{categories}</p>
                      <p>Licence Type 4:{categories}</p>
                      <p>Location:{categories}</p>
                      <p>Licence Type 5:{categories}</p>
                      <p>Location:{categories}</p>
                        
                        <h4>Products/Completed Operations</h4>
              <p>Categories:{categories}</p>
                      <p>Categories:{categories}</p>
                      <p>Categories:{categories}</p>
              
              <h4>Sudden/Accidental Pollution</h4>
              <p>Categories:{categories}</p>
                      <p>Categories:{categories}</p>
                      <p>Categories:{categories}</p>
              
              <h4>Cross Liability/Severability of Interest</h4>
              <p>Categories:{categories}</p>
                      <p>Categories:{categories}</p>
                      <p>Categories:{categories}</p>
              
              <h4>Employers Liability</h4>
              <p>Categories:{categories}</p>
                      <p>Categories:{categories}</p>
                      <p>Categories:{categories}</p>
              
              <h4>Broad Form Property Damage</h4>
              <p>Categories:{categories}</p>
                      <p>Categories:{categories}</p>
                      <p>Categories:{categories}</p>
              
              <h4>Blanket Contractual Liability</h4>
              <p>Categories:{categories}</p>
                      <p>Categories:{categories}</p>
                      <p>Categories:{categories}</p>
              
              <h4>Independent Contractors</h4>
              <p>Categories:{categories}</p>
                      <p>Categories:{categories}</p>
                      <p>Categories:{categories}</p>
              
              <h4>Non-Owned Automobile</h4>
              <p>Categories:{categories}</p>
                      <p>Categories:{categories}</p>
                      <p>Categories:{categories}</p>
              
              <h4>Tenants Legal Liability</h4>
              <p>Categories:{categories}</p>
                      <p>Categories:{categories}</p>
                      <p>Categories:{categories}</p>
              
              <h4>No failure to perform exclusion</h4>
              <p>Categories:{categories}</p>
                      <p>Categories:{categories}</p>
                      <p>Categories:{categories}</p>
              
              <h4>Errors and Omissions</h4>
              <p>Categories:{categories}</p>
                      <p>Categories:{categories}</p>
                      <p>Categories:{categories}</p>
              
              <h4>30 days’ notice for cancellation/non-renewal</h4>
              <p>Categories:{categories}</p>
                      <p>Categories:{categories}</p>
                      <p>Categories:{categories}</p>
              
              <h4>Automobile Insurance</h4>
              <p>Categories:{categories}</p>
                      <p>Categories:{categories}</p>
                      <p>Categories:{categories}</p>
              
              <h4>Excess/Umbrella Liability</h4>
              <p>Categories:{categories}</p>
                      <p>Categories:{categories}</p>
                      <p>Categories:{categories}</p>
              
              <h4>Professional Liability</h4>
              <p>Categories:{categories}</p>
                      <p>Categories:{categories}</p>
                      <p>Categories:{categories}</p>
              
              <h4>Employee hours Worked</h4>
              <p>Categories:{categories}</p>
              <p>Categories:{categories}</p>
              <p>Categories:{categories}</p>
              <p>Categories:{categories}</p>
              
              <h4>Fatalities</h4>
              <p>Categories:{categories}</p>
              <p>Categories:{categories}</p>
              <p>Categories:{categories}</p>
              <p>Categories:{categories}</p>
              
              <h4>Lost time incidents </h4>
              <p>Categories:{categories}</p>
              <p>Categories:{categories}</p>
              <p>Categories:{categories}</p>
              <p>Categories:{categories}</p>
              
              <h4>Medical aid injuries</h4>
              <p>Categories:{categories}</p>
              <p>Categories:{categories}</p>
              <p>Categories:{categories}</p>
              <p>Categories:{categories}</p>
              
              <h4>Other recordable cases </h4>
              <p>Categories:{categories}</p>
              <p>Categories:{categories}</p>
              <p>Categories:{categories}</p>
              <p>Categories:{categories}</p>
              
              <h4>Total recordable injuries - Fatalities + Lost time + Medical Aid + Restricted Duty Injuries</h4>
              <p>Categories:{categories}</p>
              <p>Categories:{categories}</p>
              <p>Categories:{categories}</p>
              <p>Categories:{categories}</p>
              
              <h4>Worker's Compensation</h4>
              <p>Industry Code:{categories}</p>
              <p>Industry Classification:{categories}</p>
              
              <h4>Industry Rate</h4>
              <p>Current Year:{categories}</p>
              <p>Previous Year 1:{categories}</p>
              <p>Previous Year 2:{categories}</p>
              <p>Previous Year 3:{categories}</p>
              
              <h4>Proponent Rate</h4>
              <p>Current Year:{categories}</p>
              <p>Previous Year 1:{categories}</p>
              <p>Previous Year 2:{categories}</p>
              <p>Previous Year 3:{categories}</p>
              
              <h4>% Discount</h4>
              <p>Current Year:{categories}</p>
              <p>Previous Year 1:{categories}</p>
              <p>Previous Year 2:{categories}</p>
              <p>Previous Year 3:{categories}</p>
              
              <h4>% Surcharge</h4>
              <p>Current Year:{categories}</p>
              <p>Previous Year 1:{categories}</p>
              <p>Previous Year 2:{categories}</p>
              <p>Previous Year 3:{categories}</p>
              
              <p>Drug and Alcohol policy:{categories}</p>
              <p>Subcontractor OH&S Evaluation:{categories}</p>
              <p>OH&S Stop Work Order Recieved:{categories}</p>
              <p>Subcontractor OH&S Evaluation:{categories}</p>
              <p>HSE related Judgements:{categories}</p>
              
              
                    
              
                    </div>
                <div>
                    <Button accent ripple onClick={this.approve.bind(this,key_name,role)} className="mdl-color-text--indigo btn btn-primary">Approve</Button>
                    <Button accent ripple onClick={this.reject.bind(this,key_name,role)} className="mdl-color-text--indigo btn btn-primary">Reject</Button>
                    <Button accent ripple onClick={this.return_back.bind(this)} className="mdl-color-text--indigo btn btn-primary">Back</Button>
                </div>
                <br/>
              </div>
              </div>
              
            </div>

            <LearnFooter/>
            </div>
          )
        } else if (role == 2) { // ad

          var website = user.ad[key_name].website;
          var email = user.ad[key_name].email;
          var password = user.ad[key_name].password;
          var role = user.ad[key_name].role;
          return (
            <div>
            <LearnHeader/>
            <h4>LOADING...</h4>

                <div>
                <Button accent ripple onClick={this.approve.bind(this,key_name,role)} className="mdl-color-text--indigo btn btn-primary">Approve</Button>
                <Button accent ripple onClick={this.reject.bind(this,key_name,role)} className="mdl-color-text--indigo btn btn-primary">Reject</Button>
                <Button accent ripple onClick={this.return_back.bind(this)} className="mdl-color-text--indigo btn btn-primary">Back</Button>

                </div>
                <br/>
            <LearnFooter/>
            </div>
          )


        } else if (role == 3) { // admin


          return (
            <div>
            <LearnHeader/>
            <h4>LOADING...</h4>
                <div>
                <Button accent ripple onClick={this.approve.bind(this,key_name,role)} className="mdl-color-text--indigo btn btn-primary">Approve</Button>
                <Button accent ripple onClick={this.reject.bind(this,key_name,role)} className="mdl-color-text--indigo btn btn-primary">Reject</Button>
                <Button accent ripple onClick={this.return_back.bind(this)} className="mdl-color-text--indigo btn btn-primary">Back</Button>

                </div>
                <br/>
            <LearnFooter/>
            </div>
          )
        }

    }
    return (
      <div>
      <LearnHeader/>
      <h4>LOADING...</h4>
      <LearnFooter/>
      </div>
    )
  }
}

export default AdminReview
