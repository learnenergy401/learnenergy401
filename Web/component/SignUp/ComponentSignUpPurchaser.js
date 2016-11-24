import React, { Component } from 'react'
import { Textfield,Grid,Cell,Card,CardText, CardActions, Button } from 'react-mdl';
import { signUpPurchaser } from "../Actions/userActions.js"
import { connect } from "react-redux"

var componentStyle = {
    margin: 'auto',
}

var formStyle = {
    marginTop: '5%'
}

@connect((store) => {
  return {
    user: store.user
  };
})/*dont add semicolon here!*/

class ComponentSignUpPurchaser extends Component {

  /**
   * Sends information about purchaser and adds it to Purchaser signup list
   * @param {user} user - object which contains information about the purchaser.
   */
  signUpPurchaser(user) {
    this.props.dispatch(signUpPurchaser(user));
  }

  /**
   * Sends information to signUpPurchaser(user)
   * @return {Object} user - sends information about purchaser.
   */
  requestSubmit() {
    // Add signup event

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

    var user = {email, password, legalEntity, operatingName, address1, address2,
      city, province, country, postalCode, phone, fax, adminContact, technicalContact,
      gstReg, billAddress1, billAddress2, billCity, billProvince, billCountry, billPostalCode,
      accntRec, bank, ISnumber, website, jointVenture, categories}

    this.signUpPurchaser(user);
  }

  /**
   * Loads the signup page for purchaser.
   * @return {html} - displays sign up page for purchaser.
   */
  render() {
    return(

      <div className="android-content mdl-layout__content">
        <a name="top" />
        <div style={{width: '80%', margin: 'auto'}}>

            <br/><br/><br/>
            <hr/>
            <Textfield floatingLabel style={{width:'300px'}} label="Email" id="email"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} type="password" label="Password" id="password"/>
            <hr/>
            <Textfield floatingLabel style={{width:'300px'}} label="Legal Entity" id="legalEntity"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Operating Name" id="operatingName"/>
            <hr/>
            <u><h5>Address:</h5></u>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Address 1" id="address1"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Address 2" id="address2"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="City" id="city"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Province" id="province"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Country" id="country"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Postal Code" id="postalCode"/>
            <hr/>
            <Textfield floatingLabel style={{width:'300px'}} label="Phone Number" id="phone"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Fax Number" id="fax"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Admin Email" id="adminContact"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Technical Email" id="technicalContact"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="GST Registration #" id="gstReg"/>
            <br/>
            <hr/>
            <u><h5>Billing Address:</h5></u>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Address 1" id="billAddress1"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Address 2" id="billAddress2"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="City" id="billCity"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Province" id="billProvince"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Country" id="billCountry"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Postal Code" id="billPostalCode"/>
            <hr/>
            <Textfield floatingLabel style={{width:'300px'}} label="Accounts Receivable" id="accntRec"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Bank" id="bank"/>
            <br/>
            <u><h6>ISN Member?</h6></u>
            <div>
              <label>
                <input type="radio" name="ISNumber" value="isnY" id="ISnumberYes"/>Yes
                <input type="radio" name="ISNumber" value="isnN" id="ISnumberNo"/>No
              </label>
            </div>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Website" id="website"/>
            <hr/>
            <u><h6>Would you like to be considered for joint ventures in development of new education/training?</h6></u>
            <div>
              <label>
                <input type="radio" name="JointVentures" value="jvY" id="jointVentureYes"/>Yes
                <input type="radio" name="JointVentures" value="jvN" id="jointVentureNo"/>No
              </label>
            </div>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Categories" id="categories"/>
            <hr/>
            <CardActions>
              <Button raised ripple className="mdl-color-text--indigo btn btn-primary" onClick={this.requestSubmit.bind(this)}>Register</Button>
            </CardActions>
        </div>
      </div>
    );
  }
};

export default ComponentSignUpPurchaser
