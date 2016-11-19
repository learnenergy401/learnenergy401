
import {firebaseApp,firebaseAuth,firebaseDb, firebaseStorage, firebaseAuthInstance } from '../Firebase'

/**
 * sets the eoikey.
 * @returns {object} dispatch - Returns the state which contains eoikey object
 * @param {object} info - object which contains information about the eoikey.
 * @throws {object} err - Returns an error if failed to push to database.
 */
export function storeEOIkey(info) { // called on button press
  return function(dispatch) {
    // THIS IS USED TO KEEP TRACK OF CURRENT COURSE/VENDOR VIEWED
    firebaseAuth.onAuthStateChanged((user)=>{
      if (user){
        firebaseDb.ref('EOIdetails/'+user.uid).set({
          key_name: info.key_name,
      }).then((data) => {
        dispatch({type: "STORE_EOI_KEY_FULFILLED", payload: user})
      })
      .catch((err) => {
        dispatch({type: "STORE_EOI_KEY_REJECTED", payload: err})
      })
      }
    })
  }
}

/**
 * Grabs the eoikey from the database.
 * @returns {object} eoikey - Returns the object of eoikey.
 * @throws {object} err - Returns an error if failed to fetch from database.
 */
export function fetchEOIkey() {
  return function(dispatch) {
    firebaseAuth.onAuthStateChanged((user)=>{
      if (user){
        firebaseDb.ref('EOIdetails/'+user.uid).once('value')
        .then((snapshot) => {
          dispatch({type: "FETCH_EOI_KEY_FULFILLED", payload: snapshot.val()})
        })
        .catch((err) => {
          dispatch({type: "FETCH_EOI_KEY_REJECTED", payload: err})
        })
      }
    })
  }
}

/**
 * sets the ReqEOI to the database.
 * @returns {object} dispatch - Returns the state which contains reqeoi object
 * @param {object} data - object which contains information about the reqeoi.
 * @throws {object} err - Returns an error if failed to push to database.
 */
export function storeReqEOI(info) { // called on button press
  return function(dispatch) {
    // THIS IS USED TO KEEP TRACK OF CURRENT COURSE/VENDOR VIEWED
    firebaseAuth.onAuthStateChanged((user)=>{
      if (user){
        console.log('user id is ',user.uid)
        firebaseDb.ref('ReqEOI/'+user.uid).set({
          vendor: info.vendor_uid,
          purchaser: user.uid,
          course: info.course_uid,
          email: info.email,
      }).then((data) => {
        dispatch({type: "STORE_REQ_EOI_FULFILLED", payload: user})
      })
      .catch((err) => {
        dispatch({type: "STORE_REQ_EOI_REJECTED", payload: err})
      })
      // move to eoi page
      window.location.assign('/#/course-eoi')
      }
    })
  }
}

/**
 * Grabs the ReqEOIs from the database.
 * @returns {object} reqeoi - Returns the object of reqeoi.
 * @throws {object} err - Returns an error if failed to fetch from database.
 */
export function fetchReqEOI() {
  return function(dispatch) {
    firebaseAuth.onAuthStateChanged((user)=>{
      if (user){
        firebaseDb.ref('ReqEOI/'+user.uid).once('value')
        .then((snapshot) => {
          dispatch({type: "FETCH_REQ_EOI_FULFILLED", payload: snapshot.val()})
        })
        .catch((err) => {
          dispatch({type: "FETCH_REQ_EOI_REJECTED", payload: err})
        })
      }
    })
  }
}

/**
 * sets the EOI to the database.
 * @returns {object} dispatch - Returns the state which contains eoi object
 * @param {object} data - object which contains information about the eoi.
 * @throws {object} err - Returns an error if failed to push to database.
 */
export function storeEOIs(info) {
  return function(dispatch) {
    console.log(info)
    firebaseDb.ref('EOI').push({
      vendor: info.vendor,
      purchaser: info.uid,
      course: info.course,

      // additional details below
      email: info.email,
      email1: info.email1,
      date: info.date,
      service: info.service,
      text1: info.text1,
      text2: info.text2,
      closeDate: info.closeDate,
      closeTime: info.closeTime,
      name1: info.name1,
      title1: info.title1,
      name2: info.name2,
      title2: info.title2,
      email2: info.email2,
      phone: info.phone,

      company_name: info.company_name,
      RFP_par: info.RFP_par,
      vendor_company_address: info.vendor_company_address,
      vendor_contact_name: info.vendor_contact_name, 
      vendor_contact_title_position: info.vendor_contact_title_position,
      vendor_primary_telephone: info.vendor_primary_telephone,
      vendor_alternate_telephone: info.vendor_alternate_telephone,
      vendor_fax: info.vendor_fax,
      vendor_email: info.vendor_email,

      company_approved: info.company_approved,
      optional_comments: info.optional_comments,

      scope: info.scope,
      qualificationA: info.qualificationA,
      qualificationB: info.qualificationB,
      qualificationC: info.qualificationC,
      qualificationD: info.qualificationD,
      response_date: info.response_date,
      email3: info.email3,
      LMRFPnum: info.LMRFPnum,
      selection_date: info.selection_date,

      purchaser_legal: info.purchaser_legal,
      purchaser_address1: info.purchaser_address1,
      purchaser_address2: info.purchaser_address2,
      purchaser_city: info.purchaser_city,
      purchaser_country: info.purchaser_country,
      purchaser_phone: info.purchaser_phone,
      purchaser_fax: info.purchaser_fax,







    }).then((data) => {
      dispatch({type: "STORE_EOI_FULFILLED", payload: user})
    })
    .catch((err) => {
      dispatch({type: "STORE_EOI_REJECTED", payload: err})
    })
    alert("EOI submitted")
    location.reload()
  }
}

/**
 * Grabs the EOIs from the database.
 * @returns {object} eoi - Returns the object of eoi.
 * @throws {object} err - Returns an error if failed to fetch from database.
 */
export function fetchEOIs() {
  return function(dispatch) {

    firebaseDb.ref('EOI').once('value')
    .then((snapshot) => {
      dispatch({type: "FETCH_EOI_FULFILLED", payload: snapshot.val()})
    })
    .catch((err) => {
      dispatch({type: "FETCH_EOI_REJECTED", payload: err})
    })

  }
}

/**
 * Removes from EOI table
 * @params {object} key - key name to remove
 */
export function removeEOI(key) {
  return function(dispatch) {

    firebaseDb.ref('EOI/'+key.key_name).remove().then(function() {

      console.log("removed")
      location.reload()
      }).then((data) => {
        dispatch({type: "REMOVED_EOI_FULFILLED"})
      })
    .catch(function(err) {
      console.log("failed to remove")
    })
  }
}

/**
 * Grabs the key and role from the database.
 * @returns {object} key - Returns the object of key.
 * @throws {object} err - Returns an error if failed to fetch from database.
 */
export function fetchKeyRole() {
  return function(dispatch) {
    firebaseAuth.onAuthStateChanged((user)=>{
      if (user){
        firebaseDb.ref('Keys_Roles/'+user.uid).once('value')
          .then((snapshot) => {
            dispatch({type: "FETCH_KEYS_ROLES_FULFILLED", payload: snapshot.val()})
          })
          .catch((err) => {
            dispatch({type: "FETCH_KEYS_ROLES_REJECTED", payload: err})
          })
        }
      })
  }
}

/**
 * sets the key and role to the database.
 * @returns {object} dispatch - Returns the state which contains keys_roles object
 * @param {object} data - object which contains information about the key and role of the user.
 * @throws {object} err - Returns an error if failed to push to database.
 */
export function storeKeyRole(data) {
  return function(dispatch) {
    dispatch({type: "STORE_KEYS_ROLES_FULFILLED"})
    firebaseAuth.onAuthStateChanged((user)=>{
      if (user){
        firebaseDb.ref('Keys_Roles/'+user.uid).set({
          key: data.key_name,
          role: data.role,
        })
        .catch((err) => {
          dispatch({type: "STORE_KEYS_ROLES_REJECTED", payload: err})
        })
      }
    })
  }
}

/**
 * Grabs the purchasers from the Purchaser SignUp list in the database.
 * @returns {object} purchasers - Returns the object of purchasers.
 * @throws {object} err - Returns an error if failed to fetch from database.
 */
export function fetchAdminSignup() {
  return function(dispatch) {
    firebaseDb.ref('AdminSignup').once("value")
      .then((snapshot) => {
        dispatch({type: "FETCH_ADMIN_FULFILLED", payload: snapshot.val()})
      })
      .catch((err) => {
        dispatch({type: "FETCH_USER_REJECTED", payload: err})
      })
  }
}

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
          firebaseDb.ref('User/' + currentUser.uid).set(user)

          firebaseDb.ref('PurchaserSignup/'+user.key_name).remove().then(function() {
            console.log("removed")
            location.reload();
          })
          .catch(function(err) {
            console.log("failed to remove", user.key_name)
          })

        } else if (user.role == 1) { // push as a vendor

          firebaseDb.ref('User/' + currentUser.uid).set(user)

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

        else if (user.role == 3) {
          // if an admin is approved, set up admin account
          firebaseDb.ref('User/' + currentUser.uid).set({
            email: user.email,
            password: user.password,
            role: user.role,
          })
          firebaseDb.ref('Notifications/' + currentUser.uid).set({
            notified: false,
          })
          firebaseDb.ref('Keys_Roles/' + currentUser.uid).set({
            // set with base values
            key: "test",
            role: 0,
          })
          firebaseDb.ref('AdminSignup/'+user.key_name).remove().then(function() {
            location.reload()
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
        console.log("purchaser removed")
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
    user.role = 0
    firebaseDb.ref('PurchaserSignup').push(user).then((data) => {
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
    user.role = 1
    firebaseDb.ref('VendorSignup').push(user).then((data) => {

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
              var currentUser = firebaseAuth.currentUser
              firebaseDb.ref('Notifications/'+currentUser.uid).set({
                  notified: false
                })
              dispatch({type: "LOGIN_USER_FULFILLED", payload: data})
            })
            .catch((err) => {
              dispatch({type: "LOGIN_USER_REJECTED", payload: err})
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
                dispatch({type: "LOGOUT_USER_FULFILLED"})
            })
            .catch((err) => {
                dispatch({type: "LOGOUT_USER_REJECTED", payload: err})
            })
    }
}

export function updateProfile(user) {
    return function(dispatch) {
      dispatch({type: "UPDATE_USER_PROFILE"})
      var currentUser = firebaseAuth.currentUser
        
      if (true) { // update as a vendor
        firebaseDb.ref('User/' + currentUser.uid).set(user).then((data) => {
          dispatch({type: "UPDATE_USER_PROFILE_FULFILLED"})
        
        }).catch((err)=>{
          dispatch({type:"UPDATE_USER_PROFILE_REJECTED",payload:err})
        })
      }
    }
}