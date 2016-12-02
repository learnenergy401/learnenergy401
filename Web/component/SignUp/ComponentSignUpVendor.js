
import React, { Component } from 'react'
import { Textfield,Grid,Cell,Card,CardText, CardActions, Button } from 'react-mdl';
import { signUpVendor,uploadAnnualReport } from "../Actions/userActions.js"
import { connect } from "react-redux"
var componentStyle = {
    margin: 'auto',
}
var formStyle = {
    marginTop: '5%'
}

//categories
var intTextBox = 0;
var catnum = 1;
var catfill = 1;
//Specialties
var intTextBox1 = 0;
var specnum = 1;
var specfill = 1;
//owners
var intTextBox2 = 0;
var ownernum = 1;
var ownerfill = 1;

@connect((store) => {
  return {
    user: store.user
  };
})/*dont add semicolon here!*/
class ComponentSignUpVendor extends Component {

  /**
   * Sends information about vendor and adds it to vendor signup list
   * @param {user} user - object which contains information about the vendor.
   */
  signUpVendor(user) {
    this.props.dispatch(signUpVendor(user));
  }

  /**
   * Sends information to signUpVendor(user)
   * @return {Object} user - sends information about vendor.
   */
  requestSubmit() {
    const {user}=this.props
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

    var owners = []
    var owners_pos = []
    while(0 < intTextBox2){
      owners.push(document.getElementById("owner_" + ownernum).value)
      owners_pos.push(document.getElementById("owner_pos_" + ownernum).value)
      intTextBox2--;
      ownernum++;
    }
    while(ownerfill <= 5 ){
      owners.push("N/A")
      owners_pos.push("N/A")
      ownerfill++;
    }

    var owner1Name = owners[0]; var owner1Pos = owners_pos[0];
    var owner2Name = owners[1]; var owner2Pos = owners_pos[1];
    var owner3Name = owners[2]; var owner3Pos = owners_pos[2];
    var owner4Name = owners[3]; var owner4Pos = owners_pos[3];
    var owner5Name = owners[4]; var owner5Pos = owners_pos[4];


    var natureBusiness = document.getElementById("natureBusiness").value;
    var timeBusiness = document.getElementById("timeBusiness").value;

    var proAffiliation = document.getElementById("proAffiliation").value;
    var report = null
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
    var bankruptcy = null
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

    var categories = []
    while(0 < intTextBox){
      categories.push(document.getElementById("cat_" + catnum).value)
      intTextBox--;
      catnum++;
    }
    while(catfill <= 5 ){
      categories.push("N/A")
      catfill++;
    }

    var specialties = []
    while(0 < intTextBox1){
      specialties.push(document.getElementById("spec_" + specnum).value)
      intTextBox1--;
      specnum++;
    }
    while(specfill <= 5 ){
      specialties.push("N/A")
      specfill++;
    }

    var client1 = document.getElementById("client1").value; var client1Location = document.getElementById("client1Location").value; var client1Phone = document.getElementById("client1Phone").value; var client1Email = document.getElementById("client1Email").value; var client1Service = document.getElementById("client1Service").value; var client1Name = document.getElementById("client1Name").value;
    var client2 = document.getElementById("client2").value; var client2Location = document.getElementById("client2Location").value; var client2Phone = document.getElementById("client2Phone").value; var client2Email = document.getElementById("client2Email").value; var client2Service = document.getElementById("client2Service").value; var client2Name = document.getElementById("client2Name").value;
    var client3 = document.getElementById("client3").value; var client3Location = document.getElementById("client3Location").value; var client3Phone = document.getElementById("client3Phone").value; var client3Email = document.getElementById("client3Email").value; var client3Service = document.getElementById("client3Service").value; var client3Name = document.getElementById("client3Name").value;
    var client4 = document.getElementById("client4").value; var client4Location = document.getElementById("client4Location").value; var client4Phone = document.getElementById("client4Phone").value; var client4Email = document.getElementById("client4Email").value; var client4Service = document.getElementById("client4Service").value; var client4Name = document.getElementById("client4Name").value;



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

    var industryCode = document.getElementById("industryCode").value; var industryClassification = document.getElementById("industryClassification").value;

    var IRcurrentYear = document.getElementById("IRcurrentYear").value; var IRpreviousYear1 = document.getElementById("IRpreviousYear1").value; var IRpreviousYear2 = document.getElementById("IRpreviousYear2").value; var IRpreviousYear3 = document.getElementById("IRpreviousYear3").value;
    var PRcurrentYear = document.getElementById("PRcurrentYear").value; var PRpreviousYear1 = document.getElementById("PRpreviousYear1").value; var PRpreviousYear2 = document.getElementById("PRpreviousYear2").value; var PRpreviousYear3 = document.getElementById("PRpreviousYear3").value;
    var PDcurrentYear = document.getElementById("PDcurrentYear").value; var PDpreviousYear1 = document.getElementById("PDpreviousYear1").value; var PDpreviousYear2 = document.getElementById("PDpreviousYear2").value; var PDpreviousYear3 = document.getElementById("PDpreviousYear3").value;
    var PScurrentYear = document.getElementById("PScurrentYear").value; var PSpreviousYear1 = document.getElementById("PSpreviousYear1").value; var PSpreviousYear2 = document.getElementById("PSpreviousYear2").value; var PSpreviousYear3 = document.getElementById("PSpreviousYear3").value;

    var drugPolicy = document.getElementById("drugPolicy").value;
    var subcontractors = document.getElementById("subcontractors").value;
    var stopWorkOrder = document.getElementById("stopWorkOrder").value;
    var HSEjudge = document.getElementById("HSEjudge").value;

    var email = document.getElementById("email").value;
    var adminContact = document.getElementById("adminContact").value;
    var technicalContact = document.getElementById("technicalContact").value;

    var ISnumber = null
    if(document.getElementById("ISnumberYes").checked) {
        ISnumber = "yes"
    } else if (document.getElementById("ISnumberNo").checked) {
        ISnumber = "no"
    }

    var website = document.getElementById("website").value;
    var password = document.getElementById("password").value;

    if(report=="enclosed"){
        var downloadlink=user.downloadlink;
        var info = {email, password, legalEntity, operatingName, address1, address2,
      city, province, country, postalCode, phone, fax, owner1Name, owner1Pos, owner2Name, owner2Pos, owner3Name, owner3Pos, owner4Name, owner4Pos, owner5Name, owner5Pos, natureBusiness, timeBusiness, proAffiliation, report,
      adminContact, technicalContact, ISnumber, website, bank, bankLocation, bonding, bondingLocation, insuranceCompany, insuranceLocation,
      bondingLimitDate, bondingLimit, grossBus, grossBusYear, bankruptcy, numEmployees,
      AD1address1, AD1address2, AD1city, AD1province, AD1country, AD1postalCode, AD1phone, AD2address1, AD2address2, AD2city, AD2province, AD2country, AD2postalCode, AD2phone, AD3address1, AD3address2, AD3city, AD3province, AD3country, AD3postalCode, AD3phone,
      categories, specialties, client1, client1Location, client1Phone, client1Email, client1Name, client1Service, client2, client2Location, client2Phone, client2Email, client2Name, client2Service,
      client3, client3Location, client3Phone, client3Email, client3Name, client3Service, client4, client4Location, client4Phone, client4Email, client4Name, client4Service, licence1, licence1Location, licence2, licence2Location, licence3, licence3Location, licence4, licence4Location, licence5, licence5Location,
      insurer1, policyLimit1, expiry1, insurer2, policyLimit2, expiry2, insurer3, policyLimit3, expiry3, insurer4, policyLimit4, expiry4, insurer5, policyLimit5, expiry5,
      insurer6, policyLimit6, expiry6, insurer7, policyLimit7, expiry7, insurer8, policyLimit8, expiry8, insurer9, policyLimit9, expiry9, insurer10, policyLimit10, expiry10,
      insurer11, policyLimit11, expiry11, insurer12, policyLimit12, expiry12, insurer13, policyLimit13, expiry13, insurer14, policyLimit14, expiry14, insurer15, policyLimit15, expiry15,
      EHWcurrentYear, EHWpreviousYear1, EHWpreviousYear2, EHWpreviousYear3, FcurrentYear, FpreviousYear1, FpreviousYear2, FpreviousYear3, LTIcurrentYear, LTIpreviousYear1, LTIpreviousYear2, LTIpreviousYear3,
      MAIcurrentYear, MAIpreviousYear1, MAIpreviousYear2, MAIpreviousYear3, ORCcurrentYear, ORCpreviousYear1, ORCpreviousYear2, ORCpreviousYear3, TRIcurrentYear, TRIpreviousYear1, TRIpreviousYear2, TRIpreviousYear3,
      industryCode, industryClassification, IRcurrentYear, IRpreviousYear1, IRpreviousYear2, IRpreviousYear3, PRcurrentYear, PRpreviousYear1, PRpreviousYear2, PRpreviousYear3,
      PDcurrentYear, PDpreviousYear1, PDpreviousYear2, PDpreviousYear3, PScurrentYear, PSpreviousYear1, PSpreviousYear2, PSpreviousYear3, drugPolicy, subcontractors, stopWorkOrder, HSEjudge,downloadlink,
                   }
    }else{
      
    var info = {email, password, legalEntity, operatingName, address1, address2,
      city, province, country, postalCode, phone, fax, owner1Name, owner1Pos, owner2Name, owner2Pos, owner3Name, owner3Pos, owner4Name, owner4Pos, owner5Name, owner5Pos, natureBusiness, timeBusiness, proAffiliation, report,
      adminContact, technicalContact, ISnumber, website, bank, bankLocation, bonding, bondingLocation, insuranceCompany, insuranceLocation,
      bondingLimitDate, bondingLimit, grossBus, grossBusYear, bankruptcy, numEmployees,
      AD1address1, AD1address2, AD1city, AD1province, AD1country, AD1postalCode, AD1phone, AD2address1, AD2address2, AD2city, AD2province, AD2country, AD2postalCode, AD2phone, AD3address1, AD3address2, AD3city, AD3province, AD3country, AD3postalCode, AD3phone,
      categories, specialties, client1, client1Location, client1Phone, client1Email, client1Name, client1Service, client2, client2Location, client2Phone, client2Email, client2Name, client2Service,
      client3, client3Location, client3Phone, client3Email, client3Name, client3Service, client4, client4Location, client4Phone, client4Email, client4Name, client4Service, licence1, licence1Location, licence2, licence2Location, licence3, licence3Location, licence4, licence4Location, licence5, licence5Location,
      insurer1, policyLimit1, expiry1, insurer2, policyLimit2, expiry2, insurer3, policyLimit3, expiry3, insurer4, policyLimit4, expiry4, insurer5, policyLimit5, expiry5,
      insurer6, policyLimit6, expiry6, insurer7, policyLimit7, expiry7, insurer8, policyLimit8, expiry8, insurer9, policyLimit9, expiry9, insurer10, policyLimit10, expiry10,
      insurer11, policyLimit11, expiry11, insurer12, policyLimit12, expiry12, insurer13, policyLimit13, expiry13, insurer14, policyLimit14, expiry14, insurer15, policyLimit15, expiry15,
      EHWcurrentYear, EHWpreviousYear1, EHWpreviousYear2, EHWpreviousYear3, FcurrentYear, FpreviousYear1, FpreviousYear2, FpreviousYear3, LTIcurrentYear, LTIpreviousYear1, LTIpreviousYear2, LTIpreviousYear3,
      MAIcurrentYear, MAIpreviousYear1, MAIpreviousYear2, MAIpreviousYear3, ORCcurrentYear, ORCpreviousYear1, ORCpreviousYear2, ORCpreviousYear3, TRIcurrentYear, TRIpreviousYear1, TRIpreviousYear2, TRIpreviousYear3,
      industryCode, industryClassification, IRcurrentYear, IRpreviousYear1, IRpreviousYear2, IRpreviousYear3, PRcurrentYear, PRpreviousYear1, PRpreviousYear2, PRpreviousYear3,
      PDcurrentYear, PDpreviousYear1, PDpreviousYear2, PDpreviousYear3, PScurrentYear, PSpreviousYear1, PSpreviousYear2, PSpreviousYear3, drugPolicy, subcontractors, stopWorkOrder, HSEjudge,
      }
    }
    this.signUpVendor(info);
    }

    /**
     * Add owner and position to list
     */
    addElementowner() {
      if(5 > intTextBox2){
        intTextBox2++;
        ownerfill++;
        var objNewDiv2 = document.createElement('div');
        objNewDiv2.setAttribute('id', 'div_' + intTextBox2);
        objNewDiv2.innerHTML = 'Owner ' + intTextBox2 + ': <input type="text" id="owner_' + intTextBox2 + '"/>' + '&nbsp;' + 'Postion' + ': <input type="text" id="owner_pos_' + intTextBox2 + '"/>';
        document.getElementById('content2').appendChild(objNewDiv2);
      } else {
        alert("Reached limit of 5 Owners.");
      }
    }

    /**
     * Remove onwer and position from list
     */
    removeElementowner() {
      if(0 < intTextBox2) {
          document.getElementById('div_' + intTextBox2).remove();
          intTextBox2--;
          ownerfill--;
      } else {
          alert("No owners to remove.");
      }
    }


    /**
     * Add category to list
     */
    addElement() {
      if(5 > intTextBox){
        intTextBox++;
        catfill++;
        var objNewDiv = document.createElement('div');
        objNewDiv.setAttribute('id', 'div_' + intTextBox);
        objNewDiv.innerHTML = 'Category ' + intTextBox + ': <input type="text" id="cat_' + intTextBox + '"/>';
        document.getElementById('content').appendChild(objNewDiv);
      } else {
        alert("Reached limit of 5 categories.");
      }
    }

    /**
     * Remove category from list
     */
    removeElement() {
      if(0 < intTextBox) {
          document.getElementById('div_' + intTextBox).remove();
          intTextBox--;
          catfill--;
      } else {
          alert("No categories to remove.");
      }
    }

    /**
     * Add specialty to list
     */
    addElementspec() {
      if(5 > intTextBox1){
        intTextBox1++;
        specfill++;
        var objNewDiv1 = document.createElement('div');
        objNewDiv1.setAttribute('id', 'div_' + intTextBox1);
        objNewDiv1.innerHTML = 'Specialty ' + intTextBox1 + ': <input type="text" id="spec_' + intTextBox1 + '"/>';
        document.getElementById('content1').appendChild(objNewDiv1);
      } else {
        alert("Reached limit of 5 specialties.");
      }
    }

    /**
     * Remove specialty from list
     */
    removeElementspec() {
      if(0 < intTextBox1) {
          document.getElementById('div_' + intTextBox1).remove();
          intTextBox1--;
          specfill--;
      } else {
          alert("No specialties to remove.");
      }
    }

    /**
     * Handle file selecting
     */
    handleFileSelect(evt) {
      var useremail=document.getElementById("email").value;
      evt.stopPropagation();
      evt.preventDefault();
      var file = evt.target.files[0];

      var fileName = file.name;
      var metadata = {
        'contentType': file.type
      };

      this.props.dispatch(uploadAnnualReport(useremail,{fileName,file,metadata}));
    }

    /**
    * Loads the signup page for vendor.
    * @return {html} - displays sign up page for vendor.
    */
    render() {
    return(
      <div className="mdl-layout__content" style={{textAlign: 'left'}}>
        <a name="top" />
        <div style={{width: '80%', margin: 'auto'}}>
            <br/><br/><br/>
            <u><h4>Login Information</h4></u>
            <hr/>
            <Textfield floatingLabel style={{width:'300px'}} label="Email" id="email"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} type="password" label="Password" id="password"/>
            <br/>
            <u><h4>Part A: Company Structure</h4></u>
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
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Phone Number" id="phone"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Fax Number" id="fax"/>
            <hr/>
            <u><h5>Owners:</h5></u>

            <div id="content2"></div>
            <br/>
            <p>
                <button onClick={this.addElementowner}>Add</button>
                <button onClick={this.removeElementowner}>Remove</button>
            </p>

            <hr/>
            <u><h5>Description:</h5></u>
            <h6>Nature of Business:<br/> <textarea rows="4" cols="80" id="natureBusiness"></textarea></h6>
            <br/>
            <h6>Length of Time in Business<br/> <textarea rows="4" cols="80" id="timeBusiness"></textarea></h6>
            <br/>
            <h6>Professional Affiliations:<br/> <textarea rows="4" cols="80" id="proAffiliation"></textarea></h6>
            <br/>
            <div>
            <u><h6>Copy of most recent annual report:</h6></u>
            <label>
            <input type="radio" name="report" value="reportEnclosed" id="reportEnclosed"/>Enclosed
            <input type="radio" name="report" value="reportNotAvailable" id="reportNotAvailable"/>Not Available
            <input type="radio" name="report" value="reportNotAvailable" id="reportNotApplicable"/>Not Applicable
            </label>
            <div className="card__supporting-text mdl-color-text--white-600" id="messagesDiv">
            <h6>Choose Annual report(pdf) to upload if 'Enclosed' is checked</h6>
            <input type="file" id="file" name="file" onChange={this.handleFileSelect.bind(this)}/>
            <span id="linkbox"></span>
            </div>
            </div>

            <hr/>
            <u><h4>Part B: Financial</h4></u>
            <Textfield floatingLabel style={{width:'300px'}} label="Bank" id="bank"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Location" id="bankLocation"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Bonding Company" id="bonding"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Location" id="bondingLocation"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Insurance Company" id="insuranceCompany"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Location" id="insuranceLocation"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} type="date" label="Bonding Limit As Of:" id="bondingLimitDate"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Amount" id="bondingLimit"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Most recent annual gross business $" id="grossBus"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Year" id="grossBusYear"/>
            <br/>
            <u><h6>Bankruptcy:</h6></u>
            <div>
            <label>
            <input type="radio" name="bankruptcy" value="bankY" id="bankYes"/>Yes
            <input type="radio" name="bankruptcy" value="bankN" id="bankNo"/>No
            </label>
            </div>

            <hr/>
            <u><h4>Part C: General</h4></u>
            <Textfield floatingLabel style={{width:'300px'}} label="Number of Employees" id="numEmployees"/>
            <u><h5>Additional Locations:</h5></u>
            <hr/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Additional 1: Address 1" id="AD1address1"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Additional 1: Address 2" id="AD1address2"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Additional 1: City" id="AD1city"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Additional 1: Province" id="AD1province"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Additional 1: Country" id="AD1country"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Additional 1: Postal Code" id="AD1postalCode"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Additional 1: Phone Number" id="AD1phone"/>
            <hr/>

            <Textfield floatingLabel style={{width:'300px'}} label="Additional 2: Address 1" id="AD2address1"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Additional 2: Address 2" id="AD2address2"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Additional 2: City" id="AD2city"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Additional 2: Province" id="AD2province"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Additional 2: Country" id="AD2country"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Additional 2: Postal Code" id="AD2postalCode"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Additional 2: Phone Number" id="AD2phone"/>
            <hr/>

            <Textfield floatingLabel style={{width:'300px'}} label="Additional 3: Address 1" id="AD3address1"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Additional 3: Address 2" id="AD3address2"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Additional 3: City" id="AD3city"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Additional 3: Province" id="AD3province"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Additional 3: Country" id="AD3country"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Additional 3: Postal Code" id="AD3postalCode"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Additional 3: Phone Number" id="AD3phone"/>
            <hr/>

            <u><h4>Part D: Qualifications and Experience</h4></u>
            <u><h6>Categories of services provided - List all types of work you are able to provide:</h6></u>

            <div id="content"></div>
            <br/>
            <p>
                <button onClick={this.addElement}>Add</button>
                <button onClick={this.removeElement}>Remove</button>
            </p>
            <hr/>
            <u><h6>Specialties:</h6></u>
            <div id="content1"></div>
            <br/>
            <p>
                <button onClick={this.addElementspec}>Add</button>
                <button onClick={this.removeElementspec}>Remove</button>
            </p>
            <hr/>
            <br/>
            <h6>Work History:</h6>
            <Textfield floatingLabel style={{width:'300px'}} label="Client 1: Operating Name" id="client1"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Client 1: Location" id="client1Location"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Client 1: Phone" id="client1Phone"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Client 1: Email" id="client1Email"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Client 1: Contact Name" id="client1Name"/>
            <h6>Client 1 Details of services provided (type, duration, dates, etc.):&nbsp; <textarea rows="4" cols="80" id="client1Service"></textarea></h6>
            <hr/>
            <Textfield floatingLabel style={{width:'300px'}} label="Client 2: Operating Name" id="client2"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Client 2: Location" id="client2Location"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Client 2: Phone" id="client2Phone"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Client 2: Email" id="client2Email"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Client 2: Contact Name" id="client2Name"/>
            <h6>Client 2 Details of services provided (type, duration, dates, etc.):&nbsp; <textarea rows="4" cols="80" id="client2Service"></textarea></h6>
            <hr/>
            <Textfield floatingLabel style={{width:'300px'}} label="Client 3: Operating Name" id="client3"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Client 3: Location" id="client3Location"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Client 3: Phone" id="client3Phone"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Client 3: Email" id="client3Email"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Client 3: Contact Name" id="client3Name"/>
            <h6>Client 3 Details of services provided (type, duration, dates, etc.):&nbsp; <textarea rows="4" cols="80" id="client3Service"></textarea></h6>
            <hr/>
            <Textfield floatingLabel style={{width:'300px'}} label="Client 4: Operating Name" id="client4"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Client 4: Location" id="client4Location"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Client 4: Phone" id="client4Phone"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Client 4: Email" id="client4Email"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Client 4: Contact Name" id="client4Name"/>
            <h6>Client 4 Details of services provided (type, duration, dates, etc.):&nbsp; <textarea rows="4" cols="80" id="client4Service"></textarea></h6>

            <hr/>
            <h6>Professional Licences: Indicate the categories of Services you are licensed for and the jurisdictions in which they are valid (i.e. Professional Engineers, technicians and other licensed professionals).</h6>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="1. Type of Licence" id="licence1"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Location" id="licence1Location"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="2. Type of Licence" id="licence2"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Location" id="licence2Location"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="3. Type of Licence" id="licence3"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Location" id="licence3Location"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="4. Type of Licence" id="licence4"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Location" id="licence4Location"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="5. Type of Licence" id="licence5"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Location" id="licence5Location"/>
            <hr/>

            <u><h4>Part E: Insurance</h4></u>
            <h6>NOTE: Insurance Requirements are subject to change based on individual scopes of service. General Liability Bodily Injury &amp; Property Damage including the following:</h6>
            <u><h6>1. Products/Completed Operations:</h6></u>
            <Textfield floatingLabel style={{width:'300px'}} label="Insurer" id="insurer1"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Policy Limit" id="policyLimit1"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} type="date" label="Expiry Date" id="expiry1"/>
            <hr/>

            <u><h6>2. Sudden/Accidental Pollution:</h6></u>
            <Textfield floatingLabel style={{width:'300px'}} label="Insurer" id="insurer2"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Policy Limit" id="policyLimit2"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} type="date" label="Expiry Date" id="expiry2"/>
            <hr/>

            <u><h6>3. Cross Liability/Severability of Interest</h6></u>
            <Textfield floatingLabel style={{width:'300px'}} label="Insurer" id="insurer3"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Policy Limit" id="policyLimit3"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} type="date" label="Expiry Date" id="expiry3"/>
            <hr/>

            <u><h6>4. Employers Liability</h6></u>
            <Textfield floatingLabel style={{width:'300px'}} label="Insurer" id="insurer4"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Policy Limit" id="policyLimit4"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} type="date" label="Expiry Date" id="expiry4"/>
            <hr/>

            <u><h6>5. Broad Form Property Damage</h6></u>
            <Textfield floatingLabel style={{width:'300px'}} label="Insurer" id="insurer5"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Policy Limit" id="policyLimit5"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} type="date" label="Expiry Date" id="expiry5"/>
            <hr/>

            <u><h6>6. Blanket Contractual Liability</h6></u>
            <Textfield floatingLabel style={{width:'300px'}} label="Insurer" id="insurer6"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Policy Limit" id="policyLimit6"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} type="date" label="Expiry Date" id="expiry6"/>
            <hr/>

            <u><h6>7. Independent Contractors</h6></u>
            <Textfield floatingLabel style={{width:'300px'}} label="Insurer" id="insurer7"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Policy Limit" id="policyLimit7"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} type="date" label="Expiry Date" id="expiry7"/>
            <hr/>

            <u><h6>8. Non-Owned Automobile</h6></u>
            <Textfield floatingLabel style={{width:'300px'}} label="Insurer" id="insurer8"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Policy Limit" id="policyLimit8"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} type="date" label="Expiry Date" id="expiry8"/>
            <hr/>

            <u><h6>9. Tenants Legal Liability</h6></u>
            <Textfield floatingLabel style={{width:'300px'}} label="Insurer" id="insurer9"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Policy Limit" id="policyLimit9"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} type="date" label="Expiry Date" id="expiry9"/>
            <hr/>

            <u><h6>10. No failure to perform exclusion</h6></u>
            <Textfield floatingLabel style={{width:'300px'}} label="Insurer" id="insurer10"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Policy Limit" id="policyLimit10"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} type="date" label="Expiry Date" id="expiry10"/>
            <hr/>

            <u><h6>11. Errors and Omissions</h6></u>
            <Textfield floatingLabel style={{width:'300px'}} label="Insurer" id="insurer11"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Policy Limit" id="policyLimit11"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} type="date" label="Expiry Date" id="expiry11"/>
            <hr/>

            <u><h6>12. 30 days’ notice for cancellation/non-renewal</h6></u>
            <Textfield floatingLabel style={{width:'300px'}} label="Insurer" id="insurer12"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Policy Limit" id="policyLimit12"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} type="date" label="Expiry Date" id="expiry12"/>
            <hr/>

            <u><h6>13. Automobile Insurance</h6></u>
            <Textfield floatingLabel style={{width:'300px'}} label="Insurer" id="insurer13"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Policy Limit" id="policyLimit13"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} type="date" label="Expiry Date" id="expiry13"/>
            <hr/>

            <u><h6>14. Excess/Umbrella Liability</h6></u>
            <Textfield floatingLabel style={{width:'300px'}} label="Insurer" id="insurer14"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Policy Limit" id="policyLimit14"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} type="date" label="Expiry Date" id="expiry14"/>
            <hr/>

            <u><h6>15. Professional Liability</h6></u>
            <Textfield floatingLabel style={{width:'300px'}} label="Insurer" id="insurer15"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Policy Limit" id="policyLimit15"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} type="date" label="Expiry Date" id="expiry15"/>
            <hr/>

            <u><h4>Part F: Health, Safety, and Environment (HSE) and Regulatory</h4></u>
            <h6>List your workers&#39; compensation board / insurance plan rate for the previous four (4) years starting with the current year. (If your industry is exempt from the requirement to participate in a workers&#39; compensation jurisdiction, please attach the supporting documentation to establish this exemption).</h6>
            <hr/>
            <u><h5>HSE Performance</h5></u>
            <u><h6>1. Employee Hours Worked</h6></u>
            <Textfield floatingLabel style={{width:'300px'}} label="Current Year" id="EHWcurrentYear"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Previous Year 1" id="EHWpreviousYear1"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Previous Year 2" id="EHWpreviousYear2"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Previous Year 3" id="EHWpreviousYear3"/>
            <hr/>

            <u><h6>2. Fatalities</h6></u>
            <Textfield floatingLabel style={{width:'300px'}} label="Current Year" id="FcurrentYear"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Previous Year 1" id="FpreviousYear1"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Previous Year 2" id="FpreviousYear2"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Previous Year 3" id="FpreviousYear3"/>
            <hr/>

            <u><h6>3. Lost time incidents (cases resulting in time loss beyond the date of injury)</h6></u>
            <Textfield floatingLabel style={{width:'300px'}} label="Current Year" id="LTIcurrentYear"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Previous Year 1" id="LTIpreviousYear1"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Previous Year 2" id="LTIpreviousYear2"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Previous Year 3" id="LTIpreviousYear3"/>
            <hr/>

            <u><h6>4. Medical aid injuries (cases resulting in care of a medical practitioner beyond first aid treatment)</h6></u>
            <Textfield floatingLabel style={{width:'300px'}} label="Current Year" id="MAIcurrentYear"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Previous Year 1" id="MAIpreviousYear1"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Previous Year 2" id="MAIpreviousYear2"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Previous Year 3" id="MAIpreviousYear3"/>
            <hr/>

            <u><h6>5. Other recordable cases (cases not classified as medical aid or lost time but resulting in worker unable to perform routine functions)</h6></u>
            <Textfield floatingLabel style={{width:'300px'}} label="Current Year" id="ORCcurrentYear"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Previous Year 1" id="ORCpreviousYear1"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Previous Year 2" id="ORCpreviousYear2"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Previous Year 3" id="ORCpreviousYear3"/>
            <hr/>

            <u><h6>6. Total recordable injuries - Fatalities + Lost time + Medical Aid + Restricted Duty Injuries</h6></u>
            <Textfield floatingLabel style={{width:'300px'}} label="Current Year" id="TRIcurrentYear"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Previous Year 1" id="TRIpreviousYear1"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Previous Year 2" id="TRIpreviousYear2"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Previous Year 3" id="TRIpreviousYear3"/>
            <hr/>

            <u><h5>Worker’s Compensation</h5></u>
            <h6>If Proponent’s Rates are higher than applicable Industry Rate(s), provide details as to why and what measures are being taken to address this.</h6>
            <Textfield floatingLabel style={{width:'300px'}} label="Industry Code" id="industryCode"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Industry Classification" id="industryClassification"/>
            <br/>
            <u><h6>1. Industry Rate</h6></u>
            <Textfield floatingLabel style={{width:'300px'}} label="Current Year" id="IRcurrentYear"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Previous Year 1" id="IRpreviousYear1"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Previous Year 2" id="IRpreviousYear2"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Previous Year 3" id="IRpreviousYear3"/>
            <hr/>

            <u><h6>2. Proponent Rate</h6></u>
            <Textfield floatingLabel style={{width:'300px'}} label="Current Year" id="PRcurrentYear"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Previous Year 1" id="PRpreviousYear1"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Previous Year 2" id="PRpreviousYear2"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Previous Year 3" id="PRpreviousYear3"/>
            <hr/>

            <u><h6>3. % Discount</h6></u>
            <Textfield floatingLabel style={{width:'300px'}} label="Current Year" id="PDcurrentYear"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Previous Year 1" id="PDpreviousYear1"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Previous Year 2" id="PDpreviousYear2"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Previous Year 3" id="PDpreviousYear3"/>
            <hr/>

            <u><h6>4. % Surcharge</h6></u>
            <Textfield floatingLabel style={{width:'300px'}} label="Current Year" id="PScurrentYear"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Previous Year 1" id="PSpreviousYear1"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Previous Year 2" id="PSpreviousYear2"/>
            &nbsp;
            <Textfield floatingLabel style={{width:'300px'}} label="Previous Year 3" id="PSpreviousYear3"/>
            <hr/>

            <h6>Advise if your company has a Drug &amp; Alcohol Policy and provide details:&nbsp; <br/><textarea rows="4" cols="80" id="drugPolicy"></textarea></h6>
            <hr/>

            <h6>Advise if your company evaluates the ability of subcontractors to comply with applicable health and safety requirements as part of your selection process and provide details:&nbsp; <br/><textarea rows="4" cols="80" id="subcontractors"></textarea></h6>
            <hr/>

            <h6>Advise if your company has ever received a regulatory agency stop work order or been investigated by a regulatory body in the last three years in respect of its Occupational Health &amp; Safety record or conduct? If so, attach details and state whether all actions required by the regulatory body have been completed:&nbsp; <br/><textarea rows="4" cols="80" id="stopWorkOrder"></textarea></h6>
            <hr/>

            <h6>Advise if there are any HSE related judgments, claims or suits outstanding against you and if so, provide details:&nbsp; <br/><textarea rows="4" cols="80" id="HSEjudge"></textarea></h6>
            <hr/>

            <Textfield floatingLabel style={{width:'300px'}} label="Admin Email" id="adminContact"/>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Technical Email" id="technicalContact"/>
            <br/>
            <div>
            <label>ISN Member:
              <input type="radio" name="ISNumber" value="isnY" id="ISnumberYes"/>Yes
              <input type="radio" name="ISNumber" value="isnN" id="ISnumberNo"/>No
            </label>
            </div>
            <br/>
            <Textfield floatingLabel style={{width:'300px'}} label="Website" id="website"/>

            <hr/>
            <CardActions>
                <Button raised ripple className="mdl-color-text--indigo btn btn-primary" onClick={this.requestSubmit.bind(this)}>Register</Button>
            </CardActions>
        </div>
      </div>
    );
  }
};
export default ComponentSignUpVendor
