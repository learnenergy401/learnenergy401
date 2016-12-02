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
    //backgroundColor: 'silver',
}
var link_ = {
    color:'blue',
}
//the styling for the large tables.
var table_style={
    margin: 'auto',
    width: '800px',
    //border: '5px groove black'

}

var table_style2={
    margin: 'auto',
    width: '800px',
    //border: '5px groove black'

}
//styling for the sub-tables of the large tables
var table_style_sub={
    margin: 'auto',
    width: '800px',
    marginBottom: '15px',
    //border: '1px dotted black'
}

//formatting for the cells in the tables
var row_format_head={
    verticalAlign: 'top',
    paddingBottom:'10px',
    width:'800px',
    //border:'1px dotted'
}

var row_format={
    verticalAlign: 'top',
    paddingBottom:'10px',
    width:'200px',
    border:'1px dotted'
}

var row_format_right={
    verticalAlign: 'top',
    paddingBottom:'10px',
    width:'600px',
    border:'1px dotted'
}

var row_format_additional={
    verticalAlign: 'top',
    paddingBottom:'10px',
    width:'200px',
    border:'1px dotted'
}

var header_align={
    textAlign:'centre'
}

var sub_header_style={
    textAlign:'center',
    width:'800px',
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


    /**
     * Accepts a user
     * @param {object} key_name, role - information about user to approve
     */

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

        var client1 = user.vendors[key_name].client1; var client1Location = user.vendors[key_name].client1Location; var client1Phone = user.vendors[key_name].client1Phone; var client1Email = user.vendors[key_name].client1Email; var client1Service = user.vendors[key_name].client1Service; var client1Name = user.vendors[key_name].client1Name;
        var client2 = user.vendors[key_name].client2; var client2Location = user.vendors[key_name].client2Location; var client2Phone = user.vendors[key_name].client2Phone; var client2Email = user.vendors[key_name].client2Email; var client2Service = user.vendors[key_name].client2Service; var client2Name = user.vendors[key_name].client2Name;
        var client3 = user.vendors[key_name].client3; var client3Location = user.vendors[key_name].client3Location; var client3Phone = user.vendors[key_name].client3Phone; var client3Email = user.vendors[key_name].client3Email; var client3Service = user.vendors[key_name].client3Service; var client3Name = user.vendors[key_name].client3Name;
        var client4 = user.vendors[key_name].client4; var client4Location = user.vendors[key_name].client4Location; var client4Phone = user.vendors[key_name].client4Phone; var client4Email = user.vendors[key_name].client4Email; var client4Service = user.vendors[key_name].client4Service; var client4Name = user.vendors[key_name].client4Name;

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
        var HSEjudge = user.vendors[key_name].HSEjudge;


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
          categories, specialties, client1, client1Location, client1Phone, client1Email, client1Name, client1Service, client2, client2Location, client2Phone, client2Email, client2Name, client2Service,
          client3, client3Location, client3Phone, client3Email, client3Name, client3Service, client4, client4Location, client4Phone, client4Email, client4Name, client4Service, licence1, licence1Location,licence2, licence2Location, licence3, licence3Location, licence4, licence4Location, licence5, licence5Location,
          insurer1, policyLimit1, expiry1, insurer2, policyLimit2, expiry2, insurer3, policyLimit3, expiry3, insurer4, policyLimit4, expiry4, insurer5, policyLimit5, expiry5,
          insurer6, policyLimit6, expiry6, insurer7, policyLimit7, expiry7, insurer8, policyLimit8, expiry8, insurer9, policyLimit9, expiry9, insurer10, policyLimit10, expiry10,
          insurer11, policyLimit11, expiry11, insurer12, policyLimit12, expiry12, insurer13, policyLimit13, expiry13, insurer14, policyLimit14, expiry14, insurer15, policyLimit15, expiry15,
          EHWcurrentYear, EHWpreviousYear1, EHWpreviousYear2, EHWpreviousYear3, FcurrentYear, FpreviousYear1, FpreviousYear2, FpreviousYear3, LTIcurrentYear, LTIpreviousYear1, LTIpreviousYear2, LTIpreviousYear3,
          MAIcurrentYear, MAIpreviousYear1, MAIpreviousYear2, MAIpreviousYear3, ORCcurrentYear, ORCpreviousYear1, ORCpreviousYear2, ORCpreviousYear3, TRIcurrentYear, TRIpreviousYear1, TRIpreviousYear2, TRIpreviousYear3,
          industryCode, industryClassification, IRcurrentYear, IRpreviousYear1, IRpreviousYear2, IRpreviousYear3, PRcurrentYear, PRpreviousYear1, PRpreviousYear2, PRpreviousYear3,
          PDcurrentYear, PDpreviousYear1, PDpreviousYear2, PDpreviousYear3, PScurrentYear, PSpreviousYear1, PSpreviousYear2, PSpreviousYear3, drugPolicy, subcontractors, stopWorkOrder, HSEjudge,
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
    /**
     * rejects a user
     * @param {object} key_name, role - information about user to reject
     */
    reject(key_name, role) {
      console.log('reject')
      const {user} = this.props
      var info = {key_name, role}

      this.rejectUser(info)

      window.location.assign('/#/admin')
    }
    /**
     * returns back to previous page
     */
    return_back() {
      window.location.assign('/#/admin')
    }

    /**
      * Loads the details
      * @return {html} - returns html details
      */
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
            var webtest = '//'+website;
          var password = user.purchasers[key_name].password;
         var cat2 = []
          var i =0

          while(categories[i] != 'N/A'){
              cat2.push(categories[i])
              cat2.push(', ')
              i++
          }
          cat2.pop()


             // size format test variable
          var Test='ajfhsdklfjhsfkljfhdflaskjfhdlkdj sfhlsdkjsdhsdkljfhsflksjadfhasdklfjh kasjdfhasdlfjhaljdksdajfhasdkljhasljsdfhlaskdjfhaskl fjhaksjdfhasklfjshsdljfh'
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
                    <h3><b>Contact Information</b></h3>
                      <table style={table_style}>

                            <tr>
                                <td style = {row_format}><b>Legal Name:</b></td>
                                <td style = {row_format_right}>{legalEntity}</td>
                            </tr>
                            <tr>
                                <td style = {row_format}><b>Operating Name:</b></td>
                                <td style = {row_format_right}>{operatingName}</td>
                            </tr>
                            <tr>
                                <td style = {row_format}><b>Role:</b></td>
                                <td style = {row_format_right}>{string_role[role]}</td>
                            </tr>
                            <tr>
                                <td style = {row_format}><b>Address 1: </b></td>
                                 <td style = {row_format_right}>{address1}</td>
                            </tr>
                            <tr>
                                <td style = {row_format}><b>Address 2: </b></td>
                                 <td style = {row_format_right}>{address2}</td>
                            </tr>

                            <tr>
                                <td style = {row_format}><b>City:</b></td>
                                 <td style = {row_format_right}>{city}</td>
                            </tr>
                            <tr>
                                <td style = {row_format}><b>Province:</b></td>
                                 <td style = {row_format_right}>{province}</td>
                            </tr>
                            <tr>
                                <td style = {row_format}><b>Country:</b></td>
                                 <td style = {row_format_right}>{country}</td>
                            </tr>
                            <tr>
                                <td style = {row_format}><b>Postal Code:</b></td>
                                 <td style = {row_format_right}>{postalCode}</td>
                            </tr>
                            <tr>
                                <td style = {row_format}><b>Phone:</b></td>
                                 <td style = {row_format_right}>{phone}</td>
                            </tr>

                            <tr>
                                <td style = {row_format}><b>Fax:</b></td>
                                 <td style = {row_format_right}>{fax}</td>
                            </tr>
                            <tr>
                                <td style = {row_format}><b>Email:</b></td>
                                 <td style = {row_format_right}>{email}</td>
                            </tr>
                            <tr>
                                <td style = {row_format}><b>Admin Contact:</b></td>
                                 <td style = {row_format_right}>{adminContact}</td>
                            </tr>
                            <tr>
                                <td style = {row_format}><b>Techncal Contact:</b></td>
                                 <td style = {row_format_right}>{technicalContact}</td>
                            </tr>
                            </table>

                            <h3><b>Business Information</b></h3>
                            <table style={table_style}>
                            <tr>
                                <td style = {row_format}><b>GST Registration: </b></td>
                                 <td style = {row_format_right}>{gstReg}</td>
                            </tr>
                            <tr>
                                <td style = {row_format}><b>Bank:</b></td>
                                 <td style = {row_format_right}>{bank}</td>
                            </tr>
                            <tr>
                                <td style = {row_format}><b>Accounts Payable:</b></td>
                                 <td style = {row_format_right}>{accntRec}</td>
                            </tr>
                            <tr>
                                <td style = {row_format}><b>IS Number:</b></td>
                                 <td style = {row_format_right}>{ISnumber}</td>
                            </tr>
                            <tr>
                                <td style = {row_format}><b>Website: </b></td>
                                 <td style = {row_format_right}><a href= {webtest} link="red" target="_blank" style = {link_}>{legalEntity}</a></td>
                            </tr>
                            <tr>
                                <td style = {row_format}><b>Password:</b></td>
                                 <td style = {row_format_right}>{password}</td>
                            </tr>
                            <tr>
                                <td style = {row_format}><b>Address 1:</b></td>
                                 <td style = {row_format_right}>{billAddress1}</td>
                            </tr>
                            <tr>
                                <td style = {row_format}><b>Address 2:</b></td>
                                 <td style = {row_format_right}>{billAddress2}</td>
                            </tr>
                            <tr>
                                <td style = {row_format}><b>City:</b></td>
                                 <td style = {row_format_right}>{billCity}</td>
                            </tr>
                            <tr>
                                <td style = {row_format}><b>Province:</b></td>
                                 <td style = {row_format_right}>{billProvince}</td>
                            </tr>
                            <tr>
                                <td style = {row_format}><b>Country:</b></td>
                                 <td style = {row_format_right}>{billCountry}</td>
                            </tr>
                            <tr>
                                <td style = {row_format}><b>Postal Code:</b></td>
                                 <td style = {row_format_right}>{billPostalCode}</td>
                            </tr>
                            <tr>
                                <td style = {row_format}><b>Joint Venture:</b></td>
                                 <td style = {row_format_right}>{jointVenture}</td>
                            </tr>
                            <tr>
                                <td style = {row_format}><b>Categories:</b></td>
                                 <td style = {row_format_right}>{cat2}</td>
                            </tr>

                        </table>


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

          var client1 = user.vendors[key_name].client1; var client1Location = user.vendors[key_name].client1Location; var client1Phone = user.vendors[key_name].client1Phone; var client1Email = user.vendors[key_name].client1Email; var client1Service = user.vendors[key_name].client1Service;var client1Name = user.vendors[key_name].client1Name;
          var client2 = user.vendors[key_name].client2; var client2Location = user.vendors[key_name].client2Location; var client2Phone = user.vendors[key_name].client2Phone; var client2Email = user.vendors[key_name].client2Email; var client2Service = user.vendors[key_name].client2Service;var client2Name = user.vendors[key_name].client2Name;
          var client3 = user.vendors[key_name].client3; var client3Location = user.vendors[key_name].client3Location; var client3Phone = user.vendors[key_name].client3Phone; var client3Email = user.vendors[key_name].client3Email; var client3Service = user.vendors[key_name].client3Service;var client3Name = user.vendors[key_name].client3Name;
          var client4 = user.vendors[key_name].client4; var client4Location = user.vendors[key_name].client4Location; var client4Phone = user.vendors[key_name].client4Phone; var client4Email = user.vendors[key_name].client4Email; var client4Service = user.vendors[key_name].client4Service;var client4Name = user.vendors[key_name].client4Name;

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
          var HSEjudge = user.vendors[key_name].HSEjudge;

          var email = user.vendors[key_name].email;
          var adminContact = user.vendors[key_name].adminContact;
          var technicalContact = user.vendors[key_name].technicalContact;

          var ISnumber = user.vendors[key_name].ISnumber;

          var website = user.vendors[key_name].website;
          var password = user.vendors[key_name].password;
          
          if(user.vendors[key_name].downloadlink!=null){
           var downloadlink=user.vendors[key_name].downloadlink;
          }
          
          var cat2 = []
          var spec2 = []
          var i = 0
          var j = 0
           var webtest = '//'+website;
          for (i; i< categories.length; i++){
              if(categories[i]=='N/A'){break}
              else{
                  cat2.push(categories[i])
                  cat2.push(', ')
              }
          }
          for (j; j< specialties.length; j++){
              if(specialties[j]=='N/A'){break}
              else{
                  spec2.push(specialties[j])
                  spec2.push(', ')
              }
          }
          if (cat2.length > 0){cat2.pop()}
          if (spec2.length > 0){spec2.pop()}
        // size format test variable
          var Test='ajfhsdklfjhsfkljfhdflaskjfhdlkdj sfhlsdkjsdhsdkljfhsflksjadfhasdklfjh kasjdfhasdlfjhaljdksdajfhasdkljhasljsdfhlaskdjfhaskl fjhaksjdfhasklfjshsdljfh'

          // make the page here with our info
            //MISSING TWO VARIABLES I HAVE TO ADD>  OHS EVAL AND HSE RELATED JUDGEMENTS
          return (
            <div>
            <LearnHeader/>
            <div className="learn-content mdl-typography--text-center" >
                <div className="grid">
                  <div className="card mdl-shadow--2dp">
                    <div className="card__title mdl-color--indigo mdl-color-text--white" style={{width: '80%', margin: 'auto'}}>
                      <h4 className="card__title-text">Vendor Information</h4>
                    </div>

                    <div className="card__supporting-text mdl-color-text--white-600" id="messagesDiv" style={info_div_style}>

                        <h3 style={header_align}>Contact Information</h3>
                        <table style={table_style}>
                            <tr>
                                <td style={row_format}><b>Legal Name: </b></td>
                                <td style={row_format_right}>{legalEntity}</td>
                            </tr>
                            <tr>
                                <td style={row_format}><b>Operating Name:</b> </td>
                                <td style={row_format_right}>{operatingName}</td>
                            </tr>
                            <tr>
                                <td style={row_format}><b>Role: </b></td>
                                <td style={row_format_right}>{string_role[role]}</td>
                            </tr>
                            <tr>
                                <td style={row_format}><b>Address 1: </b></td>
                                <td style={row_format_right}>{address1}</td>
                            </tr>
                            <tr>
                                <td style={row_format}><b>Address 2: </b></td>
                                <td style={row_format_right}>{address2}</td>
                            </tr>
                            <tr>
                                <td style={row_format}><b>City:</b> </td>
                                <td style={row_format_right}>{city}</td>
                            </tr>
                            <tr>
                                <td style={row_format}><b>Province:</b></td>
                                <td style={row_format_right}>{province}</td>
                            </tr>
                            <tr>
                                <td style={row_format}><b>Country: </b></td>
                                <td style={row_format_right}>{country}</td>
                            </tr>
                            <tr>
                                <td style={row_format}><b>Postal Code:</b></td>
                                <td style={row_format_right}>{postalCode}</td>
                            </tr>
                            <tr>
                                <td style={row_format}><b>Phone:</b></td>
                                <td style={row_format_right}>{phone}</td>
                            </tr>
                            <tr>
                                <td style={row_format}><b>Fax:</b></td>
                                <td style={row_format_right}>{fax}</td>
                            </tr>
                            <tr>
                                <td style={row_format}><b>Email:</b></td>
                                <td style={row_format_right}>{email}</td>
                            </tr>
                            <tr>
                                <td style={row_format}><b>Admin Contact:</b></td>
                                <td style={row_format_right}>{adminContact}</td>
                            </tr>
                            <tr>
                                <td style={row_format}><b>Techncal Contact:</b></td>
                                <td style={row_format_right}>{technicalContact}</td>
                                
                            </tr>
                            <tr>
                                <td style={row_format}><b>Annual Report:</b></td>
                                <td style={row_format_right}><a href={downloadlink}>click to view</a></td>
                            </tr>
                        </table>


                        <h3 style={header_align}>Business Information</h3>
                        <table style={table_style}>
                            <tr>
                                <td style = {row_format}><b>Owner 1:</b></td>
                                <td style = {row_format_right}>{owner1Name}</td>
                                <td style = {row_format}><b>Position:</b></td>
                                <td style = {row_format}>{owner1Pos}</td>
                            </tr>

                            <tr>
                                <td style = {row_format}><b>Owner 2:</b></td>
                                <td style = {row_format_right}>{owner2Name}</td>
                                <td style = {row_format}><b>Position:</b></td>
                                <td style = {row_format_right}>{owner2Pos}</td>
                            </tr>
                            <tr>
                                <td style = {row_format}><b>Owner 3: </b></td>
                                <td style = {row_format_right}>{owner3Name}</td>
                                <td style = {row_format}><b>Position:</b></td>
                                <td style = {row_format_right}>{owner3Pos}</td>
                            </tr>
                            <tr>
                                <td style = {row_format}><b>Owner 4:</b> </td>
                                <td style = {row_format_right}>{owner4Name}</td>
                                <td style = {row_format}><b>Position:</b></td>
                                <td style = {row_format_right}>{owner4Pos}</td>
                            </tr>

                            <tr>
                                <td style = {row_format}><b>Owner 5:</b></td>
                                <td style = {row_format_right}>{owner5Name}</td>
                                <td style = {row_format}><b>Position:</b></td>
                                <td style = {row_format_right}>{owner5Pos}</td>
                            </tr>
              </table>
              <table style={table_style}>
                            <tr>
                                <td style={row_format}><b>IS Number:</b></td>
                                <td style={row_format_right}>{ISnumber}</td>
                            </tr>
                            <tr>
                                <td style = {row_format}><b>Website:</b></td>
                                <td style = {row_format_right}><a href={webtest}target="_blank" style={link_}>{legalEntity}</a></td>
                            </tr>

                            <tr>
                                <td style = {row_format}><b>Country: </b></td>
                                <td style = {row_format_right}>{country}</td>
                            </tr>
                            <tr>
                                <td style = {row_format}><b>Postal Code:</b></td>
                                <td style = {row_format_right}>{postalCode}</td>
                            </tr>
                            <tr>
                                <td style = {row_format}><b>Phone:</b></td>
                                <td style = {row_format_right}>{phone}</td>
                            </tr>
                            <tr>
                                <td style = {row_format}><b>Fax:</b></td>
                                <td style = {row_format_right}>{fax}</td>
                            </tr>
                            <tr>
                                <td style = {row_format}><b>Email:</b></td>
                                <td style = {row_format_right}>{email}</td>
                            </tr>
                            <tr>
                                <td style = {row_format}><b>Admin Contact:</b></td>
                                <td style = {row_format_right}>{adminContact}</td>
                            </tr>
                        </table>

                        <h3 style={header_align}>Work History</h3>
                        <table style={table_style}>
                            <tr>
                                <td style = {row_format}>
                                    <table style={table_style_sub}>
                                    <tr>
                                       <td style = {row_format}><b>Client:</b></td>
                                        <td style = {row_format_right}>{client1}</td>
                                    </tr>
                                    <tr>
                                       <td style = {row_format}><b>Client Name:</b></td>
                                        <td style = {row_format_right}>{client1Name}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Location:</b></td>
                                        <td style = {row_format_right}>{client1Location}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Phone:</b></td>
                                        <td style = {row_format_right}>{client1Phone}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Emails:</b></td>
                                        <td style = {row_format_right}>{client1Email}</td>
                                    </tr>
                                    <tr>
                                        <td style={row_format}><b>Details:</b></td>
                                        <td style = {row_format_right}>{client1Service}</td>
                                    </tr>
                                </table>
                                </td>

                            </tr>
                            <tr>
                                <td style = {row_format}>
                                    <table style={table_style_sub}>
                                    <tr>
                                       <td style = {row_format}><b>Client:</b></td>
                                        <td style = {row_format_right}>{client2}</td>
                                    </tr>
                                    <tr>
                                       <td style = {row_format}><b>Client Name:</b></td>
                                        <td style = {row_format_right}>{client2Name}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Location:</b></td>
                                        <td style = {row_format_right}>{client2Location}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Phone:</b></td>
                                        <td style = {row_format_right}>{client2Phone}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Emails:</b></td>
                                        <td style = {row_format_right}>{client2Email}</td>
                                    </tr>
                                    <tr>
                                        <td style={row_format}><b>Details:</b></td>
                                        <td style = {row_format_right}>{client2Service}</td>
                                    </tr>
                                </table>
                                </td>

                            </tr>
                            <tr>
                                <td style = {row_format}>
                                    <table style={table_style_sub}>
                                    <tr>
                                       <td style = {row_format}><b>Client:</b></td>
                                        <td style = {row_format_right}>{client3}</td>
                                    </tr>
                                    <tr>
                                       <td style = {row_format}><b>Client Name:</b></td>
                                        <td style = {row_format_right}>{client3Name}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Location:</b></td>
                                        <td style = {row_format_right}>{client3Location}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Phone:</b></td>
                                        <td style = {row_format_right}>{client3Phone}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Emails:</b></td>
                                        <td style = {row_format_right}>{client3Email}</td>
                                    </tr>
                                    <tr>
                                        <td style={row_format}><b>Details:</b></td>
                                        <td style = {row_format_right}>{client3Service}</td>
                                    </tr>
                                </table>
                                </td>

                            </tr>
                            <tr>
                                <td style = {row_format}>
                                    <table style={table_style_sub}>
                                    <tr>
                                       <td style = {row_format}><b>Client:</b></td>
                                        <td style = {row_format_right}>{client4}</td>
                                    </tr>
                                    <tr>
                                       <td style = {row_format}><b>Client Name:</b></td>
                                        <td style = {row_format_right}>{client4Name}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Location:</b></td>
                                        <td style = {row_format_right}>{client4Location}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Phone:</b></td>
                                        <td style = {row_format_right}>{client4Phone}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Emails:</b></td>
                                        <td style = {row_format_right}>{client4Email}</td>
                                    </tr>
                                    <tr>
                                        <td style={row_format}><b>Details:</b></td>
                                        <td style = {row_format_right}>{client4Service}</td>
                                    </tr>
                                </table>
                                </td>
                            </tr>
                        </table>

                        <h3 style={header_align}>Licensing</h3>
                        <table style={table_style}>
                            <tr>
                                <td style = {row_format}><b>Licence Type 1:</b></td>
                                <td style = {row_format_right}>{licence1}</td>
                            </tr>
                            <tr>
                                <td style = {row_format}><b>Licence Type 2:</b></td>
                                <td style = {row_format_right}>{licence2}</td>
                            </tr>
                            <tr>
                                <td style = {row_format}><b>Licence Type 3:</b></td>
                                <td style = {row_format_right}>{licence3}</td>
                            </tr>
                            <tr>
                                <td style = {row_format}><b>Licence Type 4:</b></td>
                                <td style = {row_format_right}>{licence4}</td>
                            </tr>
                            <tr>
                                <td style = {row_format}><b>Licence Type 5:</b></td>
                                <td style = {row_format_right}>{licence5}</td>
                            </tr>
                        </table>

                        <h3 style={header_align}>Insurance</h3>
                        <table style={table_style}>
                            <tr>
                                <td style = {row_format_right}>
                                <h6 style={sub_header_style}><b>Products/Completed Operations</b></h6>
                                    <table style={table_style_sub}>

                                    <tr>
                                       <td style = {row_format}><b>Insurer:</b></td>
                                        <td style = {row_format_right}>{insurer1}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Policy Limit:</b></td>
                                        <td style = {row_format_right}>{policyLimit1}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Expiry:</b></td>
                                        <td style = {row_format_right}>{expiry1}</td>
                                    </tr>

                                </table>
                                </td>
                            </tr>
                            <tr>
                                <td style = {row_format_right}>
                                <h6 style={sub_header_style}><b>Sudden/Accidental Pollution</b></h6>
                                    <table style={table_style_sub}>
                                    <tr>
                                       <td style = {row_format}><b>Insurer:</b></td>
                                        <td style = {row_format_right}>{insurer2}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Policy Limit:</b></td>
                                        <td style = {row_format_right}>{policyLimit2}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Expiry:</b></td>
                                        <td style = {row_format_right}>{expiry2}</td>
                                    </tr>

                                </table>
                                </td>
                            </tr>
                            <tr>
                                <td style = {row_format_right}>
                                <h6 style={sub_header_style}><b>Cross Liability/Severability of Interest</b></h6>
                                    <table style={table_style_sub}>
                                    <tr>
                                       <td style = {row_format}><b>Insurer:</b></td>
                                        <td style = {row_format_right}>{insurer3}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Policy Limit:</b></td>
                                        <td style = {row_format_right}>{policyLimit3}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Expiry:</b></td>
                                        <td style = {row_format_right}>{expiry3}</td>
                                    </tr>

                                </table>
                                </td>
                            </tr>
                            <tr>
                                <td style = {row_format_right}>
                                <h6 style={sub_header_style}><b>Employers Liability</b></h6>
                                    <table style={table_style_sub}>

                                    <tr>
                                       <td style = {row_format}><b>Insurer:</b></td>
                                        <td style = {row_format_right}>{insurer4}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Policy Limit:</b></td>
                                        <td style = {row_format_right}>{policyLimit4}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Expiry:</b></td>
                                        <td style = {row_format_right}>{expiry4}</td>
                                    </tr>

                                </table>
                                </td>
                            </tr>
                            <tr>
                                <td style = {row_format_right}>
                                <h6 style={sub_header_style}><b>Broad Form Property Damage</b></h6>
                                    <table style={table_style_sub}>

                                    <tr>
                                       <td style = {row_format}><b>Insurer:</b></td>
                                        <td style = {row_format_right}>{insurer5}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Policy Limit:</b></td>
                                        <td style = {row_format_right}>{policyLimit5}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Expiry:</b></td>
                                        <td style = {row_format_right}>{expiry5}</td>
                                    </tr>

                                </table>
                                </td>
                            </tr>
                            <tr>
                                <td style = {row_format_right}>
                                <h6 style={sub_header_style}><b>Blanket Contractual Liability</b></h6>
                                    <table style={table_style_sub}>

                                    <tr>
                                       <td style = {row_format}><b>Insurer:</b></td>
                                        <td style = {row_format_right}>{insurer6}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Policy Limit:</b></td>
                                        <td style = {row_format_right}>{policyLimit6}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Expiry:</b></td>
                                        <td style = {row_format_right}>{expiry6}</td>
                                    </tr>

                                </table>
                                </td>
                            </tr>
                            <tr>
                                <td style = {row_format_right}>
                                <h6 style={sub_header_style}><b>Independent Contractor</b></h6>
                                    <table style={table_style_sub}>

                                    <tr>
                                       <td style = {row_format}><b>Insurer:</b></td>
                                        <td style = {row_format_right}>{insurer7}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Policy Limit:</b></td>
                                        <td style = {row_format_right}>{policyLimit7}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Expiry:</b></td>
                                        <td style = {row_format_right}>{expiry7}</td>
                                    </tr>

                                </table>
                                </td>
                            </tr>
                            <tr>
                                <td style = {row_format_right}>
                                <h6 style={sub_header_style}><b>Non-Owned Automobile</b></h6>
                                    <table style={table_style_sub}>

                                    <tr>
                                       <td style = {row_format}><b>Insurer:</b></td>
                                        <td style = {row_format_right}>{insurer8}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Policy Limit:</b></td>
                                        <td style = {row_format_right}>{policyLimit8}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Expiry:</b></td>
                                        <td style = {row_format_right}>{expiry8}</td>
                                    </tr>

                                </table>
                                </td>
                            </tr>
                            <tr>
                                <td style = {row_format_right}>
                                <h6 style={sub_header_style}><b>Tenant Legal liability</b></h6>
                                    <table style={table_style_sub}>

                                    <tr>
                                       <td style = {row_format}><b>Insurer:</b></td>
                                        <td style = {row_format_right}>{insurer9}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Policy Limit:</b></td>
                                        <td style = {row_format_right}>{policyLimit9}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Expiry:</b></td>
                                        <td style = {row_format_right}>{expiry9}</td>
                                    </tr>

                                </table>
                                </td>
                            </tr>
                            <tr>
                                <td style = {row_format_right}>
                                <h6 style={sub_header_style}><b>No Failiure to Preform</b></h6>
                                    <table style={table_style_sub}>

                                    <tr>
                                       <td style = {row_format}><b>Insurer:</b></td>
                                        <td style = {row_format_right}>{insurer10}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Policy Limit:</b></td>
                                        <td style = {row_format_right}>{policyLimit10}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Expiry:</b></td>
                                        <td style = {row_format_right}>{expiry10}</td>
                                    </tr>

                                </table>
                                </td>
                            </tr>
                            <tr>
                                <td style = {row_format_right}>
                                <h6 style={sub_header_style}><b>Errors and Omission</b></h6>
                                    <table style={table_style_sub}>

                                    <tr>
                                       <td style = {row_format}><b>Insurer:</b></td>
                                        <td style = {row_format_right}>{insurer11}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Policy Limit:</b></td>
                                        <td style = {row_format_right}>{policyLimit11}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Expiry:</b></td>
                                        <td style = {row_format_right}>{expiry11}</td>
                                    </tr>

                                </table>
                                </td>
                            </tr>
                            <tr>
                                <td style = {row_format_right}>
                                 <h6 style={sub_header_style}><b>Cancellation Insurance</b></h6>
                                    <table style={table_style_sub}>

                                    <tr>
                                       <td style = {row_format}><b>Insurer:</b></td>
                                        <td style = {row_format_right}>{insurer12}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Policy Limit:</b></td>
                                        <td style = {row_format_right}>{policyLimit12}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Expiry:</b></td>
                                        <td style = {row_format_right}>{expiry12}</td>
                                    </tr>

                                </table>
                                </td>
                            </tr>
                            <tr>
                                <td style = {row_format_right}>
                                <h6 style={sub_header_style}><b>Automobile Insurance</b></h6>
                                    <table style={table_style_sub}>

                                    <tr>
                                       <td style = {row_format}><b>Insurer:</b></td>
                                        <td style = {row_format_right}>{insurer13}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Policy Limit:</b></td>
                                        <td style = {row_format_right}>{policyLimit13}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Expiry:</b></td>
                                        <td style = {row_format_right}>{expiry13}</td>
                                    </tr>

                                </table>
                                </td>
                            </tr>
                            <tr>
                                <td style = {row_format_right}>
                                <h6 style={sub_header_style}><b>Umbrella Liability</b></h6>
                                    <table style={table_style_sub}>
                                    <tr>
                                       <td style = {row_format}><b>Insurer:</b></td>
                                        <td style = {row_format_right}>{insurer14}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Policy Limit:</b></td>
                                        <td style = {row_format_right}>{policyLimit14}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Expiry:</b></td>
                                        <td style = {row_format_right}>{expiry14}</td>
                                    </tr>

                                </table>
                                </td>
                            </tr>
                            <tr>

                                <td style = {row_format_right}>
                                <h6 style={sub_header_style}><b>Professional Liability</b></h6>
                                    <table style={table_style_sub}>

                                    <tr>
                                       <td style = {row_format}><b>Insurer:</b></td>
                                        <td style = {row_format_right}>{insurer15}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Policy Limit:</b></td>
                                        <td style = {row_format_right}>{policyLimit15}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Expiry:</b></td>
                                        <td style = {row_format_right}>{expiry15}</td>
                                    </tr>

                                </table>
                                </td>
                            </tr>
                        </table>

                    <h3 style={header_align}>Employee Information</h3>
                      <table style={table_style}>
                            <tr>
                                <td style = {row_format_right}>
                                 <h6 style={sub_header_style}><b>Employee hours Worked</b></h6>
                                    <table style={table_style_sub}>

                                    <tr>
                                       <td style = {row_format}><b>Current Year:</b></td>
                                        <td style = {row_format_right}>{EHWcurrentYear}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Previous Year 1</b></td>
                                        <td style = {row_format_right}>{EHWpreviousYear1}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Previous Year 2:</b></td>
                                        <td style = {row_format_right}>{EHWpreviousYear2}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Previous Year 3:</b></td>
                                        <td style = {row_format_right}>{EHWpreviousYear3}</td>
                                    </tr>

                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td style = {row_format_right}>
                                <h6 style={sub_header_style}><b>Fatalities</b></h6>
                                    <table style={table_style_sub}>

                                    <tr>
                                       <td style = {row_format}><b>Current Year:</b></td>
                                        <td style = {row_format_right}>{FcurrentYear}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Previous Year 1</b></td>
                                        <td style = {row_format_right}>{FpreviousYear1}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Previous Year 2:</b></td>
                                        <td style = {row_format_right}>{FpreviousYear2}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Previous Year 3:</b></td>
                                        <td style = {row_format_right}>{FpreviousYear3}</td>
                                    </tr>

                                </table>
                                </td>
                            </tr>
                            <tr>
                                <td style = {row_format_right}>
                                <h6 style={sub_header_style}><b>Lost Time Incidents</b></h6>
                                    <table style={table_style_sub}>

                                    <tr>
                                       <td style = {row_format}><b>Current Year:</b></td>
                                        <td style = {row_format_right}>{LTIcurrentYear}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Previous Year 1:</b></td>
                                        <td style = {row_format_right}>{LTIpreviousYear1}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Previous Year 2:</b></td>
                                        <td style = {row_format_right}>{LTIpreviousYear2}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Previous Year 3:</b></td>
                                        <td style = {row_format_right}>{LTIpreviousYear3}</td>
                                    </tr>

                                </table>
                                </td>
                            </tr>
                            <tr>
                                <td style = {row_format_right}>
                                <h6 style={sub_header_style}><b>Medical aid injuries</b></h6>
                                    <table style={table_style_sub}>

                                    <tr>
                                       <td style = {row_format}><b>Current Year:</b></td>
                                        <td style = {row_format_right}>{MAIcurrentYear}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Previous Year 1:</b></td>
                                        <td style = {row_format_right}>{MAIpreviousYear1}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Previous Year 2:</b></td>
                                        <td style = {row_format_right}>{MAIpreviousYear2}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Previous Year 3:</b></td>
                                        <td style = {row_format_right}>{MAIpreviousYear3}</td>
                                    </tr>

                                </table>
                                </td>
                            </tr>
                            <tr>
                                <td style = {row_format_right}>
                                <h6 style={sub_header_style}><b>Other Recordable Incidents</b></h6>
                                    <table style={table_style_sub}>

                                    <tr>
                                       <td style = {row_format}><b>Current Year:</b></td>
                                        <td style = {row_format_right}>{ORCcurrentYear}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Previous Year 1:</b></td>
                                        <td style = {row_format_right}>{ORCpreviousYear1}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Previous Year 2:</b></td>
                                        <td style = {row_format_right}>{ORCpreviousYear2}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Previous Year 3:</b></td>
                                        <td style = {row_format_right}>{ORCpreviousYear3}</td>
                                    </tr>

                                </table>
                                </td>
                            </tr>
                            <tr>
                                <td style = {row_format_right}>
                                <h6 style={sub_header_style}><b>Total recordable injuries - Fatalities + Lost time + Medical Aid + Restricted Duty Injuries</b></h6>
                                    <table style={table_style_sub}>

                                    <tr>
                                       <td style = {row_format}><b>Current Year:</b></td>
                                        <td style = {row_format_right}>{TRIcurrentYear}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Previous Year 1:</b></td>
                                        <td style = {row_format_right}>{TRIpreviousYear1}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Previous Year 2:</b></td>
                                        <td style = {row_format_right}>{TRIpreviousYear2}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Previous Year 3:</b></td>
                                        <td style = {row_format_right}>{TRIpreviousYear3}</td>
                                    </tr>

                                </table>
                                </td>
                            </tr>
                        </table>

                    <h3 style={header_align}>Workers Compensation</h3>
                      <table style={table_style}>
                          <tr>
                            <h6 style={sub_header_style}><b>General</b></h6>
                            <table style={table_style_sub}>

                            <tr>
                            <td style = {row_format}><b>Industry Code:</b></td>
                            <td style = {row_format_right}>{industryCode}</td>
                            </tr>
                          <tr>
                            <td style = {row_format}><b>Industry Classification:</b></td>
                            <td style = {row_format_right}>{industryClassification}</td>
                          </tr>

                          </table>
                          </tr>
                            <tr>
                                <td style = {row_format_right}>
                                <h6 style={sub_header_style}><b>Industry Rate</b></h6>
                                    <table style={table_style_sub}>

                                    <tr>
                                       <td style = {row_format}><b>Current Year:</b></td>
                                        <td style = {row_format_right}>{IRcurrentYear}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Previous Year 1</b></td>
                                        <td style = {row_format_right}>{IRpreviousYear1}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Previous Year 2:</b></td>
                                        <td style = {row_format_right}>{IRpreviousYear2}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Previous Year 3:</b></td>
                                        <td style = {row_format_right}>{IRpreviousYear3}</td>
                                    </tr>

                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td style = {row_format_right}>
                                <h6 style={sub_header_style}><b>Proponent Rate</b></h6>
                                    <table style={table_style_sub}>

                                    <tr>
                                       <td style = {row_format}><b>Current Year:</b></td>
                                        <td style = {row_format_right}>{PRcurrentYear}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Previous Year 1</b></td>
                                        <td style = {row_format_right}>{PRpreviousYear1}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Previous Year 2:</b></td>
                                        <td style = {row_format_right}>{PRpreviousYear2}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Previous Year 3:</b></td>
                                        <td style = {row_format_right}>{PRpreviousYear3}</td>
                                    </tr>

                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td style = {row_format_right}>
                                 <h6 style={sub_header_style}><b>% Discount</b></h6>
                                    <table style={table_style_sub}>

                                    <tr>
                                       <td style = {row_format}><b>Current Year:</b></td>
                                        <td style = {row_format_right}>{PDcurrentYear}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Previous Year 1</b></td>
                                        <td style = {row_format_right}>{PDpreviousYear1}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Previous Year 2:</b></td>
                                        <td style = {row_format_right}>{PDpreviousYear2}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Previous Year 3:</b></td>
                                        <td style = {row_format_right}>{PDpreviousYear3}</td>
                                    </tr>

                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td style = {row_format_right}>
                                <h6 style={sub_header_style}><b>% Surcharge</b></h6>
                                    <table style={table_style_sub}>

                                    <tr>
                                       <td style = {row_format}><b>Current Year:</b></td>
                                        <td style = {row_format_right}>{PScurrentYear}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Previous Year 1</b></td>
                                        <td style = {row_format_right}>{PSpreviousYear1}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Previous Year 2:</b></td>
                                        <td style = {row_format_right}>{PSpreviousYear2}</td>
                                    </tr>
                                    <tr>
                                        <td style = {row_format}><b>Previous Year 3:</b></td>
                                        <td style = {row_format_right}>{PSpreviousYear3}</td>
                                    </tr>

                                    </table>
                                </td>
                            </tr>
              </table>

              <h3 style={header_align}>Additional Information</h3>
              <table style={table_style2}>
                    <tr>
                        <td style={row_format_additional}><b>Categories of Service:</b></td>
                        <td style={row_format_right}>{cat2}</td></tr>

                    <tr>
                        <td style = {row_format_additional}><b>Specialities:</b></td>
                        <td style = {row_format_right}>{spec2}</td>
                    </tr>
                    <tr>
                        <td style = {row_format_additional}><b>Drug and Alcohol policy:</b></td>
                        <td style = {row_format_right}>{drugPolicy}</td>
                    </tr>
                    <tr>
                        <td style = {row_format_additional}><b>Subcontractor OH&S Evaluation:</b></td>
                        <td style = {row_format_right}>{subcontractors}</td>
                    </tr>
                    <tr>
                        <td style = {row_format_additional}><b>OH&S Stop Work Order Recieved:</b></td>
                        <td style = {row_format_right}>{stopWorkOrder}</td>
                    </tr>
                    <tr>
                        <td style = {row_format_additional}><b>HSE related Judgements:</b></td>
                        <td style = {row_format_right}>{HSEjudge}</td>
                    </tr>
              </table>

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
        } else if (role == 2) { // additional resource

          var website = user.ad[key_name].website;
          var email = user.ad[key_name].email;
          var password = user.ad[key_name].password;
          var role = user.ad[key_name].role;
          return (
            <div>

            <LearnHeader/>
            <div className="learn-content mdl-typography--text-center" >
                <div className="grid">
                  <div className="card mdl-shadow--2dp">
                    <div className="card__title mdl-color--indigo mdl-color-text--white" style={{width: '80%', margin: 'auto'}}>
                      <h4 className="card__title-text">Additional User Information</h4>
                    </div>

                    <div className="card__supporting-text mdl-color-text--white-600" id="messagesDiv" style={info_div_style}>

                        <h3 style={header_align}>Details</h3>
                        <table style={table_style}>
                          <tr>
                        <td style = {row_format}><b>Website:</b></td>
                        <td style = {row_format_right}><a href={website} link="red" target="_blank">{website}</a></td>
                          </tr>
                          <tr>
                        <td style = {row_format}><b>Email:</b></td>
                        <td style = {row_format_right}>{email}</td>
                          </tr>
                          <tr>
                        <td style = {row_format}><b>Password:</b></td>
                        <td style = {row_format_right}>{password}</td>
                          </tr>
                        </table>

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
