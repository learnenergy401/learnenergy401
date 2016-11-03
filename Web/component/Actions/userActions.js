
import {firebaseApp,firebaseAuth,firebaseDb, firebaseStorage, firebaseAuthInstance } from '../Firebase'

/**
 * Grabs the purchasers from the Purchaser SignUp list in the database
 * @returns {object} purchasers - Returns the object of purchasers.
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
 * Grabs the vendors from the Vendor SignUp list in the database
 * @returns {object} vendors - Returns the object of vendors.
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
 * Grabs the addition resources from the additional resouce SignUp list in the database
 * @returns {object} ads - Returns the object of additional resources.
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
 * Checks to see if the user is logged in and then returns information about the current user logged in
 * @returns {object} user - Returns the object of user.
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
 * Gets user information passed in and will create the account for the user and remove the old user from the signup list
 * @param {object} user - object which contains information for us to register into firebase with and store in our database
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
            email: user.email,
            adminContact: user.adminContact,
            technicalContact: user.technicalContact,
            ISnumber: user.ISnumber,
            website: user.website,
            password: user.password,
            role: user.role,
            owners: user.owners,
            natureBusiness: user.natureBusiness,
            timeBusiness: user.timeBusiness,
            proAffiliation: user.proAffiliation,
            bank: user.bank,
            bonding: user.bonding,
            bondingLimit: user.bondingLimit,
            insurance: user.insurance,
            bankruptcy: user.bankruptcy,
            numEmployees: user.numEmployees,
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
 * Gets user information passed in and will remove the user from the signup list
 * @param {object} user - object which contains information about the user
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
 * Gets purchaser user information passed in and will add the user to the purchaser signup list
 * @param {object} user - object which contains information about the user purchaser
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
 * Gets vendor user information passed in and will add the user to the vendor signup list
 * @param {object} user - object which contains information about the user vendor
 */
export function signUpVendor(user) {
  return function(dispatch) {
    firebaseDb.ref('VendorSignup').push({
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
      ISnumber: user.ISnumber,
      website: user.website,
      owners: user.owners,
      natureBusiness: user.natureBusiness,
      timeBusiness: user.timeBusiness,
      proAffiliation: user.proAffiliation,
      bank: user.bank,
      bonding: user.bonding,
      bondingLimit: user.bondingLimit,
      insurance: user.insurance,
      bankruptcy: user.bankruptcy,
      numEmployees: user.numEmployees,
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
 * Gets additional resource user information passed in and will add the user to the additional resource signup list
 * @param {object} user - object which contains information about the user additional resource
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
 * Logs in the user using firebase authentication and sets notifications to false, error if invalid information
 * @param {object} user - object which contains information about the user to log in with
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
 * Logs out the user using firebase authentication 
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
