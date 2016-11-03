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

  signUpPurchaser(user) {
    this.props.dispatch(signUpPurchaser(user));
  }

  requestSubmit() {
    // Add signup event
    //Purchaser:selects whether or not to be considered for joint ventures in development of new education/training/ if yes selects categories of training and keywords, purchaser requests number of seats (separate log-ins)



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

    var ISnumber = document.getElementById("ISnumber").value;
    var website = document.getElementById("website").value;
    var password = document.getElementById("password").value;

    var jointVenture = document.getElementById("jointVenture").value;
    var categories = document.getElementById("categories").value;

    var user = {email, password, legalEntity, operatingName, address1, address2,
      city, province, country, postalCode, phone, fax, adminContact, technicalContact,
      gstReg, billAddress1, billAddress2, billCity, billProvince, billCountry, billPostalCode,
      accntRec, bank, ISnumber, website, jointVenture, categories}

    this.signUpPurchaser(user);
    alert("Thank you for registering as a Purchaser for LearnEnergy Marketplace." +"\n" + "We will be in contact with you shortly.");

  }

  render() {
    return(

      <div className="android-content mdl-layout__content">
        <a name="top" />
        <div style={{width: '80%', margin: 'auto'}}>
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
            <Textfield label="ISnumber" className="form-control" ref="ISnumber"  placeholder="ISN Member? Y/N" id="ISnumber"/>
            <br/>
            <Textfield label="website" className="form-control" ref="website"  placeholder="Website" id="website"/>
            <hr/>
            <h6>Would you like to be considered for joint ventures in development of new education/training?</h6>
            <br/>
            <Textfield label="jointVenture" className="form-control" ref="jointVenture"  placeholder="Y/N" id="jointVenture"/>
            <br/>
            <Textfield label="categories" className="form-control" ref="categories"  placeholder="Categories" id="categories"/>
            <hr/>
            <CardActions>
              <Button accent ripple className="mdl-color-text--indigo btn btn-primary" onClick={this.requestSubmit.bind(this)}>Register</Button>
            </CardActions>
        </div>
      </div>
    );
  }
};

export default ComponentSignUpPurchaser
