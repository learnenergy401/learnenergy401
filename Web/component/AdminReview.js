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
import { fetchKeyName, fetchVendorSignup, fetchPurchaserSignup, fetchADSignup, getCurrentUser } from "./Actions/userActions"

@connect((store) => {
  return {
    user: store.user
  };
})

class AdminReview extends Component {

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

    fetchKeyName() {
    	this.props.dispatch(fetchKeyName())
    }

    componentWillMount() {
      this.getCurrentUser()
      this.fetchPurchaserSignup()
      this.fetchVendorSignup()
      this.fetchADSignup()
      this.fetchKeyName()
    }

    render() {
      const {user} = this.props

      var key_name = user.keyName.key
      var role = user.keyName.role

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
        var role = user.purchasers[key_name].role;
      }

      return (<div>
                <Dialog style={DialogStyle} open={this.state.openDialog}>
                  <DialogTitle>Purchaser</DialogTitle>
                  <DialogContent>
                    <p></p>
                    <p>Legal Name: {legalEntity}</p>
                    <p>Operating Name:</p>
                    <p>Address 1:</p>
                    <p>Address 2:</p>
                    <p>City:</p>
                    <p>Postal Code:</p>
                    <p>Province: </p>
                    <p>Country: </p>
                    <p>Postal Code:</p>
                    <p>Phone: </p>
                    <p>Fax:</p>
                    <p>Email:</p>
                    <p>Admin Contact:</p>
                    <p>Techncal Contact:</p>
                    <p>IS Number:</p>
                    <p>Website:</p>
                    <p>Password:</p>
                    <p>Role:</p>
                  </DialogContent>
                  <DialogActions>
                    <Button style= {ButtonStyle} type='button' onClick={this.handleCloseDialog}>Close</Button>
                  </DialogActions>
                </Dialog>
              </div>
             );

    	
    }

}

export default AdminReview

