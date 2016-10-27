import React, { Component } from 'react'
import { Textfield,Grid,Cell,Card,CardText, CardActions, Button } from 'react-mdl';
import FirebaseTools from '../Firebase.js'

var componentStyle = {
    margin: 'auto',
}

var formStyle = {
    marginTop: '5%'
}

class ComponentSignUpPurchaser extends Component {

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
    var ISnumber = document.getElementById("ISnumber").value;
    var website = document.getElementById("website").value;
    var password = document.getElementById("password").value;

    FirebaseTools.registerUser({email, password, legalEntity, operatingName, address1, address2, 
      city, province, country, postalCode, phone, fax, adminContact, technicalContact, 
      ISnumber, website});
  }

  render() {
    return(

      <div className="android-content mdl-layout__content">
        <a name="top" />
        <div style={{width: '80%', margin: 'auto'}}>
          <form style={formStyle} onSubmit={this.requestSubmit}>

            <CardText style={componentStyle}>
                <Textfield label="legalEntity" className="form-control" ref="legalEntity" placeholder="Legal Entity" id="legalEntity" />
                <Textfield label="operatingName" className="form-control" ref="password"  placeholder="Operating Name" id="operatingName"/>
                <Textfield label="address1" className="form-control" ref="address1"  placeholder="Address 1" id="address1"/>
                <Textfield label="address2" className="form-control" ref="address2"  placeholder="Address 2" id="address2"/>
                <Textfield label="city" className="form-control" ref="city"  placeholder="City" id="city"/>
                <Textfield label="province" className="form-control" ref="province"  placeholder="Province" id="province"/>
                <Textfield label="country" className="form-control" ref="country"  placeholder="Country" id="country"/>
                <Textfield label="postalCode" className="form-control" ref="postalCode"  placeholder="Postal Code" id="postalCode"/>
                <Textfield label="phone" className="form-control" ref="phone"  placeholder="Phone Number" id="phone"/>
                <Textfield label="fax" className="form-control" ref="fax"  placeholder="Fax Number" id="fax"/>
                <Textfield label="email" className="form-control" ref="email"  placeholder="Email" id="email"/>
                <Textfield label="password" ref="pw" type="password" className="form-control" placeholder="Password" id="password"/>
                <Textfield label="adminContact" className="form-control" ref="adminContact"  placeholder="Admin Email" id="adminContact"/>
                <Textfield label="technicalContact" className="form-control" ref="technicalContact"  placeholder="Technical Email" id="technicalContact"/>
                <Textfield label="ISnumber" className="form-control" ref="ISnumber"  placeholder="ISN Member? Y/N" id="ISnumber"/>
                <Textfield label="website" className="form-control" ref="website"  placeholder="Website" id="website"/>
            </CardText>

            {/*<form>
                <input type="radio" name="ISNyes" value="yes" />Yes
                <input type="radio" name="ISNno" value="no" />No
            </form>*/}

            <CardActions>
              <Button accent ripple type="submit" className="mdl-color-text--indigo btn btn-primary">Register</Button>
            </CardActions>
          </form>
        </div>
      </div>
    );
  }
};

export default ComponentSignUpPurchaser
