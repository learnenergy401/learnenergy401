
import {firebaseApp,firebaseAuth,firebaseDb, firebaseStorage, firebaseAuthInstance } from '../Firebase'

/**
 * Grabs the purchasers from the Purchaser SignUp list in the database.
 * @returns {object} purchasers - Returns the object of purchasers.
 * @throws {object} err - Returns an error if failed to fetch from database.
 */
export function fetchPurchaserSignup() {
  return function(dispatch) {
    firebaseDb.ref('PurchaserSignup').once("value")
      .then((snapshot) => {
        dispatch({type: "FETCH_PURCHASER_FULFILLED", payload: snapshot.val()})
      })
      .catch((err) => {
        dispatch({type: "FETCH_USER_REJECTED", payload: err})
      })
  }
}

/**
 * Grabs the vendors from the Vendor SignUp list in the database.
 * @returns {object} vendors - Returns the object of vendors.
 * @throws {object} err - Returns an error if failed to fetch from database.
 */
export function fetchVendorSignup() {
  return function(dispatch) {
    firebaseDb.ref('VendorSignup').once("value")
      .then((snapshot) => {
        dispatch({type: "FETCH_VENDOR_FULFILLED", payload: snapshot.val()})
      })
      .catch((err) => {
        dispatch({type: "FETCH_USER_REJECTED", payload: err})
      })
  }
}

/**
 * Grabs the addition resources from the additional resouce SignUp list in the database.
 * @returns {object} ads - Returns the object of additional resources.
 * @throws {object} err - Returns an error if failed to fetch from database.
 */
export function fetchADSignup() {
  return function(dispatch) {
    firebaseDb.ref('ADSignup').once("value")
      .then((snapshot) => {
        dispatch({type: "FETCH_AD_FULFILLED", payload: snapshot.val()})
      })
      .catch((err) => {
        dispatch({type: "FETCH_USER_REJECTED", payload: err})
      })
  }
}

/**
 * Checks to see if the user is logged in and then returns information about the current user logged in.
 * @returns {object} user - Returns the object of user.
 * @throws {object} err - Returns an error if failed to find current logged in user.
 */
export function getCurrentUser() {
  return function(dispatch) {
   firebaseAuth.onAuthStateChanged((user)=>{
      if (user){
        dispatch({type: "FETCH_USER_FULFILLED", payload: user,isLoggedIn: true})
        firebaseDb.ref('User/' + user.uid).once("value")
        .then((snapshot) => {
            dispatch({type: "FETCH_USER_PROFILE_FULFILLED", payload: snapshot.val()})
        })
        .catch((err) => {
            dispatch({type: "FETCH_USER_PROFILE_REJECTED", payload: err})
        })
      } else {
        dispatch({type: "FETCH_USER_REJECTED", payload: user,isLoggedIn: false})
      }
   }
  )}
}

/**
 * Gets user information passed in and will create the account for the user and remove the old user from the signup list.
 * @returns {object} dispatch - Returns the state which contains user object
 * @param {object} user - object which contains information for us to register into firebase with and store in our database.
 * @throws {object} err - Returns an error if failed to grab, remove from database or add to firebase.
 */
export function approveUser(user) {
  return function(dispatch) {
    firebaseAuthInstance.createUserWithEmailAndPassword(user.email, user.password)
    .then((data) => {
      dispatch({type: "SIGNUP_USER_FULFILLED"})
      firebaseAuthInstance.signInWithEmailAndPassword(user.email, user.password)
      .then((data) => {
        var currentUser = firebaseAuthInstance.currentUser

        if (user.role==0) { // push as a purchaser
          firebaseDb.ref('User/' + currentUser.uid).set({
            legalEntity: user.legalEntity,
            operatingName: user.operatingName,
            address1: user.address1,
            address2: user.address2,
            city: user.city,
            province: user.province,
            country: user.country,
            postalCode: user.postalCode,
            phone: user.phone,
            fax: user.fax,
            email: user.email,
            adminContact: user.adminContact,
            technicalContact: user.technicalContact,

            gstReg: user.gstReg,
            billAddress1: user.billAddress1,
            billAddress2: user.billAddress2,
            billCity: user.billCity,
            billProvince: user.billProvince,
            billCountry: user.billCountry,
            billPostalCode: user.billPostalCode,
            accntRec: user.accntRec,
            bank: user.bank,

            ISnumber: user.ISnumber,
            website: user.website,
            password: user.password,

            jointVenture: user.jointVenture,
            categories: user.categories,

            role: user.role,
          })

          firebaseDb.ref('PurchaserSignup/'+user.key_name).remove().then(function() {
            console.log("removed")
            location.reload();
          })
          .catch(function(err) {
            console.log("failed to remove", user.key_name)
          })

        } else if (user.role == 1) { // push as a vendor

          firebaseDb.ref('User/' + currentUser.uid).set({
            legalEntity: user.legalEntity,
            operatingName: user.operatingName,
            address1: user.address1,
            address2: user.address2,
            city: user.city,
            province: user.province,
            country: user.country,
            postalCode: user.postalCode,
            phone: user.phone,
            fax: user.fax,

            owner1Name: user.owner1Name,
            owner1Pos: user.owner1Pos,

            natureBusiness: user.natureBusiness,
            timeBusiness: user.timeBusiness,
            proAffiliation: user.proAffiliation,
            report:user.report,

            bank: user.bank,
            bankLocation: user.bankLocation,
            bonding: user.bonding,
            bondingLocation: user.bondingLocation,
            insuranceCompany: user.insuranceCompany,
            insuranceLocation: user.insuranceLocation,
            bondingLimitDate: user.bondingLimitDate,
            bondingLimit: user.bondingLimit,
            grossBus: user.grossBus,
            grossBusYear: user.grossBusYear,
            bankruptcy:user.bankruptcy,

            numEmployees: user.numEmployees,
            AD1address1: user.AD1address1,
            AD1address2: user.AD1address2,
            AD1city: user.AD1city,
            AD1province: user.AD1province,
            AD1country: user.AD1country,
            AD1postalCode: user.AD1postalCode,
            AD1phone: user.AD1phone,

            categories: user.categories,
            specialties: user.specialties,

            client1: user.client1,
            client1Location: user.client1Location,
            client1Phone: user.client1Phone,
            client1Email: user.client1Email,

            licence1: user.licence1,
            licence1Location: user.licence1Location,
            insurer1: user.insurer1,  policyLimit1: user.policyLimit1,  expiry1: user.expiry1,
            insurer2: user.insurer2,  policyLimit2: user.policyLimit2,  expiry2: user.expiry2,
            insurer3: user.insurer3,  policyLimit3: user.policyLimit3,  expiry3: user.expiry3,
            insurer4: user.insurer4,  policyLimit4: user.policyLimit4,  expiry4: user.expiry4,
            insurer5: user.insurer5,  policyLimit5: user.policyLimit5,  expiry5: user.expiry5,
            insurer6: user.insurer6,  policyLimit6: user.policyLimit6,  expiry6: user.expiry6,
            insurer7: user.insurer7,  policyLimit7: user.policyLimit7,  expiry7: user.expiry7,
            insurer8: user.insurer8,  policyLimit8: user.policyLimit8,  expiry8: user.expiry8,
            insurer9: user.insurer9,  policyLimit9: user.policyLimit9,  expiry9: user.expiry9,
            insurer10: user.insurer10,  policyLimit10: user.policyLimit10,  expiry10: user.expiry10,
            insurer11: user.insurer11,  policyLimit11: user.policyLimit11,  expiry11: user.expiry11,
            insurer12: user.insurer12,  policyLimit12: user.policyLimit12,  expiry12: user.expiry12,
            insurer13: user.insurer13,  policyLimit13: user.policyLimit13,  expiry13: user.expiry13,
            insurer14: user.insurer14,  policyLimit14: user.policyLimit14,  expiry14: user.expiry14,
            insurer15: user.insurer15,  policyLimit15: user.policyLimit15,  expiry15: user.expiry15,

            EHWcurrentYear: user.EHWcurrentYear,  EHWpreviousYear1: user.EHWpreviousYear1,  EHWpreviousYear2: user.EHWpreviousYear2,  EHWpreviousYear3: user.EHWpreviousYear3,
            FcurrentYear: user.FcurrentYear,  FpreviousYear1: user.FpreviousYear1,  FpreviousYear2: user.FpreviousYear2,  FpreviousYear3: user.FpreviousYear3,
            LTIcurrentYear: user.LTIcurrentYear,  LTIpreviousYear1: user.LTIpreviousYear1,  LTIpreviousYear2: user.LTIpreviousYear2,  LTIpreviousYear3: user.LTIpreviousYear3,
            MAIcurrentYear: user.MAIcurrentYear,  MAIpreviousYear1: user.MAIpreviousYear1,  MAIpreviousYear2: user.MAIpreviousYear2,  MAIpreviousYear3: user.MAIpreviousYear3,
            ORCcurrentYear: user.ORCcurrentYear,  ORCpreviousYear1: user.ORCpreviousYear1, ORCpreviousYear2: user.ORCpreviousYear2,  ORCpreviousYear3: user.ORCpreviousYear3,
            TRIcurrentYear: user.TRIcurrentYear,  TRIpreviousYear1: user.TRIpreviousYear1,  TRIpreviousYear2: user.TRIpreviousYear2,  TRIpreviousYear3: user.TRIpreviousYear3,

            IRcurrentYear: user.IRcurrentYear,  IRpreviousYear1: user.IRpreviousYear1,  IRpreviousYear2: user.IRpreviousYear2,  IRpreviousYear3: user.IRpreviousYear3,
            PRcurrentYear: user.PRcurrentYear,  PRpreviousYear1: user.PRpreviousYear1,  PRpreviousYear2: user.PRpreviousYear2,  PRpreviousYear3: user.PRpreviousYear3,
            PDcurrentYear: user.PDcurrentYear,  PDpreviousYear1: user.PDpreviousYear1,  PDpreviousYear2: user.PDpreviousYear2,  PDpreviousYear3: user.PDpreviousYear3,
            PScurrentYear: user.PScurrentYear,  PSpreviousYear1: user.PSpreviousYear1,  PSpreviousYear2: user.PSpreviousYear2,  PSpreviousYear3: user.PSpreviousYear3,

            drugPolicy: user.drugPolicy,
            subcontractors: user.subcontractors,
            stopWorkOrder: user.stopWorkOrder,

            email: user.email,
            adminContact: user.adminContact,
            technicalContact: user.technicalContact,

            ISnumber:user.ISnumber,

            website: user.website,
            password: user.password,
            role: user.role,
          })
          firebaseDb.ref('VendorSignup/'+user.key_name).remove().then(function() {
            console.log("removed")
            location.reload();
          })
          .catch(function(err) {
            console.log("failed to remove", user.key_name)
          })


        } else if (user.role == 2) { //push as an additional resource

          firebaseDb.ref('User/' + currentUser.uid).set({
            website: user.website,
            email: user.email,
            password: user.password,
            role: user.role,
          })
          firebaseDb.ref('ADSignup/'+user.key_name).remove().then(function() {
            console.log("removed")
            location.reload();
          })
          .catch(function(err) {
            console.log("failed to remove", user.key_name)
          })
        }
      })
    })
    firebaseAuthInstance.signOut()
  }
}

/**
 * Gets user information passed in and will remove the user from the signup list.
 * @returns {object} dispatch - Returns the state which contains user object
 * @param {object} user - object which contains information about the user.
 * @throws {object} err - Returns an error if failed to remove from database.
 */
export function rejectUser(user) {
  return function(dispatch) {
    if (user.role == 0) { // reject purchaser
      firebaseDb.ref('PurchaserSignup/'+user.key_name).remove().then(function() {
        console.log("purchaseer removed")
        location.reload();
      }).then((data) => {
        dispatch({type: "SIGNUP_USER_REJECTED", paylod: data})
      })
    } else if (user.role == 1) { // reject vendor
      firebaseDb.ref('VendorSignup/'+user.key_name).remove().then(function() {
        console.log("vendor removed")
        location.reload();
      }).then((data) => {
        dispatch({type: "SIGNUP_USER_REJECTED", paylod: data})
      })
    } else if (user.role == 2) { // reject additional resource
      firebaseDb.ref('ADSignup/'+user.key_name).remove().then(function() {
        console.log("ad removed")
        location.reload();
      }).then((data) => {
        dispatch({type: "SIGNUP_USER_REJECTED", paylod: data})
      })
    }
  }
}

/**
 * Gets purchaser user information passed in and will add the user to the purchaser signup list.
 * @returns {object} dispatch - Returns the state which contains user object
 * @param {object} user - object which contains information about the user purchaser.
 * @throws {object} err - Returns an error if failed to push to database.
 */
export function signUpPurchaser(user) {
  return function(dispatch) {
    firebaseDb.ref('PurchaserSignup').push({
      email: user.email,
      password: user.password,
      legalEntity: user.legalEntity,
      operatingName: user.operatingName,
      address1: user.address1,
      address2: user.address2,
      city: user.city,
      province: user.province,
      country: user.country,
      postalCode: user.postalCode,
      phone: user.phone,
      fax: user.fax,
      adminContact: user.adminContact,
      technicalContact: user.technicalContact,

      gstReg: user.gstReg,
      billAddress1: user.billAddress1,
      billAddress2: user.billAddress2,
      billCity: user.billCity,
      billProvince: user.billProvince,
      billCountry: user.billCountry,
      billPostalCode: user.billPostalCode,
      accntRec: user.accntRec,
      bank: user.bank,

      ISnumber: user.ISnumber,
      website: user.website,

      jointVenture: user.jointVenture,
      categories: user.categories,

      role: 0,
    }).then((data) => {
      dispatch({type: "SIGNUP_USER_FULFILLED", payload: user})
    })
    .catch((err) => {
      dispatch({type: "SIGNUP_USER_REJECTED", payload: err})
    })
    alert("Thank you for registering as a Purchaser for LearnEnergy Marketplace." +"\n" + "We will be in contact with you shortly.");
    location.reload();
  }
}

/**
 * Gets vendor user information passed in and will add the user to the vendor signup list.
 * @returns {object} dispatch - Returns the state which contains user object
 * @param {object} user - object which contains information about the user vendor.
 * @throws {object} err - Returns an error if failed to push to database.
 */
export function signUpVendor(user) {
  return function(dispatch) {
    firebaseDb.ref('VendorSignup').push({
      legalEntity: user.legalEntity,
      operatingName: user.operatingName,
      address1: user.address1,
      address2: user.address2,
      city: user.city,
      province: user.province,
      country: user.country,
      postalCode: user.postalCode,
      phone: user.phone,
      fax: user.fax,

      owner1Name: user.owner1Name,
      owner1Pos: user.owner1Pos,

      natureBusiness: user.natureBusiness,
      timeBusiness: user.timeBusiness,
      proAffiliation: user.proAffiliation,
      report:user.report,

      bank: user.bank,
      bankLocation: user.bankLocation,
      bonding: user.bonding,
      bondingLocation: user.bondingLocation,
      insuranceCompany: user.insuranceCompany,
      insuranceLocation: user.insuranceLocation,
      bondingLimitDate: user.bondingLimitDate,
      bondingLimit: user.bondingLimit,
      grossBus: user.grossBus,
      grossBusYear: user.grossBusYear,
      bankruptcy:user.bankruptcy,

      numEmployees: user.numEmployees,
      AD1address1: user.AD1address1,
      AD1address2: user.AD1address2,
      AD1city: user.AD1city,
      AD1province: user.AD1province,
      AD1country: user.AD1country,
      AD1postalCode: user.AD1postalCode,
      AD1phone: user.AD1phone,

      categories: user.categories,
      specialties: user.specialties,

      client1: user.client1,
      client1Location: user.client1Location,
      client1Phone: user.client1Phone,
      client1Email: user.client1Email,

      licence1: user.licence1,
      licence1Location: user.licence1Location,
      insurer1: user.insurer1,  policyLimit1: user.policyLimit1,  expiry1: user.expiry1,
      insurer2: user.insurer2,  policyLimit2: user.policyLimit2,  expiry2: user.expiry2,
      insurer3: user.insurer3,  policyLimit3: user.policyLimit3,  expiry3: user.expiry3,
      insurer4: user.insurer4,  policyLimit4: user.policyLimit4,  expiry4: user.expiry4,
      insurer5: user.insurer5,  policyLimit5: user.policyLimit5,  expiry5: user.expiry5,
      insurer6: user.insurer6,  policyLimit6: user.policyLimit6,  expiry6: user.expiry6,
      insurer7: user.insurer7,  policyLimit7: user.policyLimit7,  expiry7: user.expiry7,
      insurer8: user.insurer8,  policyLimit8: user.policyLimit8,  expiry8: user.expiry8,
      insurer9: user.insurer9,  policyLimit9: user.policyLimit9,  expiry9: user.expiry9,
      insurer10: user.insurer10,  policyLimit10: user.policyLimit10,  expiry10: user.expiry10,
      insurer11: user.insurer11,  policyLimit11: user.policyLimit11,  expiry11: user.expiry11,
      insurer12: user.insurer12,  policyLimit12: user.policyLimit12,  expiry12: user.expiry12,
      insurer13: user.insurer13,  policyLimit13: user.policyLimit13,  expiry13: user.expiry13,
      insurer14: user.insurer14,  policyLimit14: user.policyLimit14,  expiry14: user.expiry14,
      insurer15: user.insurer15,  policyLimit15: user.policyLimit15,  expiry15: user.expiry15,

      EHWcurrentYear: user.EHWcurrentYear,  EHWpreviousYear1: user.EHWpreviousYear1,  EHWpreviousYear2: user.EHWpreviousYear2,  EHWpreviousYear3: user.EHWpreviousYear3,
      FcurrentYear: user.FcurrentYear,  FpreviousYear1: user.FpreviousYear1,  FpreviousYear2: user.FpreviousYear2,  FpreviousYear3: user.FpreviousYear3,
      LTIcurrentYear: user.LTIcurrentYear,  LTIpreviousYear1: user.LTIpreviousYear1,  LTIpreviousYear2: user.LTIpreviousYear2,  LTIpreviousYear3: user.LTIpreviousYear3,
      MAIcurrentYear: user.MAIcurrentYear,  MAIpreviousYear1: user.MAIpreviousYear1,  MAIpreviousYear2: user.MAIpreviousYear2,  MAIpreviousYear3: user.MAIpreviousYear3,
      ORCcurrentYear: user.ORCcurrentYear,  ORCpreviousYear1: user.ORCpreviousYear1,  ORCpreviousYear2: user.ORCpreviousYear2,  ORCpreviousYear3: user.ORCpreviousYear3,
      TRIcurrentYear: user.TRIcurrentYear,  TRIpreviousYear1: user.TRIpreviousYear1,  TRIpreviousYear2: user.TRIpreviousYear2,  TRIpreviousYear3: user.TRIpreviousYear3,

      IRcurrentYear: user.IRcurrentYear,  IRpreviousYear1: user.IRpreviousYear1,  IRpreviousYear2: user.IRpreviousYear2,  IRpreviousYear3: user.IRpreviousYear3,
      PRcurrentYear: user.PRcurrentYear,  PRpreviousYear1: user.PRpreviousYear1,  PRpreviousYear2: user.PRpreviousYear2,  PRpreviousYear3: user.PRpreviousYear3,
      PDcurrentYear: user.PDcurrentYear,  PDpreviousYear1: user.PDpreviousYear1,  PDpreviousYear2: user.PDpreviousYear2,  PDpreviousYear3: user.PDpreviousYear3,
      PScurrentYear: user.PScurrentYear,  PSpreviousYear1: user.PSpreviousYear1,  PSpreviousYear2: user.PSpreviousYear2,  PSpreviousYear3: user.PSpreviousYear3,

      drugPolicy: user.drugPolicy,
      subcontractors: user.subcontractors,
      stopWorkOrder: user.stopWorkOrder,

      email: user.email,
      adminContact: user.adminContact,
      technicalContact: user.technicalContact,

      ISnumber:user.ISnumber,

      website: user.website,
      password: user.password,
      role: 1,
    }).then((data) => {
      dispatch({type: "SIGNUP_USER_FULFILLED", payload: user})
    })
    .catch((err) => {
      dispatch({type: "SIGNUP_USER_REJECTED", payload: err})
    })
    alert("Thank you for registering as a Vendor for LearnEnergy Marketplace." +"\n" + "We will be in contact with you shortly.");
    location.reload();
  }
}

/**
 * Gets additional resource user information passed in and will add the user to the additional resource signup list.
 * @returns {object} dispatch - Returns the state which contains user object
 * @param {object} user - object which contains information about the user additional resource.
 * @throws {object} err - Returns an error if failed to push to database.
 */
export function signUpAD(user) {
  return function(dispatch) {
    firebaseDb.ref('ADSignup').push({
      website: user.website,
      email: user.email,
      password: user.password,
      role: 2,
    }).then((data) => {
      dispatch({type: "SIGNUP_USER_FULFILLED", payload: user})
    })
    .catch((err) => {
      dispatch({type: "SIGNUP_USER_REJECTED", payload: err})
    })
    alert("Thank you for registering as an Additional User for LearnEnergy Marketplace." +"\n" + "We will be in contact with you shortly.");
    location.reload();
  }
}

/**
 * Logs in the user using firebase authentication and sets notifications to false, error if invalid information.
 * @returns {object} dispatch - Returns the state which contains user object
 * @param {object} user - object which contains information about the user to log in with.
 * @throws {object} err - Returns an error if failed to login.
 */
export function logInUser(user) {
    return function(dispatch) {
        firebaseAuth.signInWithEmailAndPassword(user.email, user.pw)
            .then((data) => {
              dispatch({type: "LOGIN_USER_FULFILLED", payload: data})
            })
            .catch((err) => {
              dispatch({type: "LOGIN_USER_REJECTED", payload: err})
            })
        firebaseDb.ref('Notifications/Admin_Notification').set({
            notified: false
          })
    }
}

/**
 * Logs out the user using firebase authentication.
 * @returns {object} dispatch - Returns the state which contains user object
 * @throws {object} err - Returns an error if fail to logout.
 */
export function logOutUser() {
    return function(dispatch) {

        firebaseAuth.signOut()
            .then((data) => {
                console.log(data)
                dispatch({type: "LOGOUT_USER_FULFILLED"})
            })
            .catch((err) => {
                dispatch({type: "LOGOUT_USER_REJECTED", payload: err})
            })
    }
}
