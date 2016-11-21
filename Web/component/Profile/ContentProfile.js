import React, { Component } from 'react'
import {Textfield, Content, Card,CardTitle,List,ListItem,ListItemContent,Layout,CardActions,Button} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import { connect } from "react-redux"


import "../../extra/material.js"
import ContentProfileUpload from "./ContentProfileUpload.js"
import ContentCourseDisplay from "./ContentCourseDisplay.js"
import ContentCourseUpdate from "./ContentCourseUpdate.js"
import {updateProfile,getCurrentUser,logInUser} from "../Actions/userActions.js"

@connect((store) => {
  return {
    user: store.user,
    profile: store.profile
  };
})/*dont add semicolon here!*/


class ContentProfile extends Component {
    /**
     * Get current user
     */
    getCurrentUser() {
        this.props.dispatch(getCurrentUser())
    }
    /**
     * Log in user
     */ 
    logInUser(user) {
        this.props.dispatch(logInUser(user))
    }
    
    /**
     * update profile
     * @param {user} user updated user file
     */
    updateProfile(user) {
        this.props.dispatch(updateProfile(user));
        this.getCurrentUser()
    } 
    
    /**
     * called before dom elements are mounted, to get current user
     */
    componentWillMount(){
        this.getCurrentUser()
    }
    
    /**
     * called after dom elements are mounted, set all the text on textfields
     */
    componentDidUpdate(){
        
        const {user,profile} = this.props
        if(profile.menu==0){
        if(!user.isLoggedIn){
            return
        }
        if(user.profile.role==1){
        document.getElementById("legalEntity").value=user.profile.legalEntity;
        document.getElementById("operatingName").value=user.profile.operatingName;
        document.getElementById("address1").value=user.profile.address1;
        document.getElementById("address2").value=user.profile.address2;
        document.getElementById("city").value=user.profile.city;
        document.getElementById("province").value=user.profile.province;
        document.getElementById("country").value=user.profile.country;
        document.getElementById("postalCode").value=user.profile.postalCode;
        document.getElementById("phone").value=user.profile.phone;
        document.getElementById("fax").value=user.profile.fax;
        document.getElementById("owner1Name").value=user.profile.owner1Name;
        document.getElementById("owner1Pos").value=user.profile.owner1Pos;
        document.getElementById("owner2Name").value=user.profile.owner2Name;
        document.getElementById("owner2Pos").value=user.profile.owner2Pos;
        document.getElementById("owner3Name").value=user.profile.owner3Name;
        document.getElementById("owner3Pos").value=user.profile.owner3Pos;
        document.getElementById("owner4Name").value=user.profile.owner4Name;
        document.getElementById("owner4Pos").value=user.profile.owner4Pos;
        document.getElementById("owner5Name").value=user.profile.owner5Name;
        document.getElementById("owner5Pos").value=user.profile.owner5Pos;
        
        document.getElementById("natureBusiness").value=user.profile.natureBusiness;
        document.getElementById("timeBusiness").value=user.profile.timeBusiness;
        document.getElementById("proAffiliation").value=user.profile.proAffiliation;
        if(user.profile.report=="enclosed"){
            document.getElementById("reportEnclosed").checked=true;
        }else if(user.profile.report=="not available"){
            document.getElementById("reportNotAvailable").checked=true;
        }else if(user.profile.report=="not applicable"){
            document.getElementById("reportNotApplicable").checked=true;
        }
        
        document.getElementById("bank").value=user.profile.bank;
        document.getElementById("bankLocation").value=user.profile.bankLocation;
        document.getElementById("bonding").value=user.profile.bonding;
        document.getElementById("bondingLocation").value=user.profile.bondingLocation;
        document.getElementById("insuranceCompany").value=user.profile.insuranceCompany;
        document.getElementById("insuranceLocation").value=user.profile.insuranceLocation;
        document.getElementById("bondingLimitDate").value=user.profile.bondingLimitDate;
        document.getElementById("bondingLimit").value=user.profile.bondingLimit;
        document.getElementById("grossBus").value=user.profile.grossBus;
        document.getElementById("grossBusYear").value=user.profile.grossBusYear;
        if(user.profile.bankruptcy=="yes"){
            document.getElementById("bankYes").checked=true;
        }else if(user.profile.bankruptcy=="no"){
            document.getElementById("bankNo").checked=true;
        }
        
        document.getElementById("client1Service").value=user.profile.client1Service;
        document.getElementById("industryCode").value=user.profile.industryCode;
        document.getElementById("industryClassification").value=user.profile.industryClassification;
            
        document.getElementById("numEmployees").value=user.profile.numEmployees;
        document.getElementById("AD1address1").value=user.profile.AD1address1;
        document.getElementById("AD1address2").value=user.profile.AD1address2;
        document.getElementById("AD1city").value=user.profile.AD1city;
        document.getElementById("AD1province").value=user.profile.AD1province;
        document.getElementById("AD1country").value=user.profile.AD1country;
        document.getElementById("AD1postalCode").value=user.profile.AD1postalCode;
        document.getElementById("AD1phone").value=user.profile.AD1phone;
        document.getElementById("AD2address1").value=user.profile.AD2address1;
        document.getElementById("AD2address2").value=user.profile.AD2address2;
        document.getElementById("AD2city").value=user.profile.AD2city;
        document.getElementById("AD2province").value=user.profile.AD2province;
        document.getElementById("AD2country").value=user.profile.AD2country;
        document.getElementById("AD2postalCode").value=user.profile.AD2postalCode;
        document.getElementById("AD2phone").value=user.profile.AD2phone;
        document.getElementById("AD3address1").value=user.profile.AD3address1;
        document.getElementById("AD3address2").value=user.profile.AD3address2;
        document.getElementById("AD3city").value=user.profile.AD3city;
        document.getElementById("AD3province").value=user.profile.AD3province;
        document.getElementById("AD3country").value=user.profile.AD3country;
        document.getElementById("AD3postalCode").value=user.profile.AD3postalCode;
        document.getElementById("AD3phone").value=user.profile.AD3phone;
        
        document.getElementById("categories").value=user.profile.categories;
        document.getElementById("specialties").value=user.profile.specialties;
        
        document.getElementById("client1").value=user.profile.client1;
        document.getElementById("client1Location").value=user.profile.client1Location;
        document.getElementById("client1Phone").value=user.profile.client1Phone;
        document.getElementById("client1Email").value=user.profile.client1Email;
        document.getElementById("client1Service").value=user.profile.client1Service;
        document.getElementById("client2").value=user.profile.client2;
        document.getElementById("client2Location").value=user.profile.client2Location;
        document.getElementById("client2Phone").value=user.profile.client2Phone;
        document.getElementById("client2Email").value=user.profile.client2Email;
        document.getElementById("client2Service").value=user.profile.client2Service;
        document.getElementById("client3").value=user.profile.client3;
        document.getElementById("client3Location").value=user.profile.client3Location;
        document.getElementById("client3Phone").value=user.profile.client3Phone;
        document.getElementById("client3Email").value=user.profile.client3Email;
        document.getElementById("client3Service").value=user.profile.client3Service;
        document.getElementById("client4").value=user.profile.client4;
        document.getElementById("client4Location").value=user.profile.client4Location;
        document.getElementById("client4Phone").value=user.profile.client4Phone;
        document.getElementById("client4Email").value=user.profile.client4Email;
        document.getElementById("client4Service").value=user.profile.client4Service;
            
        document.getElementById("licence1").value=user.profile.licence1;
        document.getElementById("licence1Location").value=user.profile.licence1Location;
        document.getElementById("licence2").value=user.profile.licence2;
        document.getElementById("licence2Location").value=user.profile.licence2Location;
        document.getElementById("licence3").value=user.profile.licence3;
        document.getElementById("licence3Location").value=user.profile.licence3Location;
        document.getElementById("licence4").value=user.profile.licence4;
        document.getElementById("licence4Location").value=user.profile.licence4Location;
        document.getElementById("licence5").value=user.profile.licence5;
        document.getElementById("licence5Location").value=user.profile.licence5Location;
        
        document.getElementById("insurer1").value=user.profile.insurer1;
        document.getElementById("policyLimit1").value=user.profile.policyLimit1;
        document.getElementById("expiry1").value=user.profile.expiry1;
        document.getElementById("insurer2").value=user.profile.insurer2;
        document.getElementById("policyLimit2").value=user.profile.policyLimit2;
        document.getElementById("expiry2").value=user.profile.expiry2;
        document.getElementById("insurer3").value=user.profile.insurer3;
        document.getElementById("policyLimit3").value=user.profile.policyLimit3;
        document.getElementById("expiry3").value=user.profile.expiry3;
        document.getElementById("insurer4").value=user.profile.insurer4;
        document.getElementById("policyLimit4").value=user.profile.policyLimit4;
        document.getElementById("expiry4").value=user.profile.expiry4;
        document.getElementById("insurer5").value=user.profile.insurer5;
        document.getElementById("policyLimit5").value=user.profile.policyLimit5;
        document.getElementById("expiry5").value=user.profile.expiry5;
        document.getElementById("insurer6").value=user.profile.insurer6;
        document.getElementById("policyLimit6").value=user.profile.policyLimit6;
        document.getElementById("expiry6").value=user.profile.expiry6;
        document.getElementById("insurer7").value=user.profile.insurer7;
        document.getElementById("policyLimit7").value=user.profile.policyLimit7;
        document.getElementById("expiry7").value=user.profile.expiry7;
        document.getElementById("insurer8").value=user.profile.insurer8;
        document.getElementById("policyLimit8").value=user.profile.policyLimit8;
        document.getElementById("expiry8").value=user.profile.expiry8;
        document.getElementById("insurer9").value=user.profile.insurer9;
        document.getElementById("policyLimit9").value=user.profile.policyLimit9;
        document.getElementById("expiry9").value=user.profile.expiry9;
        document.getElementById("insurer10").value=user.profile.insurer10;
        document.getElementById("policyLimit10").value=user.profile.policyLimit10;
        document.getElementById("expiry10").value=user.profile.expiry10;
        document.getElementById("insurer11").value=user.profile.insurer11;
        document.getElementById("policyLimit11").value=user.profile.policyLimit11;
        document.getElementById("expiry11").value=user.profile.expiry11;
        document.getElementById("insurer12").value=user.profile.insurer12;
        document.getElementById("policyLimit12").value=user.profile.policyLimit12;
        document.getElementById("expiry12").value=user.profile.expiry12;
        document.getElementById("insurer13").value=user.profile.insurer13;
        document.getElementById("policyLimit13").value=user.profile.policyLimit13;
        document.getElementById("expiry13").value=user.profile.expiry13;
        document.getElementById("insurer14").value=user.profile.insurer14;
        document.getElementById("policyLimit14").value=user.profile.policyLimit14;
        document.getElementById("expiry14").value=user.profile.expiry14;
        document.getElementById("insurer15").value=user.profile.insurer15;
        document.getElementById("policyLimit15").value=user.profile.policyLimit15;
        document.getElementById("expiry15").value=user.profile.expiry15;
        
        document.getElementById("EHWcurrentYear").value=user.profile.EHWcurrentYear;
        document.getElementById("EHWpreviousYear1").value=user.profile.EHWpreviousYear1;
        document.getElementById("EHWpreviousYear2").value=user.profile.EHWpreviousYear2;
        document.getElementById("EHWpreviousYear3").value=user.profile.EHWpreviousYear3;
        document.getElementById("FcurrentYear").value=user.profile.FcurrentYear;
        document.getElementById("FpreviousYear1").value=user.profile.FpreviousYear1;
        document.getElementById("FpreviousYear2").value=user.profile.FpreviousYear2;
        document.getElementById("FpreviousYear3").value=user.profile.FpreviousYear3;
        document.getElementById("LTIcurrentYear").value=user.profile.LTIcurrentYear;
        document.getElementById("LTIpreviousYear1").value=user.profile.LTIpreviousYear1;
        document.getElementById("LTIpreviousYear2").value=user.profile.LTIpreviousYear2;
        document.getElementById("LTIpreviousYear3").value=user.profile.LTIpreviousYear3;
        document.getElementById("MAIcurrentYear").value=user.profile.MAIcurrentYear;
        document.getElementById("MAIpreviousYear1").value=user.profile.MAIpreviousYear1;
        document.getElementById("MAIpreviousYear2").value=user.profile.MAIpreviousYear2;
        document.getElementById("MAIpreviousYear3").value=user.profile.MAIpreviousYear3;
        document.getElementById("ORCcurrentYear").value=user.profile.ORCcurrentYear;
        document.getElementById("ORCpreviousYear1").value=user.profile.ORCpreviousYear1;
        document.getElementById("ORCpreviousYear2").value=user.profile.ORCpreviousYear2;
        document.getElementById("ORCpreviousYear3").value=user.profile.ORCpreviousYear3;
        document.getElementById("TRIcurrentYear").value=user.profile.TRIcurrentYear;
        document.getElementById("TRIpreviousYear1").value=user.profile.TRIpreviousYear1;
        document.getElementById("TRIpreviousYear2").value=user.profile.TRIpreviousYear2;
        document.getElementById("TRIpreviousYear3").value=user.profile.TRIpreviousYear3;
        document.getElementById("IRcurrentYear").value=user.profile.IRcurrentYear;
        document.getElementById("IRpreviousYear1").value=user.profile.IRpreviousYear1;
        document.getElementById("IRpreviousYear2").value=user.profile.IRpreviousYear2;
        document.getElementById("IRpreviousYear3").value=user.profile.IRpreviousYear3;
        document.getElementById("PRcurrentYear").value=user.profile.PRcurrentYear;
        document.getElementById("PRpreviousYear1").value=user.profile.PRpreviousYear1;
        document.getElementById("PRpreviousYear2").value=user.profile.PRpreviousYear2;
        document.getElementById("PRpreviousYear3").value=user.profile.PRpreviousYear3;
        document.getElementById("PDcurrentYear").value=user.profile.PDcurrentYear;
        document.getElementById("PDpreviousYear1").value=user.profile.PDpreviousYear1;
        document.getElementById("PDpreviousYear2").value=user.profile.PDpreviousYear2;
        document.getElementById("PDpreviousYear3").value=user.profile.PDpreviousYear3;
        document.getElementById("PScurrentYear").value=user.profile.PScurrentYear;
        document.getElementById("PSpreviousYear1").value=user.profile.PSpreviousYear1;
        document.getElementById("PSpreviousYear2").value=user.profile.PSpreviousYear2;
        document.getElementById("PSpreviousYear3").value=user.profile.PSpreviousYear3;
        
        document.getElementById("drugPolicy").value=user.profile.drugPolicy;
        document.getElementById("subcontractors").value=user.profile.subcontractors;
        document.getElementById("stopWorkOrder").value=user.profile.stopWorkOrder;
        document.getElementById("adminContact").value=user.profile.adminContact;
        document.getElementById("technicalContact").value=user.profile.technicalContact;
        if(user.profile.ISnumber=="yes"){
            document.getElementById("ISnumberYes").checked=true;
        }else if(user.profile.ISnumber=="no"){
            document.getElementById("ISnumberNo").checked=true;
        }
        document.getElementById("email").value=user.profile.email;
        document.getElementById("password").value=user.profile.password;
        document.getElementById("website").value=user.profile.website;
        }if(user.profile.role==0){
            document.getElementById("legalEntity").value=user.profile.legalEntity;
            document.getElementById("operatingName").value=user.profile.operatingName;
            document.getElementById("address1").value=user.profile.address1;
            document.getElementById("address2").value=user.profile.address2;
            document.getElementById("city").value=user.profile.city;
            document.getElementById("province").value=user.profile.province;
            document.getElementById("country").value=user.profile.country;
            document.getElementById("postalCode").value=user.profile.postalCode;
            document.getElementById("phone").value=user.profile.phone;
            document.getElementById("fax").value=user.profile.fax;
            document.getElementById("email").value=user.profile.email;
            document.getElementById("adminContact").value=user.profile.adminContact;
            document.getElementById("technicalContact").value=user.profile.technicalContact;
            document.getElementById("gstReg").value=user.profile.gstReg;
            document.getElementById("billAddress1").value=user.profile.billAddress1;
            document.getElementById("billAddress2").value=user.profile.billAddress2;
            document.getElementById("billCity").value=user.profile.billCity;
            document.getElementById("billProvince").value=user.profile.billProvince;
            document.getElementById("billCountry").value=user.profile.billCountry;
            document.getElementById("billPostalCode").value=user.profile.billPostalCode;
            document.getElementById("accntRec").value=user.profile.accntRec;
            document.getElementById("bank").value=user.profile.bank;
            
            if(user.profile.ISnumber=="yes"){
                document.getElementById("ISnumberYes").checked=true
            }else{
                document.getElementById("ISnumberNo").checked=true
            }
            
            document.getElementById("website").value=user.profile.website;
            document.getElementById("password").value=user.profile.password;
            
            if(user.profile.jointVenture=="yes"){
                document.getElementById("jointVentureYes").checked=true
            }else{
                document.getElementById("jointVentureNo").checked=true
            }

            document.getElementById("categories").value=user.profile.categories;
    
        }
        
    }
    }
    
    
    
    requestUpdate() {
    const {user} = this.props
    if(user.role==1){
    // part A
    var legalEntity = document.getElementById("legalEntity").value;
    var operatingName = document.getElementById("operatingName").value;
    var address1 = document.getElementById("address1").value;
    var address2 = document.getElementById("address2").value;
    var city = document.getElementById("city").value;
    var province = document.getElementById("province").value;
    var country = document.getElementById("country").value;
    var postalCode = document.getElementById("postalCode").value;
    var phone = document.getElementById("phone").value;
    var fax = document.getElementById("fax").value;
    var owner1Name = document.getElementById("owner1Name").value;
    var owner1Pos = document.getElementById("owner1Pos").value;
    var owner2Name = document.getElementById("owner2Name").value;
    var owner2Pos = document.getElementById("owner2Pos").value;
    var owner3Name = document.getElementById("owner3Name").value;
    var owner3Pos = document.getElementById("owner3Pos").value;
    var owner4Name = document.getElementById("owner4Name").value;
    var owner4Pos = document.getElementById("owner4Pos").value;
    var owner5Name = document.getElementById("owner5Name").value;
    var owner5Pos = document.getElementById("owner5Pos").value;
    var natureBusiness = document.getElementById("natureBusiness").value;
    var timeBusiness = document.getElementById("timeBusiness").value;

    var proAffiliation = document.getElementById("proAffiliation").value;
    var report = "";
    if(document.getElementById("reportEnclosed").checked) {
        report = "enclosed"
    } else if (document.getElementById("reportNotAvailable").checked) {
        report = "not available"
    } else if (document.getElementById("reportNotApplicable").checked) {
        report = "not applicable"
    }
    var bank = document.getElementById("bank").value;
    var bankLocation = document.getElementById("bankLocation").value;
    var bonding = document.getElementById("bonding").value;
    var bondingLocation = document.getElementById("bondingLocation").value;
    var insuranceCompany = document.getElementById("insuranceCompany").value;
    var insuranceLocation = document.getElementById("insuranceLocation").value;
    var bondingLimitDate = document.getElementById("bondingLimitDate").value;
    var bondingLimit = document.getElementById("bondingLimit").value;
    var grossBus = document.getElementById("grossBus").value;
    var grossBusYear = document.getElementById("grossBusYear").value;
    var bankruptcy = "";
    if(document.getElementById("bankYes").checked) {
        bankruptcy = "yes"
    } else if (document.getElementById("bankNo").checked) {
        bankruptcy = "no"
    }
    var numEmployees = document.getElementById("numEmployees").value;
    var AD1address1 = document.getElementById("AD1address1").value; var AD1address2 = document.getElementById("AD1address2").value; var AD1city = document.getElementById("AD1city").value; var AD1province = document.getElementById("AD1province").value;
    var AD1country = document.getElementById("AD1country").value; var AD1postalCode = document.getElementById("AD1postalCode").value; var AD1phone = document.getElementById("AD1phone").value;
    var AD2address1 = document.getElementById("AD2address1").value; var AD2address2 = document.getElementById("AD2address2").value; var AD2city = document.getElementById("AD2city").value; var AD2province = document.getElementById("AD2province").value;
    var AD2country = document.getElementById("AD2country").value; var AD2postalCode = document.getElementById("AD2postalCode").value; var AD2phone = document.getElementById("AD2phone").value;
    var AD3address1 = document.getElementById("AD3address1").value; var AD3address2 = document.getElementById("AD3address2").value; var AD3city = document.getElementById("AD3city").value; var AD3province = document.getElementById("AD3province").value;
    var AD3country = document.getElementById("AD3country").value; var AD3postalCode = document.getElementById("AD3postalCode").value; var AD3phone = document.getElementById("AD3phone").value;

    var categories = document.getElementById("categories").value;
    var specialties = document.getElementById("specialties").value;

    var client1 = document.getElementById("client1").value; var client1Location = document.getElementById("client1Location").value; var client1Phone = document.getElementById("client1Phone").value; var client1Email = document.getElementById("client1Email").value; var client1Service = document.getElementById("client1Service").value;
    var client2 = document.getElementById("client2").value; var client2Location = document.getElementById("client2Location").value; var client2Phone = document.getElementById("client2Phone").value; var client2Email = document.getElementById("client2Email").value; var client2Service = document.getElementById("client2Service").value;
    var client3 = document.getElementById("client3").value; var client3Location = document.getElementById("client3Location").value; var client3Phone = document.getElementById("client3Phone").value; var client3Email = document.getElementById("client3Email").value; var client3Service = document.getElementById("client3Service").value;
    var client4 = document.getElementById("client4").value; var client4Location = document.getElementById("client4Location").value; var client4Phone = document.getElementById("client4Phone").value; var client4Email = document.getElementById("client4Email").value; var client4Service = document.getElementById("client4Service").value;
    var industryClassification = document.getElementById("industryClassification").value; 
    var industryCode = document.getElementById("industryCode").value; 

    
    var licence1 = document.getElementById("licence1").value; var licence1Location = document.getElementById("licence1Location").value;
    var licence2 = document.getElementById("licence2").value; var licence2Location = document.getElementById("licence2Location").value;
    var licence3 = document.getElementById("licence3").value; var licence3Location = document.getElementById("licence3Location").value;
    var licence4 = document.getElementById("licence4").value; var licence4Location = document.getElementById("licence4Location").value;
    var licence5 = document.getElementById("licence5").value; var licence5Location = document.getElementById("licence5Location").value;
        
    var insurer1 = document.getElementById("insurer1").value; var policyLimit1 = document.getElementById("policyLimit1").value; var expiry1 = document.getElementById("expiry1").value;
    var insurer2 = document.getElementById("insurer2").value; var policyLimit2 = document.getElementById("policyLimit2").value; var expiry2 = document.getElementById("expiry2").value;
    var insurer3 = document.getElementById("insurer3").value; var policyLimit3 = document.getElementById("policyLimit3").value; var expiry3 = document.getElementById("expiry3").value;
    var insurer4 = document.getElementById("insurer4").value; var policyLimit4 = document.getElementById("policyLimit4").value; var expiry4 = document.getElementById("expiry4").value;
    var insurer5 = document.getElementById("insurer5").value; var policyLimit5 = document.getElementById("policyLimit5").value; var expiry5 = document.getElementById("expiry5").value;
    var insurer6 = document.getElementById("insurer6").value; var policyLimit6 = document.getElementById("policyLimit6").value; var expiry6 = document.getElementById("expiry6").value;
    var insurer7 = document.getElementById("insurer7").value; var policyLimit7 = document.getElementById("policyLimit7").value; var expiry7 = document.getElementById("expiry7").value;
    var insurer8 = document.getElementById("insurer8").value; var policyLimit8 = document.getElementById("policyLimit8").value; var expiry8 = document.getElementById("expiry8").value;
    var insurer9 = document.getElementById("insurer9").value; var policyLimit9 = document.getElementById("policyLimit9").value; var expiry9 = document.getElementById("expiry9").value;
    var insurer10 = document.getElementById("insurer10").value; var policyLimit10 = document.getElementById("policyLimit10").value; var expiry10 = document.getElementById("expiry10").value;
    var insurer11 = document.getElementById("insurer11").value; var policyLimit11 = document.getElementById("policyLimit11").value; var expiry11 = document.getElementById("expiry11").value;
    var insurer12 = document.getElementById("insurer12").value; var policyLimit12 = document.getElementById("policyLimit12").value; var expiry12 = document.getElementById("expiry12").value;
    var insurer13 = document.getElementById("insurer13").value; var policyLimit13 = document.getElementById("policyLimit13").value; var expiry13 = document.getElementById("expiry13").value;
    var insurer14 = document.getElementById("insurer14").value; var policyLimit14 = document.getElementById("policyLimit14").value; var expiry14 = document.getElementById("expiry14").value;
    var insurer15 = document.getElementById("insurer15").value; var policyLimit15 = document.getElementById("policyLimit15").value; var expiry15 = document.getElementById("expiry15").value;

    var EHWcurrentYear = document.getElementById("EHWcurrentYear").value; var EHWpreviousYear1 = document.getElementById("EHWpreviousYear1").value; var EHWpreviousYear2 = document.getElementById("EHWpreviousYear2").value; var EHWpreviousYear3 = document.getElementById("EHWpreviousYear3").value;
    var FcurrentYear = document.getElementById("FcurrentYear").value; var FpreviousYear1 = document.getElementById("FpreviousYear1").value; var FpreviousYear2 = document.getElementById("FpreviousYear2").value; var FpreviousYear3 = document.getElementById("FpreviousYear3").value;
    var LTIcurrentYear = document.getElementById("LTIcurrentYear").value; var LTIpreviousYear1 = document.getElementById("LTIpreviousYear1").value; var LTIpreviousYear2 = document.getElementById("LTIpreviousYear2").value; var LTIpreviousYear3 = document.getElementById("LTIpreviousYear3").value;
    var MAIcurrentYear = document.getElementById("MAIcurrentYear").value; var MAIpreviousYear1 = document.getElementById("MAIpreviousYear1").value; var MAIpreviousYear2 = document.getElementById("MAIpreviousYear2").value; var MAIpreviousYear3 = document.getElementById("MAIpreviousYear3").value;
    var ORCcurrentYear = document.getElementById("ORCcurrentYear").value; var ORCpreviousYear1 = document.getElementById("ORCpreviousYear1").value; var ORCpreviousYear2 = document.getElementById("ORCpreviousYear2").value; var ORCpreviousYear3 = document.getElementById("ORCpreviousYear3").value;
    var TRIcurrentYear = document.getElementById("TRIcurrentYear").value; var TRIpreviousYear1 = document.getElementById("TRIpreviousYear1").value; var TRIpreviousYear2 = document.getElementById("TRIpreviousYear2").value; var TRIpreviousYear3 = document.getElementById("TRIpreviousYear3").value;

    var IRcurrentYear = document.getElementById("IRcurrentYear").value; var IRpreviousYear1 = document.getElementById("IRpreviousYear1").value; var IRpreviousYear2 = document.getElementById("IRpreviousYear2").value; var IRpreviousYear3 = document.getElementById("IRpreviousYear3").value;
    var PRcurrentYear = document.getElementById("PRcurrentYear").value; var PRpreviousYear1 = document.getElementById("PRpreviousYear1").value; var PRpreviousYear2 = document.getElementById("PRpreviousYear2").value; var PRpreviousYear3 = document.getElementById("PRpreviousYear3").value;
    var PDcurrentYear = document.getElementById("PDcurrentYear").value; var PDpreviousYear1 = document.getElementById("PDpreviousYear1").value; var PDpreviousYear2 = document.getElementById("PDpreviousYear2").value; var PDpreviousYear3 = document.getElementById("PDpreviousYear3").value;
    var PScurrentYear = document.getElementById("PScurrentYear").value; var PSpreviousYear1 = document.getElementById("PSpreviousYear1").value; var PSpreviousYear2 = document.getElementById("PSpreviousYear2").value; var PSpreviousYear3 = document.getElementById("PSpreviousYear3").value;

    var drugPolicy = document.getElementById("drugPolicy").value;
    var subcontractors = document.getElementById("subcontractors").value;
    var stopWorkOrder = document.getElementById("stopWorkOrder").value;


    var adminContact = document.getElementById("adminContact").value;
    var technicalContact = document.getElementById("technicalContact").value;

    var ISnumber = " ";
    if(document.getElementById("ISnumberYes").checked) {
        ISnumber = "yes"
    } else if (document.getElementById("ISnumberNo").checked) {
        ISnumber = "no"
    }

    var website = document.getElementById("website").value;
    
    var role=user.role;
    
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;    
    var userUpdate = {email, password, legalEntity, operatingName, address1, address2,
      city, province, country, postalCode, phone, fax, owner1Name, owner1Pos, owner2Name, owner2Pos, owner3Name, owner3Pos, owner4Name, owner4Pos, owner5Name, owner5Pos, natureBusiness, timeBusiness, proAffiliation, report,
      adminContact, technicalContact, ISnumber, website, bank, bankLocation, bonding, bondingLocation, insuranceCompany, insuranceLocation,
      bondingLimitDate, bondingLimit, grossBus, grossBusYear, bankruptcy, numEmployees,
      AD1address1, AD1address2, AD1city, AD1province, AD1country, AD1postalCode, AD1phone, AD2address1, AD2address2, AD2city, AD2province, AD2country, AD2postalCode, AD2phone, AD3address1, AD3address2, AD3city, AD3province, AD3country, AD3postalCode, AD3phone,
      categories, specialties, client1, client1Location, client1Phone, client1Email, client1Service, client2, client2Location, client2Phone, client2Email, client2Service,
      client3, client3Location, client3Phone, client3Email, client3Service, client4, client4Location, client4Phone, client4Email, client4Service, licence1, licence1Location, licence2, licence2Location, licence3, licence3Location, licence4, licence4Location, licence5, licence5Location,
      insurer1, policyLimit1, expiry1, insurer2, policyLimit2, expiry2, insurer3, policyLimit3, expiry3, insurer4, policyLimit4, expiry4, insurer5, policyLimit5, expiry5,
      insurer6, policyLimit6, expiry6, insurer7, policyLimit7, expiry7, insurer8, policyLimit8, expiry8, insurer9, policyLimit9, expiry9, insurer10, policyLimit10, expiry10,
      insurer11, policyLimit11, expiry11, insurer12, policyLimit12, expiry12, insurer13, policyLimit13, expiry13, insurer14, policyLimit14, expiry14, insurer15, policyLimit15, expiry15,
      EHWcurrentYear, EHWpreviousYear1, EHWpreviousYear2, EHWpreviousYear3, FcurrentYear, FpreviousYear1, FpreviousYear2, FpreviousYear3, LTIcurrentYear, LTIpreviousYear1, LTIpreviousYear2, LTIpreviousYear3,
      MAIcurrentYear, MAIpreviousYear1, MAIpreviousYear2, MAIpreviousYear3, ORCcurrentYear, ORCpreviousYear1, ORCpreviousYear2, ORCpreviousYear3, TRIcurrentYear, TRIpreviousYear1, TRIpreviousYear2, TRIpreviousYear3,
      industryCode, industryClassification, IRcurrentYear, IRpreviousYear1, IRpreviousYear2, IRpreviousYear3, PRcurrentYear, PRpreviousYear1, PRpreviousYear2, PRpreviousYear3,
      PDcurrentYear, PDpreviousYear1, PDpreviousYear2, PDpreviousYear3, PScurrentYear, PSpreviousYear1, PSpreviousYear2, PSpreviousYear3, drugPolicy, subcontractors, stopWorkOrder,role
      }
    this.updateProfile(userUpdate);
    }else if(user.role==0){
    var legalEntity = document.getElementById("legalEntity").value;
    var operatingName = document.getElementById("operatingName").value;
    var address1 = document.getElementById("address1").value;
    var address2 = document.getElementById("address2").value;
    var city = document.getElementById("city").value;
    var province = document.getElementById("province").value;
    var country = document.getElementById("country").value;
    var postalCode = document.getElementById("postalCode").value;
    var phone = document.getElementById("phone").value;
    var fax = document.getElementById("fax").value;
    var email = document.getElementById("email").value;
    var adminContact = document.getElementById("adminContact").value;
    var technicalContact = document.getElementById("technicalContact").value;

    var gstReg = document.getElementById("gstReg").value;
    var billAddress1 = document.getElementById("billAddress1").value;
    var billAddress2 = document.getElementById("billAddress2").value;
    var billCity = document.getElementById("billCity").value;
    var billProvince = document.getElementById("billProvince").value;
    var billCountry = document.getElementById("billCountry").value;
    var billPostalCode = document.getElementById("billPostalCode").value;
    var accntRec = document.getElementById("accntRec").value;
    var bank = document.getElementById("bank").value;

    var ISnumber = null
    if(document.getElementById("ISnumberYes").checked) {
        ISnumber = "yes"
    } else if (document.getElementById("ISnumberNo").checked) {
        ISnumber = "no"
    }

    var website = document.getElementById("website").value;
    var password = document.getElementById("password").value;

    var jointVenture = null
    if(document.getElementById("jointVentureYes").checked) {
        jointVenture = "yes"
    } else if (document.getElementById("jointVentureNo").checked) {
        jointVenture = "no"
    }

    var categories = document.getElementById("categories").value;
    var role=user.role;
    var userUpdate = {email, password, legalEntity, operatingName, address1, address2,
      city, province, country, postalCode, phone, fax, adminContact, technicalContact,
      gstReg, billAddress1, billAddress2, billCity, billProvince, billCountry, billPostalCode,
      accntRec, bank, ISnumber, website, jointVenture, categories,role}
        
    this.updateProfile(userUpdate);
    }
        
    }

    /**
    * Loads the profile of user
    * @return {html} - returns user profile depending on type of user
    */

    render(){

        const {profile} = this.props
        const {user} = this.props


        if (profile.menu == 0){
            if(user.isLoggedIn){
                if(user.profile.role==1){
            return(
                  <Content className="learn-content">
                        <List>
                          <ListItem>
                            <ListItemContent>profile overview</ListItemContent>
                            <div className="android-content mdl-layout__content">
        <a name="top" />
        <div style={{width: '80%', margin: 'auto'}}>
            <CardActions>
                <Button accent ripple className="mdl-color-text--indigo btn btn-primary" onClick={this.requestUpdate.bind(this)}>Update profile</Button>
            </CardActions>
            <h4>Part A: Company Structure</h4>
            <hr/>
            <Textfield label="legalEntity" className="form-control" ref="legalEntity" placeholder="Legal Entity" id="legalEntity" />
            <br/>
            <Textfield label="operatingName" className="form-control" ref="password"  placeholder="Operating Name" id="operatingName"/>
            <hr/>
            <h6>Address:</h6>
            <br/>
            <Textfield label="address1" className="form-control" ref="address1"  placeholder="Address 1" id="address1"/>
            &nbsp;
            <Textfield label="address2" className="form-control" ref="address2"  placeholder="Address 2" id="address2"/>
            <br/>
            <Textfield label="city" className="form-control" ref="city"  placeholder="City" id="city"/>
            &nbsp;
            <Textfield label="province" className="form-control" ref="province"  placeholder="Province" id="province"/>
            <br/>
            <Textfield label="country" className="form-control" ref="country"  placeholder="Country" id="country"/>
            &nbsp;
            <Textfield label="postalCode" className="form-control" ref="postalCode"  placeholder="Postal Code" id="postalCode"/>
            <br/>
            <Textfield label="phone" className="form-control" ref="phone"  placeholder="Phone Number" id="phone"/>
            &nbsp;
            <Textfield label="fax" className="form-control" ref="fax"  placeholder="Fax Number" id="fax"/>
            <hr/>
            <h6>Owners:</h6>
            <Textfield label="owner1Name" className="form-control" ref="owner1Name"  placeholder="Name" id="owner1Name"/>
            &nbsp;
            <Textfield label="owner1Pos" className="form-control" ref="owner1Pos"  placeholder="Postion" id="owner1Pos"/>
            <br/>
            <Textfield label="owner2Name" className="form-control" ref="owner2Name"  placeholder="Name" id="owner2Name"/>
            &nbsp;
            <Textfield label="owner2Pos" className="form-control" ref="owner2Pos"  placeholder="Postion" id="owner2Pos"/>
            <br/>
            <Textfield label="owner3Name" className="form-control" ref="owner3Name"  placeholder="Name" id="owner3Name"/>
            &nbsp;
            <Textfield label="owner3Pos" className="form-control" ref="owner3Pos"  placeholder="Postion" id="owner3Pos"/>
            <br/>
            <Textfield label="owner4Name" className="form-control" ref="owner4Name"  placeholder="Name" id="owner4Name"/>
            &nbsp;
            <Textfield label="owner4Pos" className="form-control" ref="owner4Pos"  placeholder="Postion" id="owner4Pos"/>
            <br/>
            <Textfield label="owner5Name" className="form-control" ref="owner5Name"  placeholder="Name" id="owner5Name"/>
            &nbsp;
            <Textfield label="owner5Pos" className="form-control" ref="owner5Pos"  placeholder="Postion" id="owner5Pos"/>
            <hr/>
            <h6>Description:</h6>
            <h6>Nature of Business:&nbsp; <textarea rows="4" cols="50" id="natureBusiness"></textarea></h6>
            <br/>
            <h6>Length of Time in Business:&nbsp; <textarea rows="4" cols="50" id="timeBusiness"></textarea></h6>
            <br/>
            <h6>Professional Affiliations:&nbsp; <textarea rows="4" cols="50" id="proAffiliation"></textarea></h6>
            <br/>
            <div>
            <label>Copy of most recent annual report:
            <input type="radio" name="report" value="reportEnclosed" id="reportEnclosed"/>Enclosed
            <input type="radio" name="report" value="reportNotAvailable" id="reportNotAvailable"/>Not Available
            <input type="radio" name="report" value="reportNotAvailable" id="reportNotApplicable"/>Not Applicable
            </label>
            </div>

            <hr/>
            <h4>Part B: Financial</h4>
            <Textfield label="bank" className="form-control" ref="bank"  placeholder="Bank" id="bank"/>
            &nbsp;
            <Textfield label="bankLocation" className="form-control" ref="bankLocation"  placeholder="Location" id="bankLocation"/>
            <br/>
            <Textfield label="bondingbonding" className="form-control" ref="bonding"  placeholder="Bonding Company" id="bonding"/>
            &nbsp;
            <Textfield label="bondingLocation" className="form-control" ref="bondingLocation"  placeholder="Location" id="bondingLocation"/>
            <br/>
            <Textfield label="insuranceCompany" className="form-control" ref="insuranceCompany"  placeholder="Insurance Company" id="insuranceCompany"/>
            &nbsp;
            <Textfield label="insuranceLocation" className="form-control" ref="insuranceLocation"  placeholder="Location" id="insuranceLocation"/>
            <br/>
            <Textfield label="bondingLimitDate" className="form-control" ref="bondingLimitDate"  placeholder="Bonding Limit as of (date)" id="bondingLimitDate"/>
            &nbsp;
            <Textfield label="bondingLimit" className="form-control" ref="bondingLimit"  placeholder="is (amount)" id="bondingLimit"/>
            <br/>
            <Textfield label="grossBus" className="form-control" ref="grossBus"  placeholder="Most recent annual gross business $" id="grossBus"/>
            &nbsp;
            <Textfield label="grossBusYear" className="form-control" ref="grossBusYear"  placeholder="Year" id="grossBusYear"/>
            <br/>
            <div>
            <label>Bankruptcy:
            <input type="radio" name="bankruptcy" value="bankY" id="bankYes"/>Yes
            <input type="radio" name="bankruptcy" value="bankN" id="bankNo"/>No
            </label>
            </div>

            <hr/>
            <h4>Part C: General</h4>
            <Textfield label="numEmployees" className="form-control" ref="numEmployees"  placeholder="Number of Employees" id="numEmployees"/>
            <h6>Additional Locations:</h6>
            <br/>
            <Textfield label="AD1address1" className="form-control" ref="AD1address1"  placeholder="Additional 1: Address 1" id="AD1address1"/>
            &nbsp;
            <Textfield label="AD1address2" className="form-control" ref="AD1address2"  placeholder="Additional 1: Address 2" id="AD1address2"/>
            <br/>
            <Textfield label="AD1city" className="form-control" ref="AD1city"  placeholder="Additional 1: City" id="AD1city"/>
            &nbsp;
            <Textfield label="AD1province" className="form-control" ref="AD1province"  placeholder="Additional 1: Province" id="AD1province"/>
            <br/>
            <Textfield label="AD1country" className="form-control" ref="AD1country"  placeholder="Additional 1: Country" id="AD1country"/>
            &nbsp;
            <Textfield label="AD1postalCode" className="form-control" ref="AD1postalCode"  placeholder="Additional 1: Postal Code" id="AD1postalCode"/>
            <br/>
            <Textfield label="AD1phone" className="form-control" ref="AD1phone"  placeholder="Additional 1: Phone Number" id="AD1phone"/>
            <hr/>
            <Textfield label="AD2address1" className="form-control" ref="AD2address1"  placeholder="Additional 2: Address 1" id="AD2address1"/>
            &nbsp;
            <Textfield label="AD2address2" className="form-control" ref="AD2address2"  placeholder="Additional 2: Address 2" id="AD2address2"/>
            <br/>
            <Textfield label="AD2city" className="form-control" ref="AD2city"  placeholder="Additional 2: City" id="AD2city"/>
            &nbsp;
            <Textfield label="AD2province" className="form-control" ref="AD2province"  placeholder="Additional 2: Province" id="AD2province"/>
            <br/>
            <Textfield label="AD2country" className="form-control" ref="AD2country"  placeholder="Additional 2: Country" id="AD2country"/>
            &nbsp;
            <Textfield label="AD2postalCode" className="form-control" ref="AD2postalCode"  placeholder="Additional 2: Postal Code" id="AD2postalCode"/>
            <br/>
            <Textfield label="AD2phone" className="form-control" ref="AD2phone"  placeholder="Additional 2: Phone Number" id="AD2phone"/>
            <hr/>
            <Textfield label="AD3address1" className="form-control" ref="AD3address1"  placeholder="Additional 3: Address 1" id="AD3address1"/>
            &nbsp;
            <Textfield label="AD3address2" className="form-control" ref="AD3address2"  placeholder="Additional 3: Address 2" id="AD3address2"/>
            <br/>
            <Textfield label="AD3city" className="form-control" ref="AD3city"  placeholder="Additional 3: City" id="AD3city"/>
            &nbsp;
            <Textfield label="AD3province" className="form-control" ref="AD3province"  placeholder="Additional 3: Province" id="AD3province"/>
            <br/>
            <Textfield label="AD3country" className="form-control" ref="AD3country"  placeholder="Additional 3: Country" id="AD3country"/>
            &nbsp;
            <Textfield label="AD3postalCode" className="form-control" ref="AD3postalCode"  placeholder="Additional 3: Postal Code" id="AD3postalCode"/>
            <br/>
            <Textfield label="AD3phone" className="form-control" ref="AD3phone"  placeholder="Additional 3: Phone Number" id="AD3phone"/>
            <hr/>
            <h4>Part D: Qualifications and Experience</h4>
            <h6>Categories of services provided - List all types of work you are able to provide:</h6>
            <Textfield label="categories" className="form-control" ref="categories"  placeholder="Categories" id="categories"/>
            <br/>
            <Textfield label="specialties" className="form-control" ref="specialties"  placeholder="Specialties" id="specialties"/>
            <h6>Work History:</h6>
            <Textfield label="client1" className="form-control" ref="client1"  placeholder="Client 1: Name" id="client1"/>
            &nbsp;
            <Textfield label="client1Location" className="form-control" ref="client1Location"  placeholder="Client 1: Location" id="client1Location"/>
            <br/>
            <Textfield label="client1Phone" className="form-control" ref="client1Phone"  placeholder="Client 1: Phone" id="client1Phone"/>
            &nbsp;
            <Textfield label="client1Email" className="form-control" ref="client1Email"  placeholder="Client 1: Email" id="client1Email"/>
            <br/>
            <h6>Client 1 Details of services provided (type, duration, dates, etc.):&nbsp; <textarea rows="4" cols="50" id="client1Service"></textarea></h6>
            <hr/>
            <Textfield label="client2" className="form-control" ref="client2"  placeholder="Client 2: Name" id="client2"/>
            &nbsp;
            <Textfield label="client2Location" className="form-control" ref="client2Location"  placeholder="Client 2: Location" id="client2Location"/>
            <br/>
            <Textfield label="client2Phone" className="form-control" ref="client2Phone"  placeholder="Client 2: Phone" id="client2Phone"/>
            &nbsp;
            <Textfield label="client2Email" className="form-control" ref="client2Email"  placeholder="Client 2: Email" id="client2Email"/>
            <br/>
            <h6>Client 2 Details of services provided (type, duration, dates, etc.):&nbsp; <textarea rows="4" cols="50" id="client2Service"></textarea></h6>
            <hr/>
            <Textfield label="client3" className="form-control" ref="client3"  placeholder="Client 3: Name" id="client3"/>
            &nbsp;
            <Textfield label="client3Location" className="form-control" ref="client3Location"  placeholder="Client 3: Location" id="client3Location"/>
            <br/>
            <Textfield label="client3Phone" className="form-control" ref="client3Phone"  placeholder="Client 3: Phone" id="client3Phone"/>
            &nbsp;
            <Textfield label="client3Email" className="form-control" ref="client3Email"  placeholder="Client 3: Email" id="client3Email"/>
            <br/>
            <h6>Client 3 Details of services provided (type, duration, dates, etc.):&nbsp; <textarea rows="4" cols="50" id="client3Service"></textarea></h6>
            <hr/>
            <Textfield label="client4" className="form-control" ref="client4"  placeholder="Client 4: Name" id="client4"/>
            &nbsp;
            <Textfield label="client4Location" className="form-control" ref="client4Location"  placeholder="Client 4: Location" id="client4Location"/>
            <br/>
            <Textfield label="client4Phone" className="form-control" ref="client4Phone"  placeholder="Client 4: Phone" id="client4Phone"/>
            &nbsp;
            <Textfield label="client4Email" className="form-control" ref="client4Email"  placeholder="Client 4: Email" id="client4Email"/>
            <br/>
            <h6>Client 4 Details of services provided (type, duration, dates, etc.):&nbsp; <textarea rows="4" cols="50" id="client4Service"></textarea></h6>
            <hr/>
            <h6>Professional Licences: Indicate the categories of Services you are licensed for and the jurisdictions in which they are valid (i.e. Professional Engineers, technicians and other licensed professionals).</h6>
            <br/>
            <Textfield label="licence1" className="form-control" ref="licence1"  placeholder="1. Type of Licence" id="licence1"/>
            &nbsp;
            <Textfield label="licence1Location" className="form-control" ref="licence1Location"  placeholder="Location" id="licence1Location"/>
            <br/>
            <Textfield label="licence2" className="form-control" ref="licence2"  placeholder="2. Type of Licence" id="licence2"/>
            &nbsp;
            <Textfield label="licence2Location" className="form-control" ref="licence2Location"  placeholder="Location" id="licence2Location"/>
            <br/>
            <Textfield label="licence3" className="form-control" ref="licence3"  placeholder="3. Type of Licence" id="licence3"/>
            &nbsp;
            <Textfield label="licence3Location" className="form-control" ref="licence3Location"  placeholder="Location" id="licence3Location"/>
            <br/>
            <Textfield label="licence4" className="form-control" ref="licence4"  placeholder="4. Type of Licence" id="licence4"/>
            &nbsp;
            <Textfield label="licence4Location" className="form-control" ref="licence4Location"  placeholder="Location" id="licence4Location"/>
            <br/>
            <Textfield label="licence5" className="form-control" ref="licence5"  placeholder="5. Type of Licence" id="licence5"/>
            &nbsp;
            <Textfield label="licence5Location" className="form-control" ref="licence5Location"  placeholder="Location" id="licence5Location"/>
            <hr/>

            <h4>Part E: Insurance</h4>
            <h6>NOTE: Insurance Requirements are subject to change based on individual scopes of service. General Liability Bodily Injury &amp; Property Damage including the following:</h6>
            <h6>1. Products/Completed Operations:</h6>
            <Textfield label="insurer1" className="form-control" ref="insurer1"  placeholder="Insurer" id="insurer1"/>
            &nbsp;
            <Textfield label="policyLimit1" className="form-control" ref="policyLimit1"  placeholder="Policy Limit" id="policyLimit1"/>
            <br/>
            &nbsp;
            <Textfield label="expiry1" className="form-control" ref="expiry1"  placeholder="Expiry Date" id="expiry1"/>
            <hr/>

            <h6>2. Sudden/Accidental Pollution:</h6>
            <Textfield label="insurer2" className="form-control" ref="insurer2"  placeholder="Insurer" id="insurer2"/>
            &nbsp;
            <Textfield label="policyLimit2" className="form-control" ref="policyLimit2"  placeholder="Policy Limit" id="policyLimit2"/>
            <br/>
            &nbsp;
            <Textfield label="expiry2" className="form-control" ref="expiry2"  placeholder="Expiry Date" id="expiry2"/>
            <hr/>

            <h6>3. Cross Liability/Severability of Interest</h6>
            <Textfield label="insurer3" className="form-control" ref="insurer3"  placeholder="Insurer" id="insurer3"/>
            &nbsp;
            <Textfield label="policyLimit3" className="form-control" ref="policyLimit3"  placeholder="Policy Limit" id="policyLimit3"/>
            <br/>
            &nbsp;
            <Textfield label="expiry3" className="form-control" ref="expiry3"  placeholder="Expiry Date" id="expiry3"/>
            <hr/>

            <h6>4. Employers Liability</h6>
            <Textfield label="insurer4" className="form-control" ref="insurer4"  placeholder="Insurer" id="insurer4"/>
            &nbsp;
            <Textfield label="policyLimit4" className="form-control" ref="policyLimit4"  placeholder="Policy Limit" id="policyLimit4"/>
            <br/>
            &nbsp;
            <Textfield label="expiry4" className="form-control" ref="expiry4"  placeholder="Expiry Date" id="expiry4"/>
            <hr/>

            <h6>5. Broad Form Property Damage</h6>
            <Textfield label="insurer5" className="form-control" ref="insurer5"  placeholder="Insurer" id="insurer5"/>
            &nbsp;
            <Textfield label="policyLimit5" className="form-control" ref="policyLimit5"  placeholder="Policy Limit" id="policyLimit5"/>
            <br/>
            &nbsp;
            <Textfield label="expiry5" className="form-control" ref="expiry5"  placeholder="Expiry Date" id="expiry5"/>
            <hr/>

            <h6>6. Blanket Contractual Liability</h6>
            <Textfield label="insurer6" className="form-control" ref="insurer6"  placeholder="Insurer" id="insurer6"/>
            &nbsp;
            <Textfield label="policyLimit6" className="form-control" ref="policyLimit6"  placeholder="Policy Limit" id="policyLimit6"/>
            <br/>
            &nbsp;
            <Textfield label="expiry6" className="form-control" ref="expiry6"  placeholder="Expiry Date" id="expiry6"/>
            <hr/>

            <h6>7. Independent Contractors</h6>
            <Textfield label="insurer7" className="form-control" ref="insurer7"  placeholder="Insurer" id="insurer7"/>
            &nbsp;
            <Textfield label="policyLimit7" className="form-control" ref="policyLimit7"  placeholder="Policy Limit" id="policyLimit7"/>
            <br/>
            &nbsp;
            <Textfield label="expiry7" className="form-control" ref="expiry7"  placeholder="Expiry Date" id="expiry7"/>
            <hr/>

            <h6>8. Non-Owned Automobile</h6>
            <Textfield label="insurer8" className="form-control" ref="insurer8"  placeholder="Insurer" id="insurer8"/>
            &nbsp;
            <Textfield label="policyLimit8" className="form-control" ref="policyLimit8"  placeholder="Policy Limit" id="policyLimit8"/>
            <br/>
            &nbsp;
            <Textfield label="expiry8" className="form-control" ref="expiry8"  placeholder="Expiry Date" id="expiry8"/>
            <hr/>

            <h6>9. Tenants Legal Liability</h6>
            <Textfield label="insurer9" className="form-control" ref="insurer9"  placeholder="Insurer" id="insurer9"/>
            &nbsp;
            <Textfield label="policyLimit9" className="form-control" ref="policyLimit9"  placeholder="Policy Limit" id="policyLimit9"/>
            <br/>
            &nbsp;
            <Textfield label="expiry9" className="form-control" ref="expiry9"  placeholder="Expiry Date" id="expiry9"/>
            <hr/>

            <h6>10. No failure to perform exclusion</h6>
            <Textfield label="insurer10" className="form-control" ref="insurer10"  placeholder="Insurer" id="insurer10"/>
            &nbsp;
            <Textfield label="policyLimit10" className="form-control" ref="policyLimit10"  placeholder="Policy Limit" id="policyLimit10"/>
            <br/>
            &nbsp;
            <Textfield label="expiry10" className="form-control" ref="expiry10"  placeholder="Expiry Date" id="expiry10"/>
            <hr/>

            <h6>11. Errors and Omissions</h6>
            <Textfield label="insurer11" className="form-control" ref="insurer11"  placeholder="Insurer" id="insurer11"/>
            &nbsp;
            <Textfield label="policyLimit11" className="form-control" ref="policyLimit11"  placeholder="Policy Limit" id="policyLimit11"/>
            <br/>
            &nbsp;
            <Textfield label="expiry11" className="form-control" ref="expiry11"  placeholder="Expiry Date" id="expiry11"/>
            <hr/>

            <h6>12. 30 days’ notice for cancellation/non-renewal</h6>
            <Textfield label="insurer12" className="form-control" ref="insurer12"  placeholder="Insurer" id="insurer12"/>
            &nbsp;
            <Textfield label="policyLimit12" className="form-control" ref="policyLimit12"  placeholder="Policy Limit" id="policyLimit12"/>
            <br/>
            &nbsp;
            <Textfield label="expiry12" className="form-control" ref="expiry12"  placeholder="Expiry Date" id="expiry12"/>
            <hr/>

            <h6>13. Automobile Insurance</h6>
            <Textfield label="insurer13" className="form-control" ref="insurer13"  placeholder="Insurer" id="insurer13"/>
            &nbsp;
            <Textfield label="policyLimit13" className="form-control" ref="policyLimit13"  placeholder="Policy Limit" id="policyLimit13"/>
            <br/>
            &nbsp;
            <Textfield label="expiry13" className="form-control" ref="expiry13"  placeholder="Expiry Date" id="expiry13"/>
            <hr/>

            <h6>14. Excess/Umbrella Liability</h6>
            <Textfield label="insurer14" className="form-control" ref="insurer14"  placeholder="Insurer" id="insurer14"/>
            &nbsp;
            <Textfield label="policyLimit14" className="form-control" ref="policyLimit14"  placeholder="Policy Limit" id="policyLimit14"/>
            <br/>
            &nbsp;
            <Textfield label="expiry14" className="form-control" ref="expiry14"  placeholder="Expiry Date" id="expiry14"/>
            <hr/>

            <h6>15. Professional Liability</h6>
            <Textfield label="insurer15" className="form-control" ref="insurer15"  placeholder="Insurer" id="insurer15"/>
            &nbsp;
            <Textfield label="policyLimit15" className="form-control" ref="policyLimit15"  placeholder="Policy Limit" id="policyLimit15"/>
            <br/>
            &nbsp;
            <Textfield label="expiry15" className="form-control" ref="expiry15"  placeholder="Expiry Date" id="expiry15"/>

            <hr/>
            <h4>Part F: Health, Safety, and Environment (HSE) and Regulatory</h4>
            <h6>List your workers&#39; compensation board / insurance plan rate for the previous four (4) years starting with the current year. (If your industry is exempt from the requirement to participate in a workers&#39; compensation jurisdiction, please attach the supporting documentation to establish this exemption).</h6>
            <hr/>
            <h6>HSE Performance</h6>
            <h6>1. Employee Hours Worked</h6>
            <Textfield label="EHWcurrentYear" className="form-control" ref="EHWcurrentYear"  placeholder="Current Year" id="EHWcurrentYear"/>
            &nbsp;
            <Textfield label="EHWpreviousYear1" className="form-control" ref="EHWpreviousYear1"  placeholder="Previous Year 1" id="EHWpreviousYear1"/>
            &nbsp;
            <Textfield label="EHWpreviousYear2" className="form-control" ref="EHWpreviousYear2"  placeholder="Previous Year 2" id="EHWpreviousYear2"/>
            &nbsp;
            <Textfield label="EHWpreviousYear3" className="form-control" ref="EHWpreviousYear3"  placeholder="Previous Year 3" id="EHWpreviousYear3"/>
            <hr/>

            <h6>2. Fatalities</h6>
            <Textfield label="FcurrentYear" className="form-control" ref="FcurrentYear"  placeholder="Current Year" id="FcurrentYear"/>
            &nbsp;
            <Textfield label="FpreviousYear1" className="form-control" ref="FpreviousYear1"  placeholder="Previous Year 1" id="FpreviousYear1"/>
            &nbsp;
            <Textfield label="FpreviousYear2" className="form-control" ref="FpreviousYear2"  placeholder="Previous Year 2" id="FpreviousYear2"/>
            &nbsp;
            <Textfield label="FpreviousYear3" className="form-control" ref="FpreviousYear3"  placeholder="Previous Year 3" id="FpreviousYear3"/>
            <hr/>

            <h6>3. Lost time incidents (cases resulting in time loss beyond the date of injury)</h6>
            <Textfield label="LTIcurrentYear" className="form-control" ref="LTIcurrentYear"  placeholder="Current Year" id="LTIcurrentYear"/>
            &nbsp;
            <Textfield label="LTIpreviousYear1" className="form-control" ref="LTIpreviousYear1"  placeholder="Previous Year 1" id="LTIpreviousYear1"/>
            &nbsp;
            <Textfield label="LTIpreviousYear2" className="form-control" ref="LTIpreviousYear2"  placeholder="Previous Year 2" id="LTIpreviousYear2"/>
            &nbsp;
            <Textfield label="LTIpreviousYear3" className="form-control" ref="LTIpreviousYear3"  placeholder="Previous Year 3" id="LTIpreviousYear3"/>
            <hr/>

            <h6>4. Medical aid injuries (cases resulting in care of a medical practitioner beyond first aid treatment)</h6>
            <Textfield label="MAIcurrentYear" className="form-control" ref="MAIcurrentYear"  placeholder="Current Year" id="MAIcurrentYear"/>
            &nbsp;
            <Textfield label="MAIpreviousYear1" className="form-control" ref="MAIpreviousYear1"  placeholder="Previous Year 1" id="MAIpreviousYear1"/>
            &nbsp;
            <Textfield label="MAIpreviousYear2" className="form-control" ref="MAIpreviousYear2"  placeholder="Previous Year 2" id="MAIpreviousYear2"/>
            &nbsp;
            <Textfield label="MAIpreviousYear3" className="form-control" ref="MAIpreviousYear3"  placeholder="Previous Year 3" id="MAIpreviousYear3"/>
            <hr/>

            <h6>5. Other recordable cases (cases not classified as medical aid or lost time but resulting in worker unable to perform routine functions)</h6>
            <Textfield label="ORCcurrentYear" className="form-control" ref="ORCcurrentYear"  placeholder="Current Year" id="ORCcurrentYear"/>
            &nbsp;
            <Textfield label="ORCpreviousYear1" className="form-control" ref="ORCpreviousYear1"  placeholder="Previous Year 1" id="ORCpreviousYear1"/>
            &nbsp;
            <Textfield label="ORCpreviousYear2" className="form-control" ref="ORCpreviousYear2"  placeholder="Previous Year 2" id="ORCpreviousYear2"/>
            &nbsp;
            <Textfield label="ORCpreviousYear3" className="form-control" ref="ORCpreviousYear3"  placeholder="Previous Year 3" id="ORCpreviousYear3"/>
            <hr/>

            <h6>6. Total recordable injuries - Fatalities + Lost time + Medical Aid + Restricted Duty Injuries</h6>
            <Textfield label="TRIcurrentYear" className="form-control" ref="TRIcurrentYear"  placeholder="Current Year" id="TRIcurrentYear"/>
            &nbsp;
            <Textfield label="TRIpreviousYear1" className="form-control" ref="TRIpreviousYear1"  placeholder="Previous Year 1" id="TRIpreviousYear1"/>
            &nbsp;
            <Textfield label="TRIpreviousYear2" className="form-control" ref="TRIpreviousYear2"  placeholder="Previous Year 2" id="TRIpreviousYear2"/>
            &nbsp;
            <Textfield label="TRIpreviousYear3" className="form-control" ref="TRIpreviousYear3"  placeholder="Previous Year 3" id="TRIpreviousYear3"/>
            <hr/>

            <h6>Worker’s Compensation - If Proponent’s Rates are higher than applicable Industry Rate(s), provide details as to why and what measures are being taken to address this.</h6>
            <Textfield label="industryCode" className="form-control" ref="industryCode"  placeholder="Industry Code" id="industryCode"/>
            &nbsp;
            <Textfield label="industryClassification" className="form-control" ref="industryClassification"  placeholder="industryClassification" id="industryClassification"/>
            <br/>
            <h6>1. Industry Rate</h6>
            <Textfield label="IRcurrentYear" className="form-control" ref="IRcurrentYear"  placeholder="Current Year" id="IRcurrentYear"/>
            &nbsp;
            <Textfield label="IRpreviousYear1" className="form-control" ref="IRpreviousYear1"  placeholder="Previous Year 1" id="IRpreviousYear1"/>
            &nbsp;
            <Textfield label="IRpreviousYear2" className="form-control" ref="IRpreviousYear2"  placeholder="Previous Year 2" id="IRpreviousYear2"/>
            &nbsp;
            <Textfield label="IRpreviousYear3" className="form-control" ref="IRpreviousYear3"  placeholder="Previous Year 3" id="IRpreviousYear3"/>
            <hr/>

            <h6>2. Proponent Rate</h6>
            <Textfield label="PRcurrentYear" className="form-control" ref="PRcurrentYear"  placeholder="Current Year" id="PRcurrentYear"/>
            &nbsp;
            <Textfield label="PRpreviousYear1" className="form-control" ref="PRpreviousYear1"  placeholder="Previous Year 1" id="PRpreviousYear1"/>
            &nbsp;
            <Textfield label="PRpreviousYear2" className="form-control" ref="PRpreviousYear2"  placeholder="Previous Year 2" id="PRpreviousYear2"/>
            &nbsp;
            <Textfield label="PRpreviousYear3" className="form-control" ref="PRpreviousYear3"  placeholder="Previous Year 3" id="PRpreviousYear3"/>
            <hr/>

            <h6>3. % Discount</h6>
            <Textfield label="PDcurrentYear" className="form-control" ref="PDcurrentYear"  placeholder="Current Year" id="PDcurrentYear"/>
            &nbsp;
            <Textfield label="PDpreviousYear1" className="form-control" ref="PDpreviousYear1"  placeholder="Previous Year 1" id="PDpreviousYear1"/>
            &nbsp;
            <Textfield label="PDpreviousYear2" className="form-control" ref="PDpreviousYear2"  placeholder="Previous Year 2" id="PDpreviousYear2"/>
            &nbsp;
            <Textfield label="PDpreviousYear3" className="form-control" ref="PDpreviousYear3"  placeholder="Previous Year 3" id="PDpreviousYear3"/>
            <hr/>

            <h6>4. % Surcharge</h6>
            <Textfield label="PScurrentYear" className="form-control" ref="PScurrentYear"  placeholder="Current Year" id="PScurrentYear"/>
            &nbsp;
            <Textfield label="PSpreviousYear1" className="form-control" ref="PSpreviousYear1"  placeholder="Previous Year 1" id="PSpreviousYear1"/>
            &nbsp;
            <Textfield label="PSpreviousYear2" className="form-control" ref="PSpreviousYear2"  placeholder="Previous Year 2" id="PSpreviousYear2"/>
            &nbsp;
            <Textfield label="PSpreviousYear3" className="form-control" ref="PSpreviousYear3"  placeholder="Previous Year 3" id="PSpreviousYear3"/>
            <hr/>

            <h6>Advise if your company has a Drug &amp; Alcohol Policy and provide details:&nbsp; <br/><textarea rows="4" cols="50" id="drugPolicy"></textarea></h6>
            <hr/>

            <h6>Advise if your company evaluates the ability of subcontractors to comply with applicable health and safety requirements as part of your selection process and provide details:&nbsp; <br/><textarea rows="4" cols="50" id="subcontractors"></textarea></h6>
            <hr/>

            <h6>Advise if your company has ever received a regulatory agency stop work order or been investigated by a regulatory body in the last three years in respect of its Occupational Health &amp; Safety record or conduct? If so, attach details and state whether all actions required by the regulatory body have been completed:&nbsp; <br/><textarea rows="4" cols="50" id="stopWorkOrder"></textarea></h6>
            <hr/>

            <h6>Advise if there are any HSE related judgments, claims or suits outstanding against you and if so, provide details:&nbsp; <br/><textarea rows="4" cols="50" id="HSEjudge"></textarea></h6>
            <hr/>

            <Textfield label="adminContact" className="form-control" ref="adminContact"  placeholder="Admin Email" id="adminContact"/>
            <br/>
            <Textfield label="technicalContact" className="form-control" ref="technicalContact"  placeholder="Technical Email" id="technicalContact"/>
            <br/>
            <Textfield label="email" className="form-control" ref="email"  placeholder="Email" id="email"/>
            <br/>
            <Textfield label="password" ref="pw" type="password" className="form-control" placeholder="Password" id="password"/>
            <br/>
            <div>
            <label>ISN Member:
              <input type="radio" name="ISNumber" value="isnY" id="ISnumberYes"/>Yes
              <input type="radio" name="ISNumber" value="isnN" id="ISnumberNo"/>No
            </label>
            </div>
            <br/>
            <Textfield label="website" className="form-control" ref="website"  placeholder="Website" id="website"/>
                </div>
            </div>
                          </ListItem>
                        </List>
                    </Content>
            );
            }else if(user.profile.role==0){
                return(
                <Content className="learn-content">
                        <List>
                          <ListItem>
                            <ListItemContent>profile overview</ListItemContent>
                    <div className="android-content mdl-layout__content">
        <a name="top" />
        <div style={{width: '80%', margin: 'auto'}}>
            <CardActions>
                <Button accent ripple className="mdl-color-text--indigo btn btn-primary" onClick={this.requestUpdate.bind(this)}>Update profile</Button>
            </CardActions>
            <hr/>
            <Textfield label="legalEntity" className="form-control" ref="legalEntity" placeholder="Legal Entity" id="legalEntity" />
            <br/>
            <Textfield label="operatingName" className="form-control" ref="password"  placeholder="Operating Name" id="operatingName"/>
            <hr/>
            <h6>Address:</h6>
            <br/>
            <Textfield label="address1" className="form-control" ref="address1"  placeholder="Address 1" id="address1"/>
            <br/>
            <Textfield label="address2" className="form-control" ref="address2"  placeholder="Address 2" id="address2"/>
            <br/>
            <Textfield label="city" className="form-control" ref="city"  placeholder="City" id="city"/>
            <br/>
            <Textfield label="province" className="form-control" ref="province"  placeholder="Province" id="province"/>
            <br/>
            <Textfield label="country" className="form-control" ref="country"  placeholder="Country" id="country"/>
            <br/>
            <Textfield label="postalCode" className="form-control" ref="postalCode"  placeholder="Postal Code" id="postalCode"/>
            <hr/>
            <Textfield label="phone" className="form-control" ref="phone"  placeholder="Phone Number" id="phone"/>
            <br/>
            <Textfield label="fax" className="form-control" ref="fax"  placeholder="Fax Number" id="fax"/>
            <br/>
            <Textfield label="email" className="form-control" ref="email"  placeholder="Email" id="email"/>
            <br/>
            <Textfield label="password" ref="pw" type="password" className="form-control" placeholder="Password" id="password"/>
            <br/>
            <Textfield label="adminContact" className="form-control" ref="adminContact"  placeholder="Admin Email" id="adminContact"/>
            <br/>
            <Textfield label="technicalContact" className="form-control" ref="technicalContact"  placeholder="Technical Email" id="technicalContact"/>
            <br/>
            <Textfield label="gstReg" className="form-control" ref="gstReg"  placeholder="GST Registration #" id="gstReg"/>
            <br/>
            <hr/>
            <h6>Billing Address:</h6>
            <br/>
            <Textfield label="billAddress1" className="form-control" ref="billAddress1"  placeholder="Address 1" id="billAddress1"/>
            <br/>
            <Textfield label="billAddress2" className="form-control" ref="billAddress2"  placeholder="Address 2" id="billAddress2"/>
            <br/>
            <Textfield label="billCity" className="form-control" ref="billCity"  placeholder="City" id="billCity"/>
            <br/>
            <Textfield label="billProvince" className="form-control" ref="billProvince"  placeholder="Province" id="billProvince"/>
            <br/>
            <Textfield label="billCountry" className="form-control" ref="billCountry"  placeholder="Country" id="billCountry"/>
            <br/>
            <Textfield label="billPostalCode" className="form-control" ref="billPostalCode"  placeholder="Postal Code" id="billPostalCode"/>
            <hr/>
            <Textfield label="accntRec" className="form-control" ref="accntRec"  placeholder="Accounts Receivable" id="accntRec"/>
            <br/>
            <Textfield label="bank" className="form-control" ref="bank"  placeholder="Bank" id="bank"/>
            <br/>
            <div>
              <label>ISN Member:
                <input type="radio" name="ISNumber" value="isnY" id="ISnumberYes"/>Yes
                <input type="radio" name="ISNumber" value="isnN" id="ISnumberNo"/>No
              </label>
            </div>
            <br/>
            <Textfield label="website" className="form-control" ref="website"  placeholder="Website" id="website"/>
            <hr/>
            <h6>Would you like to be considered for joint ventures in development of new education/training?</h6>
            <div>
              <label>
                <input type="radio" name="JointVentures" value="jvY" id="jointVentureYes"/>Yes
                <input type="radio" name="JointVentures" value="jvN" id="jointVentureNo"/>No
              </label>
            </div>
            <br/>
            <Textfield label="categories" className="form-control" ref="categories"  placeholder="Categories" id="categories"/>
            <hr/>
            
        </div>
      </div>
                </ListItem>
                        </List>
                    </Content>
                )
            }else{
                return(
                    <Content>
                    <div>
                    <p>loading data...</p>
                    </div>
                    </Content>
                )
            }
        }else{
            return(
                <Content>
                <div>
                <p>loading data...</p>
                </div>
                </Content>
            )
        }
        }else if (profile.menu == 1){
            return(
                <ContentCourseDisplay/>
            )
        }else if(profile.menu==2){
            return(
                <ContentProfileUpload/>
            )
        }else{
            return(
                <ContentCourseUpdate/>
            )
                }
    }
};



export default ContentProfile