import React, { Component } from 'react'
import {Button} from 'react-mdl';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import { connect } from "react-redux"
import { fetchVendorSignup, fetchPurchaserSignup, fetchADSignup, getCurrentUser, fetchNotificationAdmin, setNotificationAdmin } from "./Actions/userActions"
import store from './Store.js'

var buttonStyle = {

  width: '150px',
    marginLeft:'0px'
}

@connect((store) => {
  return {
    user: store.user
  };
})/*dont add semicolon here!*/

class ButtonNotifyAdmin extends Component {
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
     * Invoked immediately before a component is unmounted and destroyed, to update our states
     */
    componentWillMount(){
      this.fetchPurchaserSignup()
      this.fetchVendorSignup()
      this.fetchADSignup()
    }
    /**
    * Loads the button for Admin.
    * @return {html} - returns button and links
    */
    render(){
        console.log('notify admin')
        const {user} = this.props
        var num = 0
        if (user.purchasers!=null) {
          var purchasers = Object.keys(user.purchasers)
          num += purchasers.length
        }
        if (user.vendors!=null) {
          var vendors = Object.keys(user.vendors)
          num += vendors.length
        }
        if (user.ad!=null) {
          var ad = Object.keys(user.ad)
          num += ad.length
        }
        return(
          <Link to={this.props.to}>
              <Button style={buttonStyle} className="mdl-color-text--indigo" >
                <span className="mdl-badge" data-badge={num}>ADMIN PANEL &nbsp;&nbsp;&nbsp;&nbsp;</span>
              </Button>
           </Link>
        );}
};


export default ButtonNotifyAdmin
