
import {firebaseApp,firebaseAuth,firebaseDb, firebaseStorage, firebaseAuthInstance } from '../Firebase'
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
